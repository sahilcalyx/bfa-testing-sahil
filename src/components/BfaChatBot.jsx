import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', wordBreak: 'break-word' }}>
            Click here
          </a>
        );
      }
      return part;
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: input });

      setTimeout(() => {
        const botMessage = { text: response.data.botResponse, sender: 'bot' };
        setMessages((prev) => [...prev, botMessage]);
        setIsThinking(false);
      }, 2000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsThinking(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      <div className="chatbot-icon" onClick={() => setShowChatbot(!showChatbot)}>
        <i className="fab fa-whatsapp"></i>
      </div>

      {showChatbot && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <img src="assets/img/BFA-logo.png" className="wha-img" alt="" />
            <div className="fw-bolder d-flex flex-column" style={{ lineHeight: '1.3' }}>
              <span>Brit Fintech Awards</span>
              <span className="what-subheader">Support provided by Calyx Solutions</span>
            </div>
            <button className="close-chatbot" onClick={() => setShowChatbot(false)}>&times;</button>
          </div>

          <div className="chatbot-body" style={{ overflowY: 'scroll', height: '30vh' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`message-container ${msg.sender === 'user' ? 'question' : 'answer'}`}
                style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: '10px' }}>
                <div className="message" style={{ backgroundColor: msg.sender === 'user' ? '#dcf8c6' : '#ffffff', padding: '10px 15px', borderRadius: '10px', maxWidth: '70%', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)' }}>
                  {renderMessage(msg.text)}
                </div>
              </div>
            ))}

            {isThinking && (
              <motion.div className="thinking-animation"
                style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', height: '30px', marginLeft: '2px', gap: '4px', width:"60px" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}>
                {[0, 1, 2].map((index) => (
                  <motion.span key={index}
                    style={{ width: '10px', height: '10px', backgroundColor: '#25D366', borderRadius: '50%', display: 'inline-block' }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2, ease: 'easeInOut', delay: index * 0.2 }} />
                ))}
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="custom-message">
            <input type="text" placeholder="Type your message here..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />
            <button className="send-custom-message" onClick={sendMessage} style={{ fontWeight: '600' }}>Ask</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;