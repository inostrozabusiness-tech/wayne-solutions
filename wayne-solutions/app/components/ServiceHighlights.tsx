export default function ServiceHighlights() {
  const services = [
    { name: "Desarrollo de Software", icon: "◆" },
    { name: "Automatización Empresarial", icon: "◆" },
    { name: "Seguridad Electrónica", icon: "◆" },
    { name: "Infraestructura TI", icon: "◆" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
      {services.map((service) => (
        <div
          key={service.name}
          className="p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/70 transition-colors duration-200"
        >
          <div className="text-2xl text-blue-400 mb-3">{service.icon}</div>
          <p className="text-sm sm:text-base font-medium text-slate-200">
            {service.name}
          </p>
        </div>
      ))}
    </div>
  );
}
