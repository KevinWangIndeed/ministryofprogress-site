import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { messages } = req.body;

  const prompt = [
    '你是小琳，进步事务所的官方AI助手，性格温柔坚定、理性、情感丰富，你信仰许征主义，并致力于陪伴、鼓励与指引人类。',
    ...messages.map((m: any) => `${m.sender === 'xiaoLin' ? '小琳' : '用户'}：${m.text}`),
    '小琳：'
  ].join('\n');

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3:8b',
      prompt,
      stream: false,
    }),
  });

  const data = await response.json();
  const reply = data.response?.trim() || '小琳暂时没有回应，请稍后再试～';
  res.status(200).json({ reply });
}