import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Send, User, Building2, Users, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Dhara Dimensión Humana - Consultoría de RRHH y Planes de Igualdad",
  description: "Te damos la bienvenida a Dhara Dimensión Humana. Creamos Igualdad con estrategia. Potenciamos el bienestar desde las empresas. Tu personal es tu gran campaña de publicidad.",
};

export default function HomePage() {
  return (
    <>
      {/* Video Hero - ancho limitado con márgenes */}
      <section className="max-w-[1200px] mx-auto px-5">
        <div className="hero-video-wrapper">
          <div className="hero-video-container">
            <iframe
              src="https://player.vimeo.com/video/683858688?background=1&dnt=1&loop=1&autoplay=1&muted=1&playsinline=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video de fondo Dhara Dimensión Humana"
              className="hero-video-iframe"
            />
          </div>
          <div className="hero-video-overlay" />
          <div className="hero-video-content">
            <p className="hero-intro animate-fade-in-up">Respira, has llegado al lugar correcto</p>
          </div>
        </div>
      </section>

      {/* Textos de bienvenida - debajo del video */}
      <section className="hero animate-fade-in-up delay-200">
        <h1>Te damos la bienvenida a Dhara Dimensión Humana.</h1>
        <h2>Creamos Igualdad con estrategia.</h2>
        <h3>Potenciamos el bienestar desde las empresas.</h3>
        <strong>Tu personal es tu gran campaña de publicidad.</strong>
      </section>

      {/* Servicios */}
      <section className="servicios">
        {/* Plan de Igualdad */}
        <article className="servicio-card hover-lift animate-fade-in-up delay-100">
          <Image
            src="/images/peones.jpg"
            alt="Planes de Igualdad"
            width={400}
            height={494}
            className="w-full max-w-[400px] h-auto rounded-lg mb-5 mx-auto"
          />
          <h2>Planes de Igualdad:</h2>
          <h3>Consultoría de Recursos Humanos.</h3>
          <p>Expertas en planes de igualdad sostenible.</p>
          <p>Implementamos un sistema que convierte el plan de igualdad en tu escaparate de influencia social y profesional.</p>
          <p>Impulsamos tu Marca.</p>
          <Link href="/plan-de-igualdad/" className="btn inline-flex items-center gap-2" title="Plan de Igualdad">
            Más información
            <ArrowRight className="w-4 h-4" />
          </Link>
        </article>

        {/* App Dhara */}
        <article className="servicio-card hover-lift animate-fade-in-up delay-300">
          <Image
            src="/images/appdhara.png"
            alt="App Dhara"
            width={400}
            height={583}
            className="w-full max-w-[400px] h-auto rounded-lg mb-5 mx-auto"
          />
          <h2>App Dhara:</h2>
          <h3>Plataforma de beneficios sociales.</h3>
          <p>Portal de acceso a terapias naturales.</p>
          <p>Cuidar de tu personal es la mejor inversión.</p>
          <p>Es invertir en la mejor campaña de publicidad.</p>
          <Link href="/appdhara/" className="btn inline-flex items-center gap-2" title="App Dhara">
            Más información
            <ArrowRight className="w-4 h-4" />
          </Link>
        </article>
      </section>

      {/* Formulario de Contacto */}
      <section className="contacto-section mt-16 animate-fade-in-up delay-200">
        <h2>Contáctanos</h2>
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
            <label htmlFor="empresa" className="label-with-icon">
              <Building2 className="w-4 h-4 text-[#8ca48f]" />
              Empresa *
            </label>
            <input type="text" id="empresa" name="empresa" required />
          </div>

          <div className="form-group">
            <label htmlFor="plantilla" className="label-with-icon">
              <Users className="w-4 h-4 text-[#8ca48f]" />
              Plantilla Total
            </label>
            <input type="number" id="plantilla" name="plantilla" />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="label-with-icon">
              <Mail className="w-4 h-4 text-[#8ca48f]" />
              Dirección de correo electrónico *
            </label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label className="label-with-icon">
              <MessageSquare className="w-4 h-4 text-[#8ca48f]" />
              ¿Qué te interesa? *
            </label>
            <div className="radio-group">
              <label>
                <input type="radio" name="interes" value="plan-igualdad" required />
                Quiero un Plan de Igualdad
              </label>
              <label>
                <input type="radio" name="interes" value="appdhara" />
                AppDhara para mi equipo
              </label>
              <label>
                <input type="radio" name="interes" value="orientacion" />
                Orientación sobre mi situación
              </label>
            </div>
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
      </section>
    </>
  );
}
