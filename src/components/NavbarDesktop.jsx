"use client";
import { logout } from "@/app/actions/auth";
import Logo from "./Logo";

import {
  Home,
  Users,
  CreditCard,
  Wallet,
  Landmark,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menu = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Créditos", href: "/creditos", icon: CreditCard },
  { name: "Cobranza", href: "/cobranza", icon: Wallet },
  { name: "Caja", href: "/caja", icon: Landmark },
];

export default function NavbarDesktop() {
  const pathname = usePathname();
  return (
    <nav className="bg-azulOscuro w-[40vh] h-screen hidden lg:flex flex-col text-gray-300 hover:text-white transition justify-center   ">
      <div className="h-[90%] flex flex-col justify-between ">
        <ul className="flex flex-col justify-between gap-6 list-none pl-0">
          <li className="list-none">
            <Logo />
          </li>
          {menu.map((item) => {
            const Icon = item.icon;
            const IsActive = pathname == item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex gap-4 text-xl p-4 py-4 ${IsActive ? "bg-blue-600 text-white rounded-2xl" : "text-gray-300 hover:text-white"}`}
                >
                  <Icon size={30} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center  ">
          <form action={logout}>
            <button type="submit" className="cursor-pointer w-full flex gap-2 items-center">

              <LogOut size={40} color="red" />
              Salir
            </button>

          </form>
        </div>
      </div>
    </nav>
  );
}
