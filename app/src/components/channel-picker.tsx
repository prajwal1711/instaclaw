"use client";

import { useState } from "react";

const channels = [
  {
    id: "telegram",
    name: "Telegram",
    desc: "Chat with your assistant right in Telegram.",
    icon: "https://cdn.simpleicons.org/telegram/0088cc",
    bg: "#e6f3fb",
    status: "live" as const,
  },
  {
    id: "discord",
    name: "Discord",
    desc: "Add your assistant to any Discord server.",
    icon: "https://cdn.simpleicons.org/discord/5865F2",
    bg: "#eef0fe",
    status: "soon" as const,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    desc: "Message your assistant on WhatsApp.",
    icon: "https://cdn.simpleicons.org/whatsapp/25D366",
    bg: "#edfcf2",
    status: "soon" as const,
  },
] as const;

export function ChannelPicker() {
  const [selected, setSelected] = useState("telegram");

  return (
    <div className="mb-8">
      <div className="text-[15px] font-bold mb-1">
        Where do you want to chat with it?
      </div>
      <div className="text-[13px] text-text-muted mb-3.5">
        More channels coming soon. Telegram is ready right now.
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
        role="radiogroup"
        aria-label="Channel"
      >
        {channels.map((c) => {
          const disabled = c.status === "soon";
          return (
            <button
              key={c.id}
              type="button"
              role="radio"
              aria-pressed={selected === c.id}
              aria-disabled={disabled}
              onClick={() => !disabled && setSelected(c.id)}
              className={`picker-card bg-surface border-2 border-border rounded-[14px] p-4 text-left transition-all ${
                disabled
                  ? "opacity-40 cursor-default"
                  : "hover:border-[#d0d0d0] cursor-pointer"
              }`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: c.bg }}
              >
                <img
                  src={c.icon}
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                />
              </div>
              <div className="text-[15px] font-semibold mb-0.5">{c.name}</div>
              <div className="text-xs text-text-muted leading-snug mb-2">
                {c.desc}
              </div>
              {c.status === "live" ? (
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-bg text-teal">
                  Available
                </span>
              ) : (
                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#f4f4f5] text-text-muted">
                  Coming soon
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
