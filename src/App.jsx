import React from 'react'

// Componente Header
function Header() {
  return (
    <header className="py-12 px-6 text-center bg-slate-900 text-white border-b border-slate-800 shadow-lg">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Álvaro Antonio Sepúlveda Niño
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 font-light">
          Estudiante de tercer año de Ingeniería Informática
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <span className="px-4 py-1.5 bg-blue-900/50 border border-blue-500/40 text-blue-300 rounded-full text-sm font-medium">
            2024 - Actualidad Duoc UC
          </span>
          <span className="px-4 py-1.5 bg-emerald-900/50 border border-emerald-500/40 text-emerald-300 rounded-full text-sm font-medium">
            Ing. Informática Ciencia de Datos
          </span>
        </div>
      </div>
    </header>
  )
}

// Componente Enlace
function SocialLink({ href, label, bgClass}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopeer noreferrer"
      className={`flex items-center justify-center py-4 px-6 text- white font-bold rounded-xl transition-all shadow-md hover:scale-[1.82] ${bgClass}`}
    >
      {label}
    </a>
  )
}

// Componente Main
function Main() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-10 flex-grow">
      {/* Sección de Imagen o Avatar */}
      <section className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-gray-400 shadow-md overflow-hidden">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Tarjeta Informativa */}
      <section className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-md">
        <h2 className="text-2xl font-bold text-white mb-3">Sobre mí</h2>
        <p className="text-gray-300 leading-relaxed">
          Bienvenido a mi portafolio web. Actualmente me encuentro especializándome en ciencia de datos y desarrollo de software en Duoc UC.
        </p>
      </section>

      {/* Botones de Enlace (Redes / Repositorios) */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-200 text-center">
          Enlaces Directos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mx-auto">
          <SocialLink
            href="https://www.linkedin.com/in/alvaroantonio98"
            label="LinkedIn"
            bgClass="bg-blue-600 hover:bg-blue-700"
          />
          <SocialLink
            href="https://github.com/alsepulvedan"
            label="GitHub"
            bgClass="bg-slate-800 hover:bg-slate-700 border boder-slate-600"
          />
        </div>
      </section>
    </main>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="py-6 border-t border-slate-800 bg-slate-900 text-center text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} Álvaro Sepúlveda. Todos los derechos reservados.</p>
    </footer>
  )
}

// Componente Principal
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 flex flex-col justify-between font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}