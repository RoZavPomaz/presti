"use client";

import { register } from "@/app/actions/auth";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useActionState } from "react";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(register, null);

  return (
    <div className="w-full max-w-sm">
      <div className="bg-azulOscuro p-8 rounded-t-2xl flex justify-center shadow-lg">
        <Logo />
      </div>

      <div className="bg-white p-8 rounded-b-2xl shadow-lg border-x border-b border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Crear Cuenta</h2>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input
              name="username"
              placeholder="Elige un nombre de usuario"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
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
            {isPending ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
