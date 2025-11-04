import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 font-inter text-neutral-100">
      {/* Simple top nav for smooth in-page navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm">
          <a href="#home" className="font-semibold tracking-wide text-white">[Nama Kamu]</a>
          <nav className="flex items-center gap-5 text-neutral-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-neutral-300">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} [Nama Kamu]. All rights reserved.</p>
            <div className="flex items-center gap-5 text-sm">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
