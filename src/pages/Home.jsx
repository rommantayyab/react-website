import { Link } from "react-router-dom";

const features = [
  {
    icon: "⚡︎",
    title: "Lightning Fast",
    text: "Built with Vite and React for instant load times and smooth interactions.",
  },
  {
    icon: "☎",
    title: "Fully Responsive",
    text: "Looks perfect on phones, tablets and desktops thanks to Tailwind CSS.",
  },
  {
    icon: "🖼",
    title: "Modern Design",
    text: "Clean layouts, soft shadows and gradients that feel fresh and professional.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white backdrop-blur">
            ✨ Welcome to my React website
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            Build Beautiful Websites <br className="hidden sm:block" />
            With Modern React
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            A simple, stylish and responsive multi-page website using React
            Router, reusable components and Tailwind CSS.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-indigo-600 shadow-lg transition hover:scale-105 sm:w-auto"
            >
              Contact Me
            </Link>
            <Link
              to="/about"
              className="w-full rounded-xl border border-white/40 px-8 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Everything you need for a great web presence, done right.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to start your project?</h2>
          <p className="mt-3 text-slate-400">Let's build something amazing together.</p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}