"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-8">
        <p className="text-base font-normal text-brand-black mb-2" style={{ fontFamily: "var(--font-serif)" }}>
          Thanks for reaching out.
        </p>
        <p className="text-sm text-brand-gray-500">
          I'll get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-brand-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-brand-gray-300 rounded text-sm focus:outline-none focus:border-brand-black transition-colors bg-brand-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-brand-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-brand-gray-300 rounded text-sm focus:outline-none focus:border-brand-black transition-colors bg-brand-white"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm text-brand-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-brand-gray-300 rounded text-sm focus:outline-none focus:border-brand-black transition-colors resize-none bg-brand-white"
          placeholder="What would you like to talk about?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 border border-brand-black text-brand-black px-4 py-2 rounded text-sm font-normal hover:bg-brand-black hover:text-brand-white transition-colors"
      >
        Send message
        <span>→</span>
      </button>
    </form>
  );
}
