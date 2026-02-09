export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-5">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between">
        <span className="text-xs text-text-muted">
          &copy; 2026 InstaClaw
        </span>
        <a
          href="mailto:support@instaclaw.dev"
          className="text-xs text-text-muted hover:text-text-secondary transition-colors"
        >
          Need help? Contact us
        </a>
      </div>
    </footer>
  );
}
