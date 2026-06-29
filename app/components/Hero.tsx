export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="hero-fade-1 text-sm font-light tracking-[0.3em] text-blue-400 mb-8 uppercase">
          AI × 業務改善
        </p>
        <h1 className="hero-fade-2 text-4xl md:text-6xl font-light leading-tight text-slate-800 mb-8">
          AIを活用して、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            現場で本当に使える
          </span>
          <br />
          仕組みをつくります。
        </h1>
        <p className="hero-fade-3 text-base md:text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          一人で仕事を頑張る個人事業主の業務を、AIで少しでもラクにしたい。<br className="hidden md:block" />
          そんな思いで、一人ひとりの仕事に合わせたAIの仕組みをご提案・制作しています。
        </p>
        <div className="hero-fade-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-full text-sm font-light tracking-wide hover:bg-slate-700 transition-all hover:shadow-lg"
          >
            AI活用事例を見る
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-slate-300 text-slate-600 rounded-full text-sm font-light tracking-wide hover:border-slate-500 hover:text-slate-800 transition-all"
          >
            ご相談はこちら
          </a>
        </div>

        <div className="hero-fade-4 mt-20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-light tracking-wide">
            <span>資料変換</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>スプレッドシート自動化</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>経理サポート</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>リサーチ自動化</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>発信業務サポート</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent mx-auto" />
      </div>
    </section>
  );
}
