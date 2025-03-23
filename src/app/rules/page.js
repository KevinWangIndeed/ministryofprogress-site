'use client';

import { useRouter } from 'next/navigation';

export default function RulesPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        第七纪同盟会规则中心
      </h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-xl">
        请选择您想查看的规则类型。
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        <button
          onClick={() => router.push('/rules/core')}
          className="bg-cyan-700 hover:bg-cyan-800 px-8 py-4 rounded text-lg font-semibold"
        >
          📘 第七纪同盟会总规则
        </button>
        <button
          onClick={() => router.push('/rules/factions')}
          className="bg-purple-700 hover:bg-purple-800 px-8 py-4 rounded text-lg font-semibold"
        >
          🛰️ 第七纪同盟会派系规则
        </button>
      </div>
    </main>
  );
}
