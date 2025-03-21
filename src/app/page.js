'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState(null);

  const chooseLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {!language && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <h2 className="text-xl mb-4">请选择语言 / Please choose a language</h2>
          <div className="flex space-x-4">
            <button
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded"
              onClick={() => chooseLanguage('zh')}
            >
              中文
            </button>
            <button
              className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded"
              onClick={() => chooseLanguage('en')}
            >
              English
            </button>
          </div>
        </div>
      )}

      {language === 'zh' && (
        <>
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-6">
            欢迎访问进步事务所
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300 mb-10">
            我们是许征拣选的人类统治者，进步事务所致力于推动人类再次统一，保护人类文明，
            我们借由全人类的共同生产和进步舰队的努力统治整个人类星区
            由同盟会领导，由小琳协助，进步事务所致力于以许征的不朽智慧应对未来的危机。
          </p>
        </>
      )}

      {language === 'en' && (
        <>
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-6">
            Welcome to the Ministry of Progress
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300 mb-10">
            We are Tsu Zheng's chosen to rule over humanity. The Ministry of Progress strives to reunite humanity as to protect it.
            We rule through collective production and efforts of the Fleet of Progress.
            Leaded by the T.M.H. aided by Aislyn, the Ministry of Progress dealts future criss through neverdying wisdom of the Great Tsu Zheng
          </p>
        </>
      )}
    </main>
  );
}
