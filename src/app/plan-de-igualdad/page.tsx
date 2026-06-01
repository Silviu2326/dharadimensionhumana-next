import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Shield, Award, Users, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan de Igualdad 360º | Dhara Dimensión Humana",
  description: "Conviértete en 'Influencer' Empresarial. Sé un referente con tu Plan de Igualdad. Transforma un requisito legal en un catálogo de beneficios estratégicos.",
};

export default function PlanIgualdadPage() {
  return (
    <>
      {/* Hero - imagen correcta: plan6.jpg (pexels/63/6340691.jpeg) */}
      <section className="max-w-[1200px] mx-auto px-5 mt-4">
        <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/plan6.jpg"
            alt="Plan de igualdad 360°"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(45,58,74,0.35)]" />
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-light text-center px-4 animate-fade-in-up">
            Plan de igualdad 360°
          </h1>
        </div>
      </section>

      {/* Welcome Text */}
      <section className="text-center py-12 px-5 max-w-[900px] mx-auto animate-fade-in-up delay-200">
        <h1 className="text-2xl md:text-3xl text-[#2d3a4a] mb-4">
          Te damos la Bienvenida a Dhara Dimensión Humana
        </h1>
        <h1 className="text-xl md:text-2xl text-[#2d3a4a] mb-4">
          Conviértete en
        </h1>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2d3a4a] mb-4">
          &ldquo;Influencer&rdquo; Empresarial
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#2d3a4a] mb-6">
          Sé un referente con tu Plan de Igualdad.
        </h2>
        <p className="text-lg text-[#2d3a4a]">
          Recuerda: tus empleados son tus &ldquo;reseñas de Google&rdquo; andantes.
        </p>
        <p className="text-lg font-semibold text-[#2d3a4a] mt-6">
          ¡Descarga LA GUÍA gratuita y empieza a crear un Plan de Igualdad sin igual!
        </p>
      </section>

      {/* Formulario Guía Gratuita */}
      <section className="max-w-[700px] mx-auto px-5 pb-12 animate-fade-in-up delay-300">
        <form action="mailto:info@dharadimensionhumana.es" method="post" encType="text/plain">
          <div className="form-group mb-4">
            <label htmlFor="guia-nombre">Nombre *</label>
            <input type="text" id="guia-nombre" name="nombre" required />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="guia-email">Dirección de correo electrónico *</label>
            <input type="email" id="guia-email" name="email" required />
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

      {/* Sección Problemas */}
      <section className="max-w-[1100px] mx-auto px-5 py-12">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] mb-6">
          La brecha donde se pierde tu talento y tu inversión.
        </h2>
        <p className="text-[#2d3a4a] leading-relaxed mb-6 text-justify">
          ¿Sientes que tu empresa es solo un lugar de paso? ¿Te cuesta retener el talento a pesar de los salarios? ¿Has invertido tiempo y dinero en cumplir la ley y no ha habido frutos? Las empresas que no comunican sus valores se vuelven invisibles y pierden profesionales. y clientes.
        </p>
        <p className="text-[#2d3a4a] leading-relaxed mb-12 text-justify">
          Si tu Plan de Igualdad es solo un documento olvidado en un servidor, estás enviando un mensaje peligroso: que tus valores tienen precio, pero no valor real.
        </p>

        {/* 4 Cards con imágenes CORRECTAS del HTML */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fuga de talento - plan4.jpg (pexels/33/3301625.jpeg) */}
          <div className="card-glow rounded-lg p-4 animate-fade-in-up delay-100">
            <Image
              src="/images/plan4.jpg"
              alt="Fuga de talento"
              width={300}
              height={200}
              className="w-full h-[180px] object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">Fuga de talento</h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mb-3 text-justify">
              Pérdida constante de profesionales valiosos hacia la competencia, afectando la estabilidad de tu equipo.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Y nuevas generaciones que buscan más que un salario; buscan flexibilidad, un propósito, valores y una cultura auténtica en la empresa.
            </p>
          </div>

          {/* Inversión vacía - plan7.jpg (pexels/68/6863247.jpeg) */}
          <div className="card-glow rounded-lg p-4 animate-fade-in-up delay-200">
            <Image
              src="/images/plan7.jpg"
              alt="Inversión vacía"
              width={300}
              height={200}
              className="w-full h-[180px] object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">Inversión vacía</h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mb-3 text-justify">
              Cumplir la normativa por pura obligación administrativa es, a efectos prácticos, un gasto a fondo perdido.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Si el plan no respira en el día a día, el impacto en tu productividad y en tu marca será inexistente.
            </p>
          </div>

          {/* Pozo de recursos - plan10.jpg (pexels/94/9411337.jpeg) */}
          <div className="card-glow rounded-lg p-4 animate-fade-in-up delay-300">
            <Image
              src="/images/plan10.jpg"
              alt="Pozo de recursos"
              width={300}
              height={200}
              className="w-full h-[180px] object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">Pozo de recursos</h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              Procesos técnicos farragosos y una carga de trabajo que agota a tu equipo de RRHH. Lo que empezó como un proyecto de mejora se convierte en un agujero negro de tiempo y dinero que no garantiza resultados ni cumplimiento real.
            </p>
          </div>

          {/* Falsa reputación - plan1.jpg (pexels/17/170894.jpeg) */}
          <div className="card-glow rounded-lg p-4 animate-fade-in-up delay-400">
            <Image
              src="/images/plan1.jpg"
              alt="Falsa reputación"
              width={300}
              height={200}
              className="w-full h-[180px] object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#2d3a4a] mb-3">Falsa reputación</h3>
            <p className="text-[#2d3a4a] text-sm leading-relaxed mb-3 text-justify">
              Tener un sello de igualdad que sus empleados no sienten como real es un riesgo mayor que no tenerlo.
            </p>
            <p className="text-[#2d3a4a] text-sm leading-relaxed text-justify">
              La falta de coherencia entre lo que la empresa dice y lo que el talento vive es la vía más rápida hacia la pérdida de credibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor - 2 columnas: imagen + texto */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-2">
          Tu Plan de Igualdad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="animate-slide-in-left">
            <Image
              src="/images/plan2.jpg"
              alt="Plan de Igualdad"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="animate-slide-in-right delay-200">
            <h3 className="text-xl text-[#2d3a4a] font-semibold mb-4 text-justify">
              Un Plan de Igualdad como herramienta de liderazgo 360º para atraer el mejor talento, fidelizar clientes y convertir tu empresa en un referente imbatible.
            </h3>
            <p className="text-[#2d3a4a] mb-4 text-justify">
              El escaparate definitivo de tus valores.
            </p>
            <p className="text-[#2d3a4a] mb-4 text-justify">
              Transforma un requisito legal en un <strong>catálogo de beneficios estratégicos</strong>.
            </p>
            <p className="text-[#2d3a4a] text-justify">
              Diseña una cultura donde la igualdad real no son palabras en un papel, sino el imán que atrae talento, fideliza clientes y te posiciona como un referente en tu sector.
            </p>
          </div>
        </div>
      </section>

      {/* Metodología - Mirada 360º: imagen izquierda + texto derecha */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <Image
              src="/images/plan3.jpg"
              alt="Plan de Igualdad con mirada 360º"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="order-1 md:order-2 pt-0 md:pt-12 animate-slide-in-right delay-200">
            <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6">
              Plan de Igualdad con mirada 360º
            </h2>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Alineamos los valores de tu empresa con acciones concretas que fortalecen tu identidad y atraen al talento ideal.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Construimos una base sólida para un cambio significativo.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Atendemos la normativa con rigor, pero también el bienestar emocional y la proyección de tu marca.
            </p>
            <p className="text-[#2d3a4a] font-semibold text-justify">
              Es una <strong>visión circular donde todo está conectado.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Metodología - Ejecución 3D: imagen izquierda + texto derecha */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <Image
              src="/images/plan-chatgpt.png"
              alt="Plan de igualdad con ejecución 3D"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="order-1 md:order-2 pt-0 md:pt-12 animate-slide-in-right delay-200">
            <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6">
              Plan de igualdad con ejecución 3D
            </h2>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              No hacemos simples documentos de papel (2D).
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Creamos <strong>Escaparates</strong> con <strong>volumen y realidad.</strong>
            </p>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              Mediante <strong>El Catálogo de Beneficios:</strong> Convertimos tu Plan de Igualdad en una oferta de valor tangible. Un catálogo de bienestar, corresponsabilidad y conciliación que actúa como la mejor carta de presentación para tus clientes, tu plantilla actual y para el talento que está deseando trabajar contigo.
            </p>
          </div>
        </div>
      </section>

      {/* Inversión Social: imagen izquierda + texto derecha */}
      <section className="max-w-[1100px] mx-auto px-5 py-12 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <Image
              src="/images/plan5.jpg"
              alt="Inversión Social de tu Plan de Igualdad"
              width={600}
              height={450}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="order-1 md:order-2 pt-0 md:pt-12 animate-slide-in-right delay-200">
            <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6">
              Inversión Social de tu Plan de Igualdad
            </h2>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Cuando tu plantilla se siente respaldada, su compromiso se dispara.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Pasas de tener empleados a tener embajadores de marca.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Es la rentabilidad de lo humano: una empresa donde todos quieren estar y de la que nadie se quiere ir.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-8 text-justify">
              Aquí tu inversión social, se convierte en ganancia exponencial.
            </p>
            <a href="mailto:info@dharadimensionhumana.es" className="btn inline-flex items-center gap-2">
              Quiero agendar una llamada
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Experta - Isabel Miralles */}
      <section className="max-w-[900px] mx-auto px-5 py-12 animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6">
          Nuestra experta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="text-center">
            <Image
              src="/images/plan-chatgpt.png"
              alt="Isabel Miralles"
              width={260}
              height={260}
              className="w-[260px] h-[260px] object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#2d3a4a]">Isabel Miralles</h3>
            <p className="text-[#555f6b]">Directora y CoFundadora</p>
          </div>
          <div>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Mi nombre es Isabel, y ayudo a líderes como tú a transformar la obligación legal del Plan de Igualdad en una cultura 3D que blinda tu talento, multiplica tu rentabilidad y te posiciona como un referente imbatible en tu sector.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify">
              Traduzco la normativa para la realidad empresarial.
            </p>
            <p className="text-[#2d3a4a] leading-relaxed text-justify">
              A mí me costó mucho en su momento entender un plan de igualdad más allá de un documento y requisito legal, pero ahora comparto la experiencia para hacértelo fácil y mucho más coherente.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2 text-[#8ca48f]">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium text-[#2d3a4a]">20+ años de experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-[#8ca48f]">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium text-[#2d3a4a]">Cientos de empresas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo te ayudamos - SOLO 2 servicios */}
      <section className="max-w-[1100px] mx-auto px-5 py-12">
        <h2 className="text-2xl md:text-3xl text-center text-[#2d3a4a] font-semibold mb-4">
          Cómo te ayudamos
        </h2>
        <p className="text-[#2d3a4a] text-center leading-relaxed mb-4">
          Ofrecemos 3 posibilidades para que según tus necesidades y tu tiempo, elijas cual se ajusta más a tu situación.
        </p>
        <p className="text-[#2d3a4a] text-center leading-relaxed mb-4">
          Todo está bien, todo es posible.
        </p>
        <p className="text-[#2d3a4a] text-center leading-relaxed mb-10">
          Lo importante es que le des un giro a tu empresa con un <strong>Plan de Igualdad 360º</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guía Gratuita - imagen plan9.jpg */}
          <div className="pricing-card hover-lift animate-fade-in-up delay-100">
            <Image
              src="/images/plan9.jpg"
              alt="Guía Plan de Igualdad"
              width={500}
              height={350}
              className="w-full h-[200px] object-cover mb-4 rounded"
            />
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-[#8ca48f]" />
              <h3 className="text-xl font-semibold text-[#2d3a4a]">Guía Plan de Igualdad</h3>
            </div>
            <p className="text-[#2d3a4a] font-semibold mb-2">GRATUITA</p>
            <p className="text-[#2d3a4a] mb-4 text-justify">¿No sabes por dónde empezar?</p>
            <p className="text-[#2d3a4a] mb-4 text-justify">
              Descarga tu hoja de ruta y entiende el Plan de Igualdad sin morir en el intento.
            </p>
            <p className="text-[#2d3a4a] font-semibold mb-4 text-justify">
              ¡No existe otra guía gratuita igual!
            </p>
            <p className="text-[#2d3a4a] text-sm mb-6 text-justify">
              Obtendrás claridad y sabrás los pasos necesarios para cumplir con la normativa con seguridad y rigor.
            </p>
            <form action="mailto:info@dharadimensionhumana.es" method="post" encType="text/plain">
              <div className="form-group mb-3">
                <label htmlFor="guia2-nombre" className="text-sm">Nombre *</label>
                <input type="text" id="guia2-nombre" name="nombre" required className="text-sm" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="guia2-email" className="text-sm">Dirección de correo electrónico *</label>
                <input type="email" id="guia2-email" name="email" required className="text-sm" />
              </div>
              <div className="honeypot" aria-hidden="true">
                <label>Dejar este campo vacío<input type="text" name="honeypot" /></label>
              </div>
              <button type="submit" className="submit-btn text-sm inline-flex items-center gap-2">
                Enviar formulario
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

          {/* Plan de Igualdad completo - imagen plan8.jpg */}
          <div className="pricing-card hover-lift animate-fade-in-up delay-300">
            <Image
              src="/images/plan8.jpg"
              alt="Plan de Igualdad completo"
              width={500}
              height={350}
              className="w-full h-[200px] object-cover mb-4 rounded"
            />
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-[#8ca48f]" />
              <h3 className="text-xl font-semibold text-[#2d3a4a]">Plan de Igualdad completo</h3>
            </div>
            <p className="text-[#2d3a4a] font-semibold mb-4">Desde 2.500€</p>
            <p className="text-[#2d3a4a] mb-4 text-justify">
              Si tu prioridad es la excelencia y la tranquilidad. Yo me encargo.
            </p>
            <p className="text-[#2d3a4a] mb-4 text-justify">
              <strong>Delega el 100%</strong> de la carga técnica y estratégica en mis manos para transformar una obligación administrativa en tu mayor motor de reputación y bienestar.
            </p>
            <p className="text-[#2d3a4a] text-sm mb-6 text-justify">
              Un Plan de Igualdad y tu catálogo de beneficios exclusivo, para blindar tu talento Y posicionarte como el referente que tu sector quiere emular.
            </p>
            <a href="mailto:info@dharadimensionhumana.es" className="btn inline-flex items-center gap-2">
              Tu Plan de Igualdad &ldquo;Influencer&rdquo;
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
