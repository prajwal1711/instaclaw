export function PhonePreview() {
  return (
    <section className="max-w-[1100px] mx-auto px-8 pt-18 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      <div>
        <h2 className="font-display text-4xl leading-tight mb-4">
          See <span className="oc-highlight">OpenClaw</span> in action
          on&nbsp;Telegram
        </h2>
        <p className="text-base text-text-secondary leading-relaxed mb-6">
          Once you sign in, your assistant is live on Telegram. Just open a chat
          and ask it anything &mdash; like texting a really smart friend who
          never&nbsp;sleeps.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "Responds in seconds, 24/7",
            "Remembers your conversations",
            "Handles emails, calendar, research, writing",
            "Works right inside Telegram",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[15px]">
              <span
                className="w-[22px] h-[22px] rounded-full bg-teal-bg text-teal inline-flex items-center justify-center text-xs flex-shrink-0"
                aria-hidden="true"
              >
                &#10003;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="w-[300px] mx-auto bg-surface rounded-[32px] border border-border overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.02),0_8px_24px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.04)]">
          <div className="bg-surface pt-2.5 px-5 flex justify-center">
            <div className="w-[110px] h-[26px] bg-text-primary rounded-b-[18px]" />
          </div>
          <div className="flex items-center gap-2.5 px-4 py-3 bg-surface border-b border-[#f0f0f0]">
            <span className="text-blue text-lg" aria-hidden="true">
              &#8249;
            </span>
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0">
              OC
            </div>
            <div>
              <div className="text-sm font-semibold">My OpenClaw Bot</div>
              <div className="text-[11px] text-text-muted">online</div>
            </div>
          </div>
          <div className="p-3.5 flex flex-col gap-[7px] bg-[#f5f5f0] min-h-[260px]">
            <div className="self-end max-w-[82%] px-3 py-2 text-[13px] leading-snug rounded-[14px] rounded-br bg-accent-light text-text-primary">
              Summarize my emails from today
            </div>
            <div className="self-start max-w-[82%] px-3 py-2 text-[13px] leading-snug rounded-[14px] rounded-bl bg-surface text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              You got 14 emails today. 3 need your attention:
              <br />
              <br />
              &bull; <strong>Sarah</strong> &mdash; meeting reschedule
              <br />
              &bull; <strong>Acme Co</strong> &mdash; invoice due Friday
              <br />
              &bull; <strong>Tom</strong> &mdash; wants project feedback
              <br />
              <br />
              Want me to draft replies?
            </div>
            <div className="self-end max-w-[82%] px-3 py-2 text-[13px] leading-snug rounded-[14px] rounded-br bg-accent-light text-text-primary">
              Yes, draft all three
            </div>
            <div className="self-start max-w-[82%] px-3 py-2 text-[13px] leading-snug rounded-[14px] rounded-bl bg-surface text-text-primary shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              Done! 3 drafts ready in your inbox. Review and hit send whenever
              you&apos;re ready.
            </div>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface border-t border-[#f0f0f0]">
            <span className="flex-1 text-[13px] text-text-muted">
              Message...
            </span>
            <div
              className="w-[30px] h-[30px] rounded-full bg-accent flex items-center justify-center"
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
