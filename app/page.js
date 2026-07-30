export default function Home() {
  const notes = [
    {
      title: "Write the first line last",
      body: "Draft the body before the headline. You'll know what you actually made by the time you get there.",
    },
    {
      title: "Keep one idea per page",
      body: "If a page is trying to say three things, it's saying none of them clearly. Cut until one remains.",
    },
    {
      title: "Ship the smallest true version",
      body: "A page that works beats a page that's still being perfected. Put it out, then sharpen it.",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Nav */}
      <header className="max-w-3xl mx-auto px-6 pt-10 flex items-center justify-between">
        <span className="font-display italic text-lg">Fieldnote</span>
        <nav className="flex gap-6 text-sm text-ink/70">
          <a href="#notes" className="hover:text-ink transition-colors">Notes</a>
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <p className="text-gold font-medium text-sm tracking-wide uppercase mb-4">
          A simple starter, built to be edited
        </p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.1] mb-6">
          Start plain.
          <br />
          <span className="italic text-moss">Make it yours.</span>
        </h1>
        <p className="text-ink/70 text-lg max-w-xl leading-relaxed">
          This is a bare Next.js site with just enough structure to build on —
          a hero, a few sections, and nothing you don't need. Swap the copy,
          the colors, the content, and it's yours.
        </p>
      </section>

      {/* Notes / feature section */}
      <section id="notes" className="max-w-3xl mx-auto px-6 py-16 border-t border-ink/10">
        <h2 className="font-display text-2xl mb-10">A few notes to start from</h2>
        <div className="space-y-10">
          {notes.map((note, i) => (
            <div key={note.title} className="flex gap-6">
              <span className="font-display italic text-gold text-xl w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-medium text-lg mb-1">{note.title}</h3>
                <p className="text-ink/70 leading-relaxed">{note.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-16 border-t border-ink/10">
        <h2 className="font-display text-2xl mb-4">About this template</h2>
        <p className="text-ink/70 leading-relaxed max-w-xl">
          Built with Next.js (App Router) and Tailwind CSS. No component
          libraries, no extra dependencies — just files you can open and
          change directly: <code className="text-sm bg-ink/5 px-1.5 py-0.5 rounded">app/page.js</code> for
          content, <code className="text-sm bg-ink/5 px-1.5 py-0.5 rounded">tailwind.config.js</code> for
          colors and fonts.
        </p>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-ink/10">
        <div className="bg-moss text-paper rounded-2xl px-8 py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl mb-2">Ready to build on this?</h2>
            <p className="text-paper/70 max-w-sm">
              Replace this section with a form, a link, or whatever action
              matters most to your site.
            </p>
          </div>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center bg-gold text-ink font-medium px-6 py-3 rounded-full hover:brightness-110 transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      <footer className="max-w-3xl mx-auto px-6 pb-10 text-sm text-ink/50">
        © {new Date().getFullYear()} Fieldnote. Built with Next.js.
      </footer>
    </main>
  );
}
