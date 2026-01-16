'use client'

import { useState } from 'react'
import { MessageCircle, X, Home, MessageSquare, Ticket, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TabType = 'home' | 'chat' | 'tickets'

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; text: string }>>([])

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { sender: 'user', text: message }])
      setMessage('')
    }
  }

  const handleLeaveMessage = () => {
    if (message.trim() && email.trim()) {
      alert(`Message sent to ${email}`)
      setMessage('')
      setEmail('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 rounded-full p-3">
                <MessageCircle size={24} />
              </div>
            </div>
            <h1 className="text-2xl font-bold">Welcome to</h1>
            <h1 className="text-2xl font-bold">LiveChat</h1>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 'home' && (
              <div className="space-y-6">
                {/* Chat Now Section */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      <img
                        src="https://ui-avatars.com/api/?name=Kaia+M&background=e5e7eb&color=374151"
                        alt="Agent"
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">Tom</p>
                      <p className="text-gray-600 text-sm">Hello I am TOM. How may I help you?</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setActiveTab('chat')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
                  >
                    Chat now
                    <Send size={18} />
                  </Button>
                </div>

                {/* Leave Message Section */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={20} className="text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Leave a message</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Please leave a message, and we&apos;ll reply to your email address.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                    <button
                      onClick={handleLeaveMessage}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-lg transition-colors"
                    >
                      Leave a message
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'chat' && (
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4 mb-4">
                  <div className="flex items-start gap-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Kaia+M&background=e5e7eb&color=374151"
                      alt="Agent"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="bg-gray-100 rounded-lg rounded-tl-none px-4 py-2 max-w-[70%]">
                      <p className="text-sm">Hello! How can I help you today?</p>
                    </div>
                  </div>

                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'items-start gap-3'}`}
                    >
                      {msg.sender === 'agent' && (
                        <img
                          src="https://ui-avatars.com/api/?name=Kaia+M&background=e5e7eb&color=374151"
                          alt="Agent"
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div
                        className={`rounded-lg px-4 py-2 max-w-[70%] ${
                          msg.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-tr-none'
                            : 'bg-gray-100 text-gray-900 rounded-tl-none'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="text-center py-12">
                <Ticket size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">No tickets yet</p>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-around">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
                  activeTab === 'home'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Home size={20} />
                <span className="text-xs font-medium">Home</span>
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
                  activeTab === 'chat'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <MessageSquare size={20} />
                <span className="text-xs font-medium">Chat</span>
              </button>
              <button
                onClick={() => setActiveTab('tickets')}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
                  activeTab === 'tickets'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Ticket size={20} />
                <span className="text-xs font-medium">Tickets</span>
              </button>
            </div>
          </div>

          {/* Powered by */}
          <div className="text-center py-2 text-xs text-gray-500">
            Powered by <span className="font-semibold">LiveChat</span>
          </div>
        </div>
      )}
    </>
  )
}
