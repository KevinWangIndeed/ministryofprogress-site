// /src/app/rules/core/page.js
'use client';

export default function CoreRulesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8 text-center">📘 第七纪同盟会总规则</h1>

      <div className="w-full max-w-3xl space-y-8">
        <section className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-white mb-2">📄 通用规则书</h2>
          <a
            href="/rules/core/通用规则书.pdf"
            target="_blank"
            className="text-cyan-300 underline hover:text-white"
          >
            点击查看 PDF
          </a>
        </section>

        <section className="bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-white mb-2">🧾 通用命令卡</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* 示例图片，实际图片命名可对应你上传到 public 的命令卡文件 */}
            <img src="/rules/core/通用命令卡/命令1.png" alt="命令1" className="rounded" />
            <img src="/rules/core/通用命令卡/命令2.png" alt="命令2" className="rounded" />
            <img src="/rules/core/通用命令卡/命令3.png" alt="命令3" className="rounded" />
          </div>
        </section>
      </div>
    </main>
  );
}