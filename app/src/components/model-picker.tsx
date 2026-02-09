"use client";

import { useState } from "react";

const models = [
  {
    id: "claude",
    name: "Claude",
    desc: "Thoughtful and detailed. Best for writing and complex tasks.",
    icon: "https://cdn.simpleicons.org/anthropic/D4A574",
    bg: "#faf0e6",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    desc: "Great all-rounder. Handles just about everything well.",
    icon: "https://cdn.simpleicons.org/openai/10a37f",
    bg: "#e6f7f1",
  },
  {
    id: "gemini",
    name: "Gemini",
    desc: "Super fast. Perfect for quick questions on the go.",
    icon: "https://cdn.simpleicons.org/googlegemini/4285f4",
    bg: "#e8f0fe",
  },
] as const;

export function ModelPicker() {
  const [selected, setSelected] = useState("claude");

  return (
    <div className="mb-8">
      <div className="text-[15px] font-bold mb-1">
        Which AI model should power your assistant?
      </div>
      <div className="text-[13px] text-text-muted mb-3.5">
        Each model has different strengths. You can switch anytime.
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5"
        role="radiogroup"
        aria-label="AI model"
      >
        {models.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-pressed={selected === m.id}
            onClick={() => setSelected(m.id)}
            className="picker-card bg-surface border-2 border-border rounded-[14px] p-4 text-left transition-all hover:border-[#d0d0d0] cursor-pointer"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ background: m.bg }}
            >
              <img
                src={m.icon}
                alt=""
                width={22}
                height={22}
                loading="lazy"
              />
            </div>
            <div className="text-[15px] font-semibold mb-0.5">{m.name}</div>
            <div className="text-xs text-text-muted leading-snug">{m.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
