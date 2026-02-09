export function OcExplainer() {
  return (
    <div className="bg-gradient-to-br from-accent-light to-[#f3f0ff] border border-[#ddd6fe] rounded-3xl p-7 mb-10 relative overflow-hidden">
      <div
        className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-accent/[0.06]"
        aria-hidden="true"
      />
      <div className="flex items-center gap-2.5 mb-2.5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 2L2 6l8 4 8-4-8-4zM2 14l8 4 8-4M2 10l8 4 8-4"
            stroke="#5B4CDB"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
          What is OpenClaw?
        </span>
      </div>
      <div className="text-lg font-bold text-text-primary mb-1.5 relative">
        A free, open-source AI assistant that actually gets work&nbsp;done
      </div>
      <p className="text-[15px] text-text-secondary leading-relaxed relative">
        Emails, scheduling, research, writing, finances &mdash; OpenClaw handles
        it all. But until now, you needed to be a developer to use it.{" "}
        <strong className="text-accent font-semibold">
          InstaClaw changes that.
        </strong>{" "}
        One click, 60 seconds, zero code.
      </p>
      <div className="flex gap-8 mt-4 pt-4 border-t border-accent/[0.12]">
        <div>
          <div className="text-[22px] font-extrabold tracking-tight text-text-primary">
            2,400+
          </div>
          <div className="text-xs text-text-muted">Assistants deployed</div>
        </div>
        <div>
          <div className="text-[22px] font-extrabold tracking-tight text-text-primary">
            &lt;60s
          </div>
          <div className="text-xs text-text-muted">Average setup time</div>
        </div>
        <div>
          <div className="text-[22px] font-extrabold tracking-tight text-text-primary">
            24/7
          </div>
          <div className="text-xs text-text-muted">Always running</div>
        </div>
      </div>
    </div>
  );
}
