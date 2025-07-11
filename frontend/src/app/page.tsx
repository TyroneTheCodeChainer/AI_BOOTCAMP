import Chat from '@/components/Chat';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🤖 AI Chatbot</h1>
          <p className="text-lg text-gray-600">Your friendly AI assistant - ready to help with anything!</p>
        </div>
        <Chat />
      </div>
    </main>
  );
}
