import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

export default function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-24 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-violet-500/10 md:mx-0 md:w-80">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Profile of [Nama Kamu]"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300/80">About</h3>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">5 Years of Building Modern Web Apps</h2>
            <p className="mt-5 leading-relaxed text-neutral-300">
              I am a full‑stack developer with 5 years of experience delivering end‑to‑end web solutions. My work spans product ideation, scalable API design, modern frontends, and deployment pipelines.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-300">
              Core skills include <span className="text-white">Laravel</span>, <span className="text-white">React</span>, <span className="text-white">Node.js</span>, <span className="text-white">Next.js</span>, and <span className="text-white">Tailwind CSS</span>. I enjoy crafting delightful UX, robust APIs, and maintainable architectures. I also practice basic DevOps for CI/CD and cloud deployments.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Laravel','React','Node.js','Next.js','Tailwind','REST','GraphQL','Docker','Vercel'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
