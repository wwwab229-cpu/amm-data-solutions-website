"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

const starters = [
  "What services does AMM offer?",
  "I need a website chatbot",
  "How do I discuss a project?",
];

export default function AMMChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I’m the AMM website assistant. I can explain our services and help you outline a project inquiry. What would you like to work on?",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, busy, open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    const nextMessages: Message[] = [...messages, { role: "user", text: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setBusy(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.slice(-12).map(({ role, text: content }) => ({ role, content })),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The assistant is temporarily unavailable.");
      setMessages((current) => [...current, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "I’m unable to generate an AI reply right now. You can contact AMM at ammdatasolutions229@gmail.com and we’ll help with your inquiry.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="ammChatRoot">
      {open && (
        <section className="ammChatPanel" aria-label="AMM website assistant" aria-live="polite">
          <header className="ammChatHeader">
            <div className="ammChatAvatar">A</div>
            <div className="ammChatHeading">
              <strong>AMM Website Assistant</strong>
              <span><i /> AI support · English</span>
            </div>
            <button className="ammChatClose" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="ammChatMessages">
            <div className="ammChatNotice">Ask about our services or tell us what you need.</div>
            {messages.map((message, index) => (
              <div className={`ammChatMessage ${message.role === "user" ? "isUser" : "isAssistant"}`} key={index}>
                {message.text}
              </div>
            ))}
            {messages.length === 1 && !busy && (
              <div className="ammChatStarters">
                {starters.map((starter) => (
                  <button key={starter} onClick={() => void sendMessage(starter)}>{starter} <span>↗</span></button>
                ))}
              </div>
            )}
            {busy && <div className="ammChatTyping"><i /><i /><i /><span>Thinking</span></div>}
            <div ref={endRef} />
          </div>
          <form className="ammChatForm" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask AMM a question..."
              aria-label="Message the AMM assistant"
              maxLength={1200}
              disabled={busy}
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send message">↑</button>
          </form>
          <p className="ammChatFoot">Please don’t share passwords or sensitive information.</p>
        </section>
      )}
      <button className={`ammChatLauncher ${open ? "isOpen" : ""}`} onClick={() => setOpen((value) => !value)} aria-label={open ? "Close AMM chat" : "Chat with AMM"}>
        {open ? <span className="ammChatLauncherClose">×</span> : <><span className="ammChatLauncherIcon">✳</span><span>Chat with AMM</span><span className="ammChatLauncherArrow">↗</span></>}
      </button>
      <style jsx>{`
        .ammChatRoot{position:fixed;right:24px;bottom:24px;z-index:80;font-family:'DM Sans',Arial,sans-serif;color:#0b1730}
        .ammChatLauncher{display:flex;align-items:center;gap:10px;border:1px solid rgba(255,255,255,.7);border-radius:999px;padding:13px 17px;background:#102650;color:#fff;font-size:13px;font-weight:800;box-shadow:0 12px 35px rgba(11,23,48,.25);cursor:pointer;transition:transform .2s,box-shadow .2s}
        .ammChatLauncher:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(11,23,48,.32)}
        .ammChatLauncherIcon{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#ffc928;color:#102650;font-size:17px}
        .ammChatLauncherArrow{color:#ffd34d;font-size:16px}.ammChatLauncher.isOpen{margin-left:auto;width:45px;height:45px;justify-content:center;padding:0;background:#fff;color:#102650;border-color:#dce3ed}.ammChatLauncherClose{font-size:27px;line-height:1}
        .ammChatPanel{position:absolute;right:0;bottom:62px;width:min(390px,calc(100vw - 28px));height:min(570px,calc(100dvh - 125px));min-height:390px;display:flex;flex-direction:column;overflow:hidden;background:#fff;border:1px solid #dce3ed;border-radius:22px;box-shadow:0 28px 90px rgba(11,23,48,.25);animation:chatRise .2s ease-out}
        .ammChatHeader{display:flex;align-items:center;gap:11px;padding:17px;background:#102650;color:#fff}
        .ammChatAvatar{display:grid;place-items:center;width:39px;height:39px;border-radius:13px;background:#ffc928;color:#102650;font-weight:900;font-size:20px}
        .ammChatHeading{display:flex;flex-direction:column;gap:5px;flex:1;min-width:0}.ammChatHeading strong{font-size:13px}.ammChatHeading span{font-size:10px;color:#c5d3eb}.ammChatHeading i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#65d6ad;margin-right:5px}
        .ammChatClose{border:0;background:rgba(255,255,255,.1);color:#fff;border-radius:50%;width:32px;height:32px;font-size:22px;cursor:pointer}
        .ammChatMessages{flex:1;overflow:auto;padding:15px 14px 10px;background:linear-gradient(#f7f9fd,#fff)}
        .ammChatNotice{text-align:center;color:#8793a8;font-size:10px;margin:0 0 14px}
        .ammChatMessage{max-width:88%;padding:11px 13px;border-radius:15px;font-size:13px;line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;margin-bottom:10px}
        .isAssistant{background:#eef3fb;color:#203452;border-bottom-left-radius:5px;margin-right:auto}.isUser{background:#285ee8;color:#fff;border-bottom-right-radius:5px;margin-left:auto}
        .ammChatStarters{display:flex;flex-direction:column;align-items:flex-start;gap:7px;margin:3px 0 12px}.ammChatStarters button{display:flex;align-items:center;justify-content:space-between;gap:12px;max-width:100%;border:1px solid #dce5f3;border-radius:999px;padding:9px 12px;background:#fff;color:#29446d;font-size:11px;text-align:left;cursor:pointer}.ammChatStarters button span{color:#285ee8}
        .ammChatTyping{display:flex;align-items:center;gap:4px;width:max-content;background:#eef3fb;border-radius:15px;padding:11px 13px;margin-bottom:10px}.ammChatTyping i{width:5px;height:5px;background:#7190c5;border-radius:50%;animation:typing .8s infinite alternate}.ammChatTyping i:nth-child(2){animation-delay:.2s}.ammChatTyping i:nth-child(3){animation-delay:.4s}.ammChatTyping span{font-size:10px;color:#72819a;margin-left:4px}
        .ammChatForm{display:flex;gap:8px;align-items:center;padding:12px;border-top:1px solid #e7edf6;background:#fff}.ammChatForm input{min-width:0;flex:1;border:1px solid #dce3ed;border-radius:999px;padding:12px 14px;font:inherit;font-size:12px;outline:none;color:#102650}.ammChatForm input:focus{border-color:#7199ed;box-shadow:0 0 0 3px #285ee817}.ammChatForm input:disabled{opacity:.6}.ammChatForm button{width:40px;height:40px;border:0;border-radius:50%;background:#ffc928;color:#102650;font-size:22px;font-weight:800;cursor:pointer}.ammChatForm button:disabled{opacity:.45;cursor:not-allowed}
        .ammChatFoot{font-size:9px;color:#8a96aa;text-align:center;margin:0;padding:0 10px 10px;background:#fff}
        @keyframes chatRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes typing{from{opacity:.35;transform:translateY(0)}to{opacity:1;transform:translateY(-3px)}}
        @media(max-width:480px){.ammChatRoot{right:14px;bottom:14px}.ammChatPanel{bottom:59px;width:calc(100vw - 28px);height:min(600px,calc(100dvh - 105px));min-height:360px;border-radius:19px}.ammChatLauncher{padding:11px 14px;font-size:12px}.ammChatLauncherIcon{width:24px;height:24px}}
        @media(prefers-reduced-motion:reduce){.ammChatPanel,.ammChatTyping i{animation:none!important}.ammChatLauncher{transition:none!important}}
      `}</style>
    </div>
  );
}
