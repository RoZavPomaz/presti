"use client";

import Link from "next/link";
import { Home, Users, CreditCard, Wallet, Landmark } from "lucide-react";
import { usePathname } from "next/navigation";
const menu = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Créditos", href: "/creditos", icon: CreditCard },
  { name: "Cobranza", href: "/cobranza", icon: Wallet },
  { name: "Caja", href: "/caja", icon: Landmark },
];

export default function NavbarMobile() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] bg-azulOscuro rounded-2xl shadow-xl">
      <ul className="grid grid-cols-5">
        {menu.map((item) => {
          const Icon = item.icon;
          const IsActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex flex-col items-center justify-center py-3 transition 
                  ${
                    IsActive
                      ? "bg-blue-600 text-white rounded-2xl"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
