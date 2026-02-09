const features = [
  {
    icon: "✉️",
    title: "Emails on autopilot",
    desc: "Summarize your inbox, draft replies, follow up on threads, and prioritize what matters. Stop spending half your day in email.",
    color: "bg-teal-bg",
    wide: true,
  },
  {
    icon: "📅",
    title: "Scheduling sorted",
    desc: "Manage your calendar, set reminders, and get daily briefings.",
    color: "bg-coral-bg",
    wide: false,
  },
  {
    icon: "📝",
    title: "Write anything",
    desc: "Proposals, reports, emails, social posts — drafted in seconds.",
    color: "bg-accent-light",
    wide: false,
  },
  {
    icon: "🔍",
    title: "Research without the rabbit holes",
    desc: "Ask a question and get a clear answer. No more 40 open tabs. Compare options, analyze data, and get summaries of anything.",
    color: "bg-amber-bg",
    wide: true,
  },
  {
    icon: "💰",
    title: "Track your money",
    desc: "Expense tracking, budget summaries, and invoice reminders.",
    color: "bg-blue-bg",
    wide: false,
  },
  {
    icon: "👥",
    title: "Team coordination",
    desc: "Assign tasks, track progress, and keep everyone aligned.",
    color: "bg-surface border border-border",
    wide: false,
  },
];

export function BentoFeatures() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 pt-20" id="features">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl mb-2.5">
          What your OpenClaw assistant can do
        </h2>
        <p className="text-base text-text-secondary max-w-[480px] mx-auto">
          It handles the boring stuff so you can focus on what actually matters.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className={`rounded-3xl p-7 ${f.color} ${f.wide ? "sm:col-span-2" : ""}`}
          >
            <span className="text-[32px] mb-3.5 block" aria-hidden="true">
              {f.icon}
            </span>
            <h3 className="text-[17px] font-bold mb-1.5">{f.title}</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
