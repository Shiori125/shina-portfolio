"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const solutions = [
  {
    icon: "📄",
    title: "資料を指定フォーマットへ変換",
    catchcopy: "資料を読むだけで、欲しい形式へ。",
    before: "チラシや資料がそのままになっている",
    after: "ホームページ掲載文・報告書・指定フォーマットに自動変換",
    examples: ["チラシ → ホームページ掲載文", "PDF → 指定フォーマット", "資料 → 報告書"],
    color: "from-blue-50 to-blue-50/30",
    accent: "text-blue-400",
    border: "border-blue-100",
    dot: "bg-blue-400",
  },
  {
    icon: "📊",
    title: "スプレッドシート入力を自動化",
    catchcopy: "面倒な転記作業をAIに任せる。",
    before: "PDFや書類を見ながら手入力している",
    after: "データを読み込むだけでスプレッドシートに自動入力",
    examples: ["PDF → スプレッドシート", "資料 → 一覧表", "データ整理・集計"],
    color: "from-purple-50 to-purple-50/30",
    accent: "text-purple-400",
    border: "border-purple-100",
    dot: "bg-purple-400",
  },
  {
    icon: "🧾",
    title: "経理業務をラクにする",
    catchcopy: "領収書整理から入力まで、まとめてサポート。",
    before: "領収書の整理や会計ソフト入力に時間がかかる",
    after: "領収書を撮影するだけで勘定科目提案・入力補助",
    examples: ["領収書 → 勘定科目提案", "freee 入力補助", "マネーフォワード 入力補助"],
    color: "from-green-50 to-green-50/30",
    accent: "text-green-400",
    border: "border-green-100",
    dot: "bg-green-400",
  },
  {
    icon: "🔍",
    title: "リサーチを自動化",
    catchcopy: "調べる時間を、考える時間へ。",
    before: "市場調査や競合リサーチに時間と労力がかかる",
    after: "テーマを伝えるだけで調査レポートを自動作成",
    examples: ["市場調査・競合調査", "ニュース収集", "定期レポート作成"],
    color: "from-amber-50 to-amber-50/30",
    accent: "text-amber-400",
    border: "border-amber-100",
    dot: "bg-amber-400",
  },
  {
    icon: "✍️",
    title: "発信業務をサポートする",
    catchcopy: "あなたらしい発信を、もっと続けやすく。",
    before: "ブログやSNS発信のネタ出し・文章作成が大変",
    after: "キーワードやメモを渡すだけで発信コンテンツを作成",
    examples: ["ブログ記事作成", "SNS投稿文作成", "メール文作成"],
    color: "from-rose-50 to-rose-50/30",
    accent: "text-rose-400",
    border: "border-rose-100",
    dot: "bg-rose-400",
  },
];

export default function Solutions() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      id="solutions"
      className="py-32 bg-white"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] text-blue-400 mb-4 uppercase">
            What I Can Do
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
            AIでこんな業務改善ができます
          </h2>
          <p className="text-slate-500 font-light max-w-xl mx-auto">
            AIそのものではなく、「仕事がどう変わるか」をお伝えします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`group bg-gradient-to-br ${s.color} rounded-3xl p-7 border ${s.border} h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-base font-medium text-slate-800 mb-2">{s.title}</h3>
                <p className={`text-sm font-light mb-5 ${s.accent}`}>{s.catchcopy}</p>

                <div className="space-y-3 mb-5">
                  <div className="bg-white/70 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">Before</p>
                    <p className="text-sm text-slate-600 font-light">{s.before}</p>
                  </div>
                  <div className="text-center text-slate-300 text-sm">↓</div>
                  <div className="bg-white/70 rounded-xl p-3">
                    <p className="text-xs text-slate-400 mb-1">After</p>
                    <p className="text-sm text-slate-700 font-light">{s.after}</p>
                  </div>
                </div>

                <ul className="space-y-1">
                  {s.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-slate-500 font-light">
                      <span className={`w-1 h-1 rounded-full flex-shrink-0 ${s.dot}`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div
            className="reveal md:col-span-2 lg:col-span-3"
            style={{ transitionDelay: "500ms" }}
          >
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-3xl p-7 border border-slate-100 text-center">
              <p className="text-slate-500 font-light text-sm">
                上記以外にも、業務内容に合わせてAI活用のご提案をします。<br />
                まずはどんな業務で困っているかをお聞かせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
