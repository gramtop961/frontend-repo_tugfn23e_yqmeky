import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const roles = [
  'Fullstack Developer',
  'Laravel • React • Node.js',
  'Next.js • Tailwind CSS',
  'API & DevOps Basics'
];

function useTyping(words, speed = 80, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timer;

    if (!deleting) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setDeleting(true);
        }
      }, speed);
    } else {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }, Math.max(40, speed / 2));
    }

    if (text === current && !deleting) {
      clearTimeout(timer);
      const hold = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(hold);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return text + (deleting ? '' : '▋');
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(168,85,247,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950/90" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-violet-300/80">Hello, I am</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              [Nama Kamu]
            </h1>
            <h2 className="mt-2 bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              {typed}
            </h2>
            <p className="mt-6 max-w-xl text-neutral-300">
              I build fast, accessible, and delightful web experiences. 5+ years crafting full‑stack solutions with a focus on performance, scalability, and great DX.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-violet-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-400">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-400">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
