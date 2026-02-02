// src/proxy.js
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const authRouteList = ["/caja", "/clientes", "/cobranza", "/creditos", "/dashboard", "/"];
const publicRoutes = ["/login", "/register"];

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    },
  );

  // 🔐 Obtener usuario
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 🔒 Protección de rutas autenticadas
  if (authRouteList.includes(pathname) && !user) {
    console.log("❌ Usuario no autenticado, redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🔓 Redirigir a inicio si ya está autenticado y trata de acceder a login/register
  if (publicRoutes.includes(pathname) && user) {
    console.log("✅ Usuario ya autenticado, redirigiendo a /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

