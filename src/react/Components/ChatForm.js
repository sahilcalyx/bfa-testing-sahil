// Frontend - Chatbot Component (React.js)
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";


const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);



  const addChatResponse = async (e) => {
    e.preventDefault();
    if (!userMessage || !botResponse) {
      alert('Both fields are required!');
      return;
    }
    try {
      await axios.post('https://bfa-chat-bot-2025.vercel.app/chat/add', { userMessage, botResponse });
      alert('Chat response added successfully!');
      setUserMessage('');
      setBotResponse('');
    } catch (error) {
      console.error('Error adding chat response:', error);
      alert('Failed to add response');
    }
  };

  return (
    <div>



      {/* Chat Response Form */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">Add Chat Response</h3>
        <form onSubmit={addChatResponse} className="p-3 border rounded shadow-sm" style={{ maxWidth: '500px', margin: 'auto' }}>
          <div className="mb-3">
            <label className="form-label">User Message</label>
            <input type="text" className="form-control" style={{ borderBottom: "1px solid #333", background: "lightblue" }} value={userMessage} onChange={(e) => setUserMessage(e.target.value)} placeholder="Enter user message..." required />
          </div>
          <div className="mb-3">
            <label className="form-label">Bot Response</label>
            <input type="text" className="form-control" style={{ borderBottom: "1px solid #333", background: "lightblue" }} value={botResponse} onChange={(e) => setBotResponse(e.target.value)} placeholder="Enter bot response..." required />
          </div>
          <button type="submit" className="btn btn-success w-100">Save Response</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
