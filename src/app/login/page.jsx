"use client";

import { login } from "@/app/actions/auth";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null);
  const searchParams = useSearchParams();
  const registered = searchParams.get("registered");

  return (
    <div className="w-full max-w-sm">
      <div className="bg-azulOscuro p-8 rounded-t-2xl flex justify-center shadow-lg">
        <Logo />
      </div>

      <div className="bg-white p-8 rounded-b-2xl shadow-lg border-x border-b border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

        {registered && (
          <div className="mb-4 p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg text-center">
            ¡Registro exitoso! Por favor inicia sesión.
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input
              name="username"
              placeholder="Ingresa tu usuario"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {state?.error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 mt-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {isPending ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
