import LiveChatWidget from '@/components/LiveChat/LiveChatWidget'

export default function LiveChatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      {/* <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">LiveChat Demo</h1>
        <p className="text-lg text-gray-600 mb-8">
          Click the chat button in the bottom right corner to start chatting!
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Live chat with agent</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Leave a message form</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Navigation tabs (Home, Chat, Tickets)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Agent online status indicator</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Responsive design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>Smooth animations</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside">
            <li>Click the blue chat button in the bottom right</li>
            <li>View the Home tab to see agent info and options</li>
            <li>Click "Chat now" to start a conversation</li>
            <li>Or fill in the "Leave a message" form</li>
            <li>Navigate between tabs using the bottom menu</li>
          </ol>
        </div>
      </div> */}

      {/* LiveChat Widget */}
      <LiveChatWidget />
    </div>
  )
}
