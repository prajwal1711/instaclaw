export function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent bg-accent-light px-4 py-1.5 rounded-full mb-5">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="3" fill="currentColor" />
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </svg>
        Powered by OpenClaw
      </div>
      <h1 className="font-display text-[clamp(40px,6vw,60px)] leading-[1.08] tracking-tight mb-5 [text-wrap:balance]">
        Get <span className="oc-highlight">OpenClaw</span> running in
        under&nbsp;1&nbsp;minute
      </h1>
      <p className="text-lg leading-relaxed text-text-secondary max-w-[520px] mx-auto [text-wrap:pretty]">
        Skip the servers, the code, and the headaches. Pick your AI, connect
        Telegram, and your OpenClaw assistant is&nbsp;live.
      </p>
    </div>
  );
}
