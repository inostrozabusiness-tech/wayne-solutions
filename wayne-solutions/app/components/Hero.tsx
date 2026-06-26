export default function Hero() {
  return (
    <div className="text-center space-y-8">
      {/* Eyebrow */}
      <p className="text-xs sm:text-sm font-light text-blue-400 tracking-widest uppercase">
        Wayne Solutions and Investments
      </p>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
        Wayne Solutions and Investments
      </h1>

      {/* Tagline */}
      <p className="text-xl sm:text-2xl text-blue-300 font-medium">
        Soluciones tecnológicas para el presente y el futuro.
      </p>

      {/* Description */}
      <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Desarrollamos soluciones tecnológicas que impulsan el crecimiento de empresas, PYMES y emprendedores mediante desarrollo de software, automatización de procesos, infraestructura TI y sistemas de seguridad electrónica.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
          Nuestros Servicios
        </button>
        <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors duration-200 border border-slate-600">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}
