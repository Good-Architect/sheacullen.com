"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-brand-gray-100 rounded-lg p-8 text-center">
        <p className="text-lg font-medium text-brand-black mb-2">
          Thanks for reaching out!
        </p>
        <p className="text-sm text-brand-gray-500">
          I&apos;ll get back to you within a couple of days.
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
            className="block text-sm font-medium text-brand-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-black transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-black transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-brand-gray-300 rounded-lg text-sm focus:outline-none focus:border-brand-black transition-colors resize-none"
          placeholder="What would you like to talk about?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
      >
        Send message
        <span>&rarr;</span>
      </button>
    </form>
  );
}
