import { Inter } from "next/font/google";
import "./globals.css";
import NavbarMobile from "@/components/NavbarMobile";
import NavbarDesktop from "@/components/NavbarDesktop";
import { createClient } from "@/lib/supabase/server";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default async function RootLayout({ children }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="es">
      <body className={inter.variable}>
        {user ? (
          <>
            {/* Layout desktop */}
            <div className="hidden lg:flex min-h-screen">
              <NavbarDesktop />
              <main className="flex-1 p-9 bg-fondo">{children}</main>
            </div>

            {/* Layout mobile */}
            <div className="lg:hidden min-h-screen pb-24">
              <main className="p-4 bg-fondo">{children}</main>
              <NavbarMobile />
            </div>
          </>
        ) : (
          <main className="min-h-screen flex items-center justify-center bg-gray-50">
            {children}
          </main>
        )}
      </body>
    </html>
  );
}
