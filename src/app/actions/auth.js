"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/* ======================
   LOGIN
====================== */
export async function login(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const email = `${username}@app.local`;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Usuario o contraseña incorrectos" };
  }

  redirect("/");
}

/* ======================
   REGISTRO
====================== */
export async function register(prevState, formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // Validaciones básicas
  if (!username || username.length < 3) {
    return { error: "El usuario debe tener al menos 3 caracteres" };
  }

  if (username.includes("@")) {
    return { error: "El usuario no puede contener '@'" };
  }

  if (!password || password.length < 6) {
    return { error: "La contraseña debe tener al menos 6 caracteres" };
  }

  const email = `${username}@app.local`;
  const supabase = await createClient();

  // Validar username único
  const { data: exists } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();

  if (exists) {
    return { error: "El usuario ya existe" };
  }

  // Registrar usuario
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { username },
      emailRedirectTo: undefined, // Desactivar redirect de email
    },
  });

  if (error) {
    console.error("Error en signUp:", error);
    return { error: error.message };
  }

  // Desloguear para forzar al usuario a iniciar sesión con sus nuevas credenciales
  await supabase.auth.signOut();

  // NOTA RÁPIDA: Se eliminó la creación manual de perfil ('profiles') porque causaba error PGRST205.
  // Se recomienda usar un Trigger en Supabase para crear el perfil automáticamente al insertar en auth.users.

  redirect("/login?registered=true");
}

/* ======================
   LOGOUT
====================== */
export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
