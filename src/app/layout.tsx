import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Camera, Briefcase, MessageCircle } from "lucide-react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dhara Dimensión Humana - Consultoría de RRHH y Planes de Igualdad",
  description: "Dhara Dimensión Humana. Expertas en planes de igualdad sostenible. Creamos Igualdad con estrategia. Potenciamos el bienestar desde las empresas.",
  keywords: "planes de igualdad, consultoría RRHH, recursos humanos, bienestar empresarial, app dhara, dimensión humana",
  authors: [{ name: "Dhara Dimensión Humana" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Dhara Dimensión Humana",
    description: "Creamos Igualdad con estrategia. Potenciamos el bienestar desde las empresas.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "'Raleway', sans-serif", backgroundColor: '#f5f2ef' }}>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>

        <header className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 max-w-[1200px] mx-auto w-full animate-fade-in">
          <Link href="/" className="flex items-center gap-2 group" title="Dhara Dimensión Humana">
            <Leaf className="w-6 h-6 text-[#8ca48f] group-hover:rotate-12 transition-transform duration-300" strokeWidth={1.5} />
            <Image
              src="/images/logo.png"
              alt="Dhara Dimensión Humana"
              width={200}
              height={70}
              className="h-[70px] w-auto"
              priority
            />
          </Link>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-1 md:gap-1 list-none">
              <li>
                <Link
                  href="/"
                  className="text-[15px] font-medium text-[#2d3a4a] px-4 py-2 block transition-colors duration-200 hover:bg-[#8ca48f] hover:text-white nav-link-animated"
                >
                  -DH-
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-de-igualdad/"
                  className="text-[15px] font-medium text-[#2d3a4a] px-4 py-2 block transition-colors duration-200 hover:bg-[#8ca48f] hover:text-white nav-link-animated"
                >
                  Plan de Igualdad
                </Link>
              </li>
              <li>
                <Link
                  href="/appdhara/"
                  className="text-[15px] font-medium text-[#2d3a4a] px-4 py-2 block transition-colors duration-200 hover:bg-[#8ca48f] hover:text-white nav-link-animated"
                >
                  AppDhara
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nosotras/"
                  className="text-[15px] font-medium text-[#2d3a4a] px-4 py-2 block transition-colors duration-200 hover:bg-[#8ca48f] hover:text-white nav-link-animated"
                >
                  Sobre Nosotras
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto/"
                  className="text-[15px] font-medium text-[#2d3a4a] px-4 py-2 block transition-colors duration-200 hover:bg-[#8ca48f] hover:text-white nav-link-animated"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <footer className="text-center py-8 px-5 mt-16 border-t border-[#d2c4b7]">
          <div className="flex justify-center gap-4 mb-4">
            <a
              href="https://instagram.com/dhara_dimensionhumana"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <Camera className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/dhara-dimensi%C3%B3n-humana/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <Briefcase className="w-5 h-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=34624071618"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <p className="text-[13px] text-[#555f6b] mb-1">© 2025 - 2026 Dhara Dimensión Humana</p>
          <p className="text-[13px] text-[#555f6b]">
            Con la tecnología de <a href="https://www.webador.es" target="_blank" rel="noopener noreferrer" className="text-[#555f6b] underline hover:text-[#8ca48f] transition-colors">Webador</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
