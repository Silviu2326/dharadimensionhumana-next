import Image from "next/image";
import type { Metadata } from "next";
import { User, Mail, Tag, MessageSquare, Camera, Briefcase, MessageCircle, MapPin, Phone, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Dhara Dimensión Humana",
  description: "¡Estamos aquí para responder a todas tus preguntas! ¡Contáctanos para comenzar tu transformación! Llíria, Valencia.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 mt-4 animate-fade-in">
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src="/images/hero-contacto.png"
            alt="Contáctanos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="contacto-section animate-fade-in-up delay-200">
        <h1 className="text-3xl md:text-4xl text-center text-[#2d3a4a] font-light mb-2">Contáctanos</h1>
        <p className="subtitle">&ldquo;¡Estamos aquí para responder a todas tus preguntas! ¡Contáctanos para comenzar tu transformación!&rdquo;</p>

        <form action="mailto:info@dharadimensionhumana.es" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="nombre" className="label-with-icon">
              <User className="w-4 h-4 text-[#8ca48f]" />
              Nombre *
            </label>
            <input type="text" id="nombre" name="nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label-with-icon">
              <Mail className="w-4 h-4 text-[#8ca48f]" />
              Dirección de correo electrónico *
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="area" className="label-with-icon">
              <Tag className="w-4 h-4 text-[#8ca48f]" />
              Selecciona el área
            </label>
            <select id="area" name="area">
              <option>Plan de Igualdad Dhara</option>
              <option>Beneficios - AppDhara</option>
              <option>Reunión de 30 minutos - GRATIS</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje" className="label-with-icon">
              <MessageSquare className="w-4 h-4 text-[#8ca48f]" />
              Mensaje *
            </label>
            <textarea id="mensaje" name="mensaje" required></textarea>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="copia" name="copia" />
            <label htmlFor="copia">Envíame una copia</label>
          </div>

          <div className="honeypot" aria-hidden="true">
            <label>Dejar este campo vacío<input type="text" name="honeypot" /></label>
          </div>

          <button type="submit" className="submit-btn inline-flex items-center gap-2">
            Enviar formulario
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-8 mb-6">
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

        <div className="contact-info animate-fade-in-up delay-300">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-[#8ca48f]" />
            <a href="mailto:info@dharadimensionhumana.es">info@dharadimensionhumana.es</a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-[#8ca48f]" />
            624071618
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#8ca48f]" />
            Llíria, Valencia.
          </p>
        </div>
      </section>
    </>
  );
}
