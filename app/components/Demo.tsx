"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const rows = [
  { name: "田中 花子", tel: "03-1234-5678", email: "tanaka@example.com" },
  { name: "佐藤 健一", tel: "090-2345-6789", email: "sato@example.com" },
  { name: "鈴木 美咲", tel: "080-3456-7890", email: "suzuki@example.com" },
  { name: "山本 大輔", tel: "070-4567-8901", email: "yamamoto@example.com" },
];

export default function Demo() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      id="demo"
      className="py-32 bg-gradient-to-br from-purple-50/40 via-white to-white"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] text-purple-400 mb-4 uppercase">
            Demo
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            実際にどう変わるか、<br className="md:hidden" />見てみましょう
          </h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            スプレッドシートへの自動入力の一例です。
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <div className="reveal">
            <p className="text-xs text-slate-400 mb-3 tracking-wide">Before：申込者リスト（手書きメモ）</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 -rotate-1">
              <p className="text-sm text-slate-500 font-light mb-4 border-b border-dashed border-slate-200 pb-3">
                セミナー申込者リスト
              </p>
              <ul className="space-y-3">
                {rows.map((r, i) => (
                  <li key={i} className="text-sm text-slate-600 font-light italic leading-relaxed">
                    {r.name}／{r.tel}／{r.email}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal flex md:flex-col items-center justify-center gap-2 text-purple-300">
            <svg className="w-6 h-6 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-xs font-light tracking-wide whitespace-nowrap">AIが自動入力</span>
          </div>

          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <p className="text-xs text-slate-400 mb-3 tracking-wide">After：スプレッドシート</p>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-light">
                    <th className="px-4 py-2 text-left font-light border-b border-slate-200 w-10">No</th>
                    <th className="px-4 py-2 text-left font-light border-b border-slate-200">氏名</th>
                    <th className="px-4 py-2 text-left font-light border-b border-slate-200">電話番号</th>
                    <th className="px-4 py-2 text-left font-light border-b border-slate-200">メールアドレス</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="px-4 py-2 text-slate-400 border-b border-slate-100">{i + 1}</td>
                      <td className="px-4 py-2 text-slate-700 font-light border-b border-slate-100">{r.name}</td>
                      <td className="px-4 py-2 text-slate-700 font-light border-b border-slate-100">{r.tel}</td>
                      <td className="px-4 py-2 text-slate-700 font-light border-b border-slate-100">{r.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="reveal text-center mt-12" style={{ transitionDelay: "250ms" }}>
          <p className="text-slate-400 text-xs font-light">
            ※ サンプルデータによるイメージです。実際の業務内容に合わせて項目・出力形式をご提案します。
          </p>
        </div>
      </div>
    </section>
  );
}
