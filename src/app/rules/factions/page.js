// /src/app/rules/factions/page.js
'use client';

import { useRouter } from 'next/navigation';

export default function FactionRulesPage() {
  const router = useRouter();

  const factions = [
    { id: 'progress', name: '进步派系' },
    { id: 'light', name: '光辉派系' },
    { id: 'frontier', name: '远星派系' },
    { id: 'dawn', name: '晓星社' },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-purple-300 mb-8 text-center">🛰️ 第七纪同盟会派系规则</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {factions.map((faction) => (
          <button
            key={faction.id}
            onClick={() => router.push(`/rules/factions/${faction.id}`)}
            className="bg-purple-700 hover:bg-purple-800 p-6 rounded text-lg font-semibold"
          >
            {faction.name}
          </button>
        ))}
      </div>
    </main>
  );
}
