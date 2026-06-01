import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Wallet, Smartphone, Heart, HelpCircle, ChevronDown, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "AppDhara | Dhara Dimensión Humana",
  description: "El portal de BIENESTAR natural para tu EQUIPO. Convierte a tu equipo en humanos con recursos. Transforma el bienestar de tu equipo en la energía vital que impulsa tu negocio.",
};

export default function AppDharaPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 mt-4">
        <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/pexels1.jpg"
            alt="El portal de BIENESTAR natural para tu EQUIPO"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(45,58,74,0.35)]" />
          <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <h1 className="text-white text-3xl md:text-5xl font-light mb-4">
              El portal de BIENESTAR natural para tu EQUIPO
            </h1>
          </div>
        </div>
      </section>

      {/* Intro AppDhara */}
      <section className="text-center py-12 px-5 max-w-[900px] mx-auto animate-fade-in-up delay-200">
        <p className="text-2xl md:text-3xl text-[#2d3a4a] mb-4">
          Un solo lugar
        </p>
        <p className="text-xl md:text-2xl text-[#2d3a4a] mb-6">
          Toda la comunidad de Terapias Naturales
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#8ca48f] mb-6">
          AppDhara
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d3a4a] mb-4">
          CONVIERTE A TU EQUIPO EN HUMANOS CON RECURSOS
        </h3>
        <p className="text-lg text-[#555f6b]">
          Transforma el bienestar de tu equipo en la energía vital que impulsa tu negocio.
        </p>
      </section>

      {/* Imagen ilustrativa */}
      <section className="max-w-[800px] mx-auto px-5 mb-10 animate-scale-in">
        <Image
          src="/images/appdhara.png"
          alt="AppDhara"
          width={800}
          height={600}
          className="w-full h-auto"
        />
      </section>

      {/* Reparte bienestar */}
      <section className="text-center py-8 px-5 max-w-[900px] mx-auto animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3a4a] mb-6">
          REPARTE BIENESTAR NATURAL DENTRO DE APPDHARA
        </h2>
        <a href="mailto:info@dharadimensionhumana.es" className="btn inline-flex items-center gap-2 text-lg px-8 py-4">
          Quiero Saber Más
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* El coste invisible */}
      <section className="max-w-[900px] mx-auto px-5 py-12 animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6">
          El coste invisible de una plantilla agotada
        </h2>
        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
          Cuando el estrés cotidiano se convierte en burnout, tu empresa deja de avanzar como debería.
        </p>
        <p className="text-[#2d3a4a] leading-relaxed mb-6 text-justify">
          El tiempo para cuidarse no se encuentra, se pierde entre urgencias, y esa desconexión apaga el talento que tanto te ha costado construir.
        </p>
        <p className="text-[#2d3a4a] font-semibold mb-4 text-justify">
          Invierte en BENEFICIOS SOCIALES que de verdad te den resultados
        </p>
        <p className="text-[#2d3a4a] leading-relaxed mb-8 text-justify">
          ¿Vas a liderar la tendencia o a ver cómo el talento elige a quien ya lo hace?
        </p>
        <div className="text-center">
          <a href="mailto:info@dharadimensionhumana.es" className="btn inline-flex items-center gap-2">
            Quiero Integrar estos Beneficios
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Transforma tu Empresa */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="animate-slide-in-left">
            <Image
              src="/images/chatgpt1.png"
              alt="Transforma tu Empresa"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="pt-0 md:pt-8 animate-slide-in-right delay-200">
            <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-4">
              Transforma tu Empresa
            </h2>
            <h3 className="text-xl text-[#8f6f4e] mb-4">
              Ofrece Bienestar Natural
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              AppDhara es una <strong>solución integral</strong> que conecta la necesidad de cuidado de tu equipo con los mejores profesionales de las terapias naturales.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Al facilitar el tiempo y la inversión en su salud integral, dejas de ser una oficina para <strong>convertirte en una marca genuina</strong>, con alma, y profundamente inspiradora.
            </p>
          </div>
        </div>
      </section>

      {/* Sé un referente */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1 pt-0 md:pt-8 animate-slide-in-left delay-200">
            <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-4">
              Sé un referente a la vanguardia
            </h2>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Hoy, el bienestar, las terapias naturales y la búsqueda de la calma no son solo tendencias; son el nuevo estándar de excelencia.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              El talento ya no solo busca un salario, busca <strong>equilibrio</strong>.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Al integrar el beneficio social de <strong>AppDhara</strong>, tu organización no solo se suma a lo que está a la vanguardia, sino que lidera el cambio hacia una abundancia colectiva real.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Es el momento de convertir la &lsquo;moda&rsquo; en tu cultura corporativa y pasar de ser una empresa corriente a un <strong>referente</strong> de alta vibración.
            </p>
          </div>
          <div className="order-1 md:order-2 animate-slide-in-right">
            <Image
              src="/images/chatgpt2.png"
              alt="Sé un referente a la vanguardia"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Tres pasos */}
      <section className="max-w-[1100px] mx-auto px-5 py-12">
        <h2 className="text-2xl md:text-3xl text-center text-[#2d3a4a] font-semibold mb-4">
          El camino hacia una plantilla abundante
        </h2>
        <p className="text-[#2d3a4a] text-center mb-10">
          Tres pasos sencillos para integrar el bienestar holístico en tu ADN corporativo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paso 1 */}
          <div className="pricing-card text-center hover-lift animate-fade-in-up delay-100">
            <div className="step-circle delay-100">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">
              Apertura de Bolsa de Cuidado
            </h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Decide el impacto que quieres generar. Adquiere un pack de <strong>Créditos de Bienestar</strong> adaptado a tu volumen de plantilla.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mt-3 text-justify">
              Es una decisión estratégica única que activa instantáneamente tu ecosistema de salud privada sin contratos farragosos.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="pricing-card text-center hover-lift animate-fade-in-up delay-300">
            <div className="step-circle delay-300">
              <Smartphone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">
              Activación del Ecosistema
            </h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Facilitamos el alta de tu equipo en <strong>AppDhara</strong> y cargamos sus monederos digitales.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mt-3 text-justify">
              Tu equipo se descarga la App y recibe una invitación para empezar a explorar nuestra comunidad de profesionales de terapias naturales.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="pricing-card text-center hover-lift animate-fade-in-up delay-500">
            <div className="step-circle delay-500">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">
              Flujo de Bienestar
            </h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Tú lideras, tu plantilla elige.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mt-3 text-justify">
              Todo es perfecto, todo fluye.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mt-3 text-justify">
              Tu personal gestiona sus sesiones con total libertad y privacidad desde la App.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mt-3 text-justify">
              Tú recibes informes de uso y ves la transformación de la inversión económica.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre / Quote */}
      <section className="max-w-[900px] mx-auto px-5 py-12 text-center animate-fade-in-up">
        <p className="text-2xl md:text-3xl font-bold text-[#2d3a4a] mb-6">
          El futuro de los BENEFICIOS SOCIALES empieza aquí.
        </p>
        <p className="text-lg text-[#555f6b] italic mb-4">
          Honra el éxito de tu negocio cuidando a quienes lo hacen posible.
        </p>
        <p className="text-lg text-[#555f6b] italic mb-6">
          Un proceso ligero para ti, un impacto profundo para ellos.
        </p>
        <p className="text-xl font-semibold text-[#2d3a4a] mb-8">
          Recuerda: Tu personal son tus &lsquo;Reseñas de Google&rsquo; andantes.
        </p>
        <a href="/contacto/" className="btn inline-flex items-center gap-2 text-lg px-8 py-4">
          Contáctanos
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* FAQ */}
      <section className="max-w-[900px] mx-auto px-5 py-12">
        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in-up">
          <HelpCircle className="w-7 h-7 text-[#8ca48f]" />
          <h2 className="text-2xl md:text-3xl text-center text-[#2d3a4a] font-semibold">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-6">
          <div className="faq-item card-glow rounded-lg p-5 animate-fade-in-up delay-100">
            <h3 className="text-lg font-semibold text-[#2d3a4a] mb-3 flex items-center gap-2 faq-question">
              <ChevronDown className="w-4 h-4 text-[#8ca48f]" />
              ¿Qué es exactamente AppDhara?
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Es un ecosistema digital de bienestar holístico que conecta a las empresas y sus equipos con una red exclusiva de profesionales en terapias naturales. A través de nuestra plataforma, transformamos los beneficios sociales tradicionales en una experiencia tecnológica y humana, permitiendo que la salud integral sea accesible, privada y sencilla de gestionar para todos.
            </p>
          </div>

          <div className="faq-item card-glow rounded-lg p-5 animate-fade-in-up delay-200">
            <h3 className="text-lg font-semibold text-[#2d3a4a] mb-3 flex items-center gap-2 faq-question">
              <ChevronDown className="w-4 h-4 text-[#8ca48f]" />
              ¿Cómo sabe la empresa en qué se gasta la inversión?
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              La transparencia es total, pero la privacidad también. La empresa tiene acceso a un panel donde puede ver el volumen de créditos utilizados y el índice de participación de la plantilla. Sin embargo, <strong>nunca</strong> sabrá qué terapia específica ha elegido cada persona ni con qué profesional. Facilitas el acceso al cuidado, pero respetas la intimidad del proceso de sanación.
            </p>
          </div>

          <div className="faq-item card-glow rounded-lg p-5 animate-fade-in-up delay-300">
            <h3 className="text-lg font-semibold text-[#2d3a4a] mb-3 flex items-center gap-2 faq-question">
              <ChevronDown className="w-4 h-4 text-[#8ca48f]" />
              ¿Realmente esto mejora la productividad o es solo una &lsquo;moda&rsquo;?
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Las cifras no mienten: una persona que reduce su ruido mental y equilibra su sistema nervioso es una persona <strong>más presente, creativa y comprometida</strong>. Invertir en bienestar (desde la Bolsa de Abundancia) reduce el absentismo y el burnout. No estás comprando una moda, estás instalando el motor de alta vibración que tu empresa necesita para ser competitiva y humana.
            </p>
          </div>

          <div className="faq-item card-glow rounded-lg p-5 animate-fade-in-up delay-400">
            <h3 className="text-lg font-semibold text-[#2d3a4a] mb-3 flex items-center gap-2 faq-question">
              <ChevronDown className="w-4 h-4 text-[#8ca48f]" />
              ¿Cómo utiliza el personal sus beneficios en la App?
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Es un proceso directo y sin fricciones: cada miembro del equipo se descarga la aplicación de <strong>AppDhara</strong> en su dispositivo. Al darse de alta, disponen de su propio &lsquo;monedero digital&rsquo; donde introducen su código de créditos asignado por la empresa. Con ese saldo, pueden explorar los perfiles de los terapeutas y canjear sus sesiones de forma inmediata, sin necesidad de trámites adicionales o pagos externos.
            </p>
          </div>

          <div className="faq-item card-glow rounded-lg p-5 animate-fade-in-up delay-500">
            <h3 className="text-lg font-semibold text-[#2d3a4a] mb-3 flex items-center gap-2 faq-question">
              <ChevronDown className="w-4 h-4 text-[#8ca48f]" />
              ¿Qué tipo de profesionales forman parte de la comunidad AppDhara?
            </h3>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              No somos un directorio generalista. Somos el único nicho especializado exclusivamente en <strong>terapias naturales</strong>. Todos los profesionales pasan por un filtro de calidad para asegurar que su ética y sus métodos están alineados con nuestra visión de bienestar holístico.
            </p>
          </div>
        </div>
      </section>

      {/* Anúnciate */}
      <section className="max-w-[900px] mx-auto px-5 py-12 text-center animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-4">
          Anúnciate en AppDhara
        </h2>
        <p className="text-[#2d3a4a] leading-relaxed mb-6">
          Espacios exclusivos para marcas de productos naturales de calidad, o productos que mejoren la actividad de cada profesional para ejercer las terapias naturales.
        </p>
        <p className="text-[#2d3a4a] leading-relaxed mb-8">
          Si quieres más información para publicitarte dentro de la plataforma AppDhara escríbenos.
        </p>
        <a href="mailto:info@dharadimensionhumana.es" className="btn inline-flex items-center gap-2">
          Quiero publicitar mi marca en AppDhara
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </>
  );
}
