'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
  const [language, setLanguage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      setLanguage(storedLang);
    } else {
      setShowDialog(true);
    }
  }, []);

  const chooseLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    setShowDialog(false);
  };

  if (showDialog) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
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
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {language === 'zh' && (
        <>
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 text-center mb-6">
            欢迎访问进步事务所
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl text-gray-300 mb-10">
            我们是许征拣选的人类统治者，进步事务所致力于推动人类再次统一，保护人类文明，
            我们借由全人类的共同生产和进步舰队的努力统治整个人类星区。
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
            We are the chosen of Tsu Zheng, bound to rule over humanity. The Ministry of Progress strives to reunite humanity to protect it.
            We govern through collective production and the efforts of the Fleet of Progress.
            Led by the T.M.H. and aided by Aislyn, the Ministry of Progress confronts the future with the undying wisdom of the Great Tsu Zheng.
          </p>
        </>
      )}

      <button
        className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded text-lg"
        onClick={() => router.push('/home')}
      >
        {language === 'zh' ? '进入事务所' : 'Enter the Ministry'}
      </button>
    </main>
  );
}
