"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const problems = [
  "毎日同じような作業に時間を取られている",
  "お客様対応以外の事務作業が多すぎる",
  "AIを使ってみたいけれど、何から始めればいいか分からない",
  "本業にもっと時間とエネルギーを使いたい",
];

export default function Problems() {
  const { ref } = useIntersectionObserver();

  return (
    <section className="py-32 bg-slate-50" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] text-blue-400 mb-4 uppercase">
            Pain Points
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800">
            こんなお悩み、ありませんか？
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                    <span className="text-red-400 text-xs">✗</span>
                  </span>
                  <p className="text-slate-600 font-light leading-relaxed">{problem}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ transitionDelay: "400ms" }}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 text-center border border-blue-100/50">
            <p className="text-slate-500 text-sm mb-3">そのお悩み、</p>
            <p className="text-xl md:text-2xl font-light text-slate-800">
              AIを活用した仕組みで
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                解決できるかもしれません。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
