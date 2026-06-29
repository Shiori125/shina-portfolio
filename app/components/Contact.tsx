"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Contact() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
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

        <div className="reveal" style={{ transitionDelay: "200ms" }}>
          <a
            href="mailto:contact@shina-ai.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-800 text-white rounded-full text-sm font-light tracking-wide hover:bg-slate-700 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>お問い合わせフォームへ</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
