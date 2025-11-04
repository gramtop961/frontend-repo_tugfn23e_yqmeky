import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-neutral-950 py-24 text-neutral-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-violet-300/80">Contact</h3>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Let’s build something great</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">Have a project in mind or want to collaborate? Send a message and I’ll get back to you.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2"
        >
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm text-neutral-300">Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-neutral-100 outline-none ring-violet-400 placeholder:text-neutral-500 focus:ring"
              placeholder="Your name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm text-neutral-300">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-neutral-100 outline-none ring-violet-400 placeholder:text-neutral-500 focus:ring"
              placeholder="you@email.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-neutral-300">Message</label>
            <textarea
              required
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-4 py-3 text-neutral-100 outline-none ring-violet-400 placeholder:text-neutral-500 focus:ring"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="md:col-span-2 mt-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-500/20 transition hover:brightness-110"
            >
              Send Message
            </button>

            <div className="flex items-center gap-3 text-neutral-300">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <Github size={20} />
              </a>
              <a href="mailto:you@example.com" className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
