'use client';

import { useState } from 'react';

export default function HomePage() {
  const [messages, setMessages] = useState([
    { sender: 'xiaoLin', text: '你好，我是小琳，欢迎来到进步事务所！' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setMessages((prev) => [
      ...prev,
      { sender: 'xiaoLin', text: '（模拟回应）收到，我会认真记录的哦～！' }
    ]);
    setInput('');
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 space-y-12">
      {/* 顶部 */}
      <div className="text-center">
        <p className="text-sm text-gray-400 tracking-widest mb-2">
          跨蹈群星归河山，指引河山向群星
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">进步事务所</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-cyan-300">
          <a href="/rules" className="hover:text-white underline">第七纪同盟会游戏规则</a>
          <a href="#" className="hover:text-white underline">购买第七纪同盟会模型</a>
          <a href="#" className="hover:text-white underline">加入同盟会</a>
          <a href="#" className="hover:text-white underline">我的聚会点</a>
          <Link href="https://chat.ministry-of-progress.com" target="_blank">
           <Button>进入许征主义者聊天室</Button>
          </Link>
        </div>
      </div>

      {/* 主体内容 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左栏 */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2 text-cyan-300">伟大的许征</h2>
            <div className="w-full max-w-md mx-auto">
              <img
              src="/portrait of Tsu Zheng.jpg"
              alt="伟大的许征画像"
              className="w-full h-auto rounded shadow"
              />
</div>
            
          </div>

          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-md font-semibold text-cyan-200 mb-2">每周一思</h3>
            <p className="text-gray-300">
              “自甘平庸是邪恶的借口。” ——许征
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-bold text-cyan-300 mb-2">第七纪同盟会公报</h3>
            <p className="text-gray-300">
              实现幸福的简单易行的办法
            </p>
          </div>
        </div>

        {/* 右栏 */}
        <div className="space-y-6">
          <div className="bg-gray-900 p-4 rounded shadow border border-cyan-600">
            <h2 className="text-2xl font-bold text-cyan-300">进步事务所公报</h2>
          </div>

          <div className="bg-gray-800 p-4 rounded shadow">
            <h3 className="text-lg font-bold text-purple-300 mb-2">舰队公报</h3>
            <p className="text-gray-300">
              第十二生产建设舰队在昌平星区决胜，进步事务所专访舰队之望林海伦
            </p>
            <p className="text-gray-300">
              进步事务所一致同意授予伯弗卡先生许征精银荣光勋章
            </p>
            <p className="text-gray-300">
              正典变动？信仰之城许征主义研究会的最新计划解析
            </p>
          </div>
        </div>
      </div>

      {/* 小琳对话框 */}
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 mt-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">与小琳对话</h2>
        <div className="max-h-64 overflow-y-auto space-y-2 mb-4 bg-black/40 p-4 rounded">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`text-sm p-2 rounded ${
                msg.sender === 'xiaoLin' ? 'bg-cyan-800 text-white self-start' : 'bg-gray-700 text-white self-end'
              }`}
            >
              <strong>{msg.sender === 'xiaoLin' ? '小琳：' : '你：'}</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded bg-gray-800 text-white outline-none"
            placeholder="跟小琳说点什么吧……"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded"
            onClick={handleSend}
          >
            发送
          </button>
        </div>
      </div>
    </main>
  );
}
