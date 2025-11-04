import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.5 }
  })
};

export default function Work() {
  return (
    <section id="work" className="relative bg-neutral-950 py-24 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300/80">Selected Work</h3>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Projects</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[1px]" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-neutral-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-xs font-semibold shadow-md shadow-violet-500/20 transition hover:brightness-110"
                  >
                    View Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold backdrop-blur transition hover:bg-white/10"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
