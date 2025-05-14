import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, I'm having trouble connecting. Please try again later." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-xl p-4 max-w-3xl mx-auto h-[75vh] flex flex-col border border-gray-200">
      {/* Header */}
      <div className="bg-blue-600 text-white rounded-t-xl p-3 -mx-4 -mt-4 mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          NIELIT Assistant
        </h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 px-2">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 h-full flex flex-col justify-center">
            <p className="text-lg">Welcome to NIELIT Chat Assistant!</p>
            <p className="text-sm">Ask me about admissions, courses, or anything else.</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none shadow-sm"
              }`}
            >
              {msg.text}
              <div
                className={`text-xs mt-1 text-right ${
                  msg.sender === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {msg.sender === "user" ? "You" : "NIELIT Bot"}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-none p-3 shadow-sm flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex gap-2 p-2 bg-white rounded-xl border border-gray-200">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border-0 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Ask about NIELIT admissions..."
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}