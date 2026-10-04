const stats = [
  { value: "50+", label: "Projects" },
  { value: "30+", label: "Clients" },
  { value: "3+", label: "Years" },
  { value: "100%", label: "Dedication" },
];

const skills = ["React", "Tailwind CSS", "JavaScript", "React Router", "Redux Toolkit", "REST APIs"];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          We are passionate about creating clean, modern and user-friendly web
          experiences.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-8xl shadow-xl sm:h-96">
          🖳
        </div>

        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            We started with a simple idea: websites should be fast, beautiful
            and easy to use. Today we help people and businesses turn ideas into
            polished digital products using the latest web technologies.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Every project is built with care, from the first line of code to the
            final pixel.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
            >
              <p className="text-4xl font-extrabold text-indigo-600">{s.value}</p>
              <p className="mt-1 text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}