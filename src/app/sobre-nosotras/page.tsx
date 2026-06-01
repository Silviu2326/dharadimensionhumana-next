import Image from "next/image";
import type { Metadata } from "next";
import { Heart, Eye, HandHeart, Sparkles, Fingerprint, Link2, TrendingUp, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotras | Dhara Dimensión Humana",
  description: "Somos mujeres que llevamos más de 20 años dedicadas al mundo de la gestión de personas. Especializadas en igualdad, desarrollo personal y cultura organizacional.",
};

export default function SobreNosotrasPage() {
  const valores = [
    {
      icon: Heart,
      title: "Humanidad",
      desc: "ver el ser humano antes que al rol, el síntoma o el resultado.",
    },
    {
      icon: Eye,
      title: "Presencia",
      desc: "acompañamiento con respeto a los ritmos de cada persona en espacios sostenidos.",
    },
    {
      icon: HandHeart,
      title: "Cuidado",
      desc: "como la raíz de la marca.",
    },
    {
      icon: Sparkles,
      title: "Transformación consciente",
      desc: "no hay reformas, hay transformación.",
    },
    {
      icon: Fingerprint,
      title: "Autenticidad",
      desc: "no hay disfraces de profesionalidad, hay experiencia y transparencia.",
    },
    {
      icon: Link2,
      title: "Conexión entre lo personal y lo profesional",
      desc: "porque el bienestar humano es integral a cuerpo, mente, emoción y estructura.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento compartido",
      desc: "poner al servicio de otras personas o empresas lo aprendido.",
    },
  ];

  const especialidades = [
    "Igualdad y conciliación.",
    "Desarrollo personal y gestión emocional.",
    "Cultura y valores.",
    "Retención y Atracción del talento mediante el mejor employer branding, las personas.",
    "Digitalización de empresas, actualización de estructuras a la nueva era digital.",
    "Inteligencia Artificial.",
    "Gestión del cambio en organizaciones.",
    "Gestión de conflictos y gestión de equipos.",
    "Astrología como herramienta complementaria y sofisticada para la comprensión profunda de las dinámicas humanas.",
  ];

  const vision = [
    "Unir estrategia y sensibilidad con coherencia.",
    "Unir escucha y estructura con bienestar.",
    "Saber que las empresas pueden ser espacios sanos, donde las personas crezcan.",
    "Recordar que el cuerpo guarda mensajes que merecen ser escuchados.",
    "Entender que lo natural y lo emocional no son lo opuesto al éxito, sino su raíz.",
  ];

  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 mt-4">
        <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center">
          <Image
            src="/images/digital-art.jpg"
            alt="Sobre Nosotras"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[rgba(45,58,74,0.35)]" />
          <h1 className="relative z-10 text-white text-4xl md:text-5xl font-light text-center px-4 animate-fade-in-up">
            Sobre Nosotras
          </h1>
        </div>
      </section>

      <section className="content-section">
        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6 animate-fade-in-up">
          Nuestra historia
        </h2>

        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify animate-fade-in-up delay-100">
          Somos mujeres que llevamos más de 20 años dedicadas al mundo de la gestión de personas,
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify animate-fade-in-up delay-100">
          Desde esa vivencia personal, y con una profunda vocación de cuidado, nace Dhara Dimensión Humana.
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify animate-fade-in-up delay-200">
          Entusiasmadas con saber que había algo más allá de una vida loca. Hemos aprendido a dejar la lucha, hemos aprendido que cada persona tiene una forma individual que es parte del sentido que lo contiene todo.
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify animate-fade-in-up delay-200">
          Hemos aprendido que el cambio, es lo único seguro para la transformación.
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-4 text-justify animate-fade-in-up delay-300">
          Y ahora es nuestra misión ayudar, acompañar, hacer crecer, sostener y reivindicar la esencia de cada una de las personas en coherencia con las organizaciones, consigo mismas y en el entorno familiar.
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-6 text-justify animate-fade-in-up delay-300">
          Además, promovemos el bienestar integral de las personas y los espacios, con la ayuda de las terapias naturales que nos permiten volver a lo esencial, a nosotras mismas y volver a conectar con la magia de la vida.
        </p>

        <p className="text-[#2d3a4a] leading-relaxed mb-6 text-justify animate-fade-in-up delay-400">
          Con una misión clara:
        </p>

        <p className="text-[#2d3a4a] font-semibold mb-8 text-justify animate-fade-in-up delay-400">
          Transformar el guión de las personas, de las organizaciones, y permitir así más espacios sanos, más coherencia y menos ruido.
        </p>

        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6 flex items-center gap-2 animate-fade-in-up">
          <Sparkles className="w-6 h-6 text-[#8ca48f]" />
          Especializadas en:
        </h2>

        <ul className="mb-10 space-y-3 check-list animate-fade-in-up delay-200">
          {especialidades.map((item, i) => (
            <li key={i} className="text-[#2d3a4a]">
              <CheckCircle className="w-4 h-4 text-[#8ca48f]" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6 flex items-center gap-2 animate-fade-in-up">
          <Eye className="w-6 h-6 text-[#8ca48f]" />
          Nuestra visión
        </h2>

        <p className="text-[#2d3a4a] font-semibold mb-6 animate-fade-in-up delay-100">
          Una nueva dimensión más natural y en calma.
        </p>

        <ul className="mb-10 space-y-3 check-list animate-fade-in-up delay-200">
          {vision.map((item, i) => (
            <li key={i} className="text-[#2d3a4a]">
              <CheckCircle className="w-4 h-4 text-[#8ca48f]" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl text-[#2d3a4a] font-semibold mb-6 flex items-center gap-2 animate-fade-in-up">
          <Heart className="w-6 h-6 text-[#8ca48f]" />
          Nuestros valores
        </h2>

        <div className="valores-grid">
          {valores.map((valor, i) => (
            <div
              key={i}
              className="valor-item hover-lift animate-fade-in-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <valor.icon className="w-5 h-5 text-[#8ca48f]" />
                <h4 className="text-[#8f6f4e] m-0">{valor.title}</h4>
              </div>
              <p className="text-[#2d3a4a] text-sm">{valor.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
