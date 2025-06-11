import { useState } from 'react';

export default function AIContactBot() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { role: 'assistant', text: 'Hi, I’m PaulBot — ask me anything about Paul Wolfe. 👨‍💻' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const updatedLog = [...chatLog, userMessage];
    setChatLog(updatedLog);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://paulbot-rag.onrender.com/ask-paulbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      });

      const data = await res.json();
      const botReply = data.answer || 'Sorry, I couldn’t find an answer.';

      setChatLog([...updatedLog, { role: 'assistant', text: botReply }]);
    } catch (err) {
      setChatLog([...updatedLog, {
        role: 'assistant',
        text: '❌ Error connecting to PaulBot backend.'
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Ask PaulBot 🤖</h2>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col space-y-4">
        <div className="flex flex-col space-y-3 h-96 overflow-y-auto px-2">
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                msg.role === 'assistant'
                  ? 'bg-teal-600 text-white self-start animate-fadeIn'
                  : 'bg-gray-600 text-white self-end animate-fadeIn'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="max-w-sm px-4 py-2 rounded-lg bg-teal-600 text-white self-start animate-pulse">
              PaulBot is thinking...
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me how to contact Paul..."
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-lg font-semibold transition"
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
