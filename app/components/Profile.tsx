"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Profile() {
  const { ref } = useIntersectionObserver();

  return (
    <section
      id="profile"
      className="py-32 bg-white"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-light tracking-[0.3em] text-blue-400 mb-4 uppercase">
            Profile
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-800">
            プロフィール
          </h2>
        </div>

        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center text-4xl">
                  🌿
                </div>
                <p className="text-center mt-3 text-slate-800 font-light tracking-wider">shina</p>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-base font-medium text-slate-700 mb-2">AIへの想い</h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    一人で仕事を頑張る個人事業主の方が、AIを使いこなすことで少しでもラクになってほしい。
                    そんな思いからAI活用の仕組みづくりをはじめました。
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-slate-700 mb-2">こだわっていること</h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    「現場で本当に使える仕組み」にこだわっています。高度な技術より、
                    実際の業務でちゃんと動いて、使い続けられることを大切にしています。
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["AI活用", "業務改善", "業務自動化", "AIエージェント", "個人事業主サポート"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
