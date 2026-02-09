const reviews = [
  {
    quote:
      "I wanted to try OpenClaw but didn't know where to start. InstaClaw had it running on my Telegram in like 2 minutes. Unreal.",
    name: "Sarah R.",
    role: "Marketing Manager",
    initials: "SR",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    quote:
      "I'm not technical at all. I heard OpenClaw was great but it needed servers and stuff. InstaClaw just... handled all of that.",
    name: "James M.",
    role: "Freelance Consultant",
    initials: "JM",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
  {
    quote:
      "My OpenClaw bot does my scheduling, writes proposals, and tracks expenses. I set it up in under a minute with InstaClaw.",
    name: "Priya K.",
    role: "Small Business Owner",
    initials: "PK",
    gradient: "from-[#4facfe] to-[#00f2fe]",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 pt-20">
      <div className="text-center mb-9">
        <h2 className="font-display text-4xl">People are loving this</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-surface border border-border rounded-3xl p-6"
          >
            <div
              className="text-amber text-sm tracking-[2px] mb-3"
              aria-label="5 stars"
            >
              ★★★★★
            </div>
            <p className="text-[15px] leading-relaxed text-text-primary mb-5 italic">
              &ldquo;{r.quote}&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <div
                className={`w-[34px] h-[34px] rounded-full bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0`}
                aria-hidden="true"
              >
                {r.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{r.name}</div>
                <div className="text-xs text-text-muted">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
