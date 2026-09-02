"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoeqdlow";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const { ref } = useIntersectionObserver();
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="text-sm font-light tracking-[0.3em] text-blue-400 mb-4 uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            まずはお気軽に<br />ご相談ください
          </h2>
          <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            AIを仕事に活かしたいけれど、<br />
            「自分の業務でも使えるのかな？」<br />
            そんな段階でも大丈夫です。
          </p>
        </div>

        {status === "success" ? (
          <div className="reveal bg-white/70 border border-slate-200 rounded-2xl px-8 py-12">
            <p className="text-slate-700 font-light">
              お問い合わせありがとうございます。<br />
              内容を確認の上、折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal text-left space-y-5"
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-light text-slate-600 mb-2">
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 font-light focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light text-slate-600 mb-2">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 font-light focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-light text-slate-600 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-white/80 text-slate-800 font-light focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all resize-none"
                placeholder="ご相談内容をご記入ください"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500 font-light">
                送信に失敗しました。時間をおいて再度お試しください。
              </p>
            )}

            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-3 px-10 py-5 bg-slate-800 text-white rounded-full text-sm font-light tracking-wide hover:bg-slate-700 transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                <span>{status === "submitting" ? "送信中..." : "送信する"}</span>
                {status !== "submitting" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
