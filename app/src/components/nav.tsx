import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1100px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[22px] text-text-primary">
          InstaClaw
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:block"
          >
            Features
          </Link>
          <a
            href="mailto:support@instaclaw.dev"
            className="text-[13px] font-semibold text-text-secondary"
          >
            Support
          </a>
        </div>
      </div>
    </nav>
  );
}
