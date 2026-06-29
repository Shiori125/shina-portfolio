"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const steps = [
  {
    number: "01",
    title: "ご相談",
    description: "現在のお仕事やお困りごとをお聞かせください。どんな小さなことでも大丈夫です。",
  },
  {
    number: "02",
    title: "ご提案",
    description: "業務内容に合わせて、最適なAI活用方法をご提案します。",
  },
  {
    number: "03",
    title: "AI活用スタート",
    description: "ご提案内容に合わせてAIの設定・制作を行い、実際の業務で活用できる状態までサポートします。",
  },
];

export default function Flow() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      id="flow"
      className="py-32 bg-slate-50"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] text-blue-400 mb-4 uppercase">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800">
            ご相談からAI活用まで
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-xs font-light text-blue-500 tracking-wider">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-slate-800 mb-2">{step.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-300 to-purple-300 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
