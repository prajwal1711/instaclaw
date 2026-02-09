const oldSteps = [
  "Rent a cloud server",
  "Figure out SSH and firewalls",
  "Install programming tools",
  "Download and configure OpenClaw",
  "Set up environment variables",
  "Keep it running 24/7",
  "Fix it when things break",
];

const newSteps = [
  "Pick your AI model",
  "Connect Telegram",
  "Start chatting",
];

export function Comparison() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 pt-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl mb-2.5">
          OpenClaw is powerful. Setting it up isn&apos;t&nbsp;easy.
        </h2>
        <p className="text-base text-text-secondary">
          That&apos;s why InstaClaw exists. We turn an hour of tech work into a
          60-second&nbsp;signup.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Old way */}
        <div className="rounded-3xl p-7 bg-[#fef2f2] border border-[#fecaca]">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold">Setting up OpenClaw yourself</h3>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-[#fee2e2] text-[#dc2626]">
              ~60 min
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {oldSteps.map((s) => (
              <li
                key={s}
                className="text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#fca5a5] flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        {/* New way */}
        <div className="rounded-3xl p-7 bg-teal-bg border border-[#a7f3d0]">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold">Using InstaClaw</h3>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-[#dcfce7] text-[#16a34a]">
              &lt;1 min
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {newSteps.map((s) => (
              <li
                key={s}
                className="text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-teal flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3.5 border-t border-[#a7f3d0] text-[13px] font-medium text-teal">
            We handle servers, updates, and everything technical.
          </div>
        </div>
      </div>
    </section>
  );
}
