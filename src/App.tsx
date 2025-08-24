import './App.css';

export function Hero() {
  return (
    <section className="bg-[#121212] text-gray-200 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Coluna Esquerda */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2979FF]">
            Kaê Uchôa Sarmanho
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-100">
            Frontend Developer | React & TypeScript Specialist
          </h2>
          <p className="text-gray-400 max-w-lg">
            Passionate about software architecture, performance, and building
            user-centered digital experiences.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg font-semibold bg-[#00E676] text-[#121212] hover:brightness-110 transition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold bg-[#5E35B1] text-white hover:brightness-110 transition"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 bg-gradient-to-tr from-[#2979FF] via-[#5E35B1] to-[#00E676] rounded-2xl flex items-center justify-center">
            {/* Placeholder para imagem/avatar */}
            <span className="text-white text-lg font-semibold">
              Your Avatar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <Hero />
    </main>
  );
}

export default App;
