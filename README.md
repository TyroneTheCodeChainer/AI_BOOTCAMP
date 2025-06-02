# AI Chatbot

A modern AI chatbot built with Next.js and FastAPI.

## Features

- Real-time chat interface
- OpenAI GPT-3.5 integration
- Modern UI with Tailwind CSS
- TypeScript support
- Secure API key handling

## Prerequisites

- Node.js 18+ and npm
- Python 3.8+
- OpenAI API key

## Setup

### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file:
   ```
   OPENAI_API_KEY=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
   ```

5. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Backend Deployment

1. Deploy the FastAPI backend to a service like Render, Railway, or Fly.io.
2. Update the API endpoint in the frontend code to point to your deployed backend.

### Frontend Deployment

1. Deploy the Next.js frontend to Vercel:
   ```bash
   npm run build
   ```

2. Push your code to GitHub and connect it to Vercel for automatic deployments.

## Environment Variables

### Backend
- `OPENAI_API_KEY`: Your OpenAI API key

### Frontend
- `NEXT_PUBLIC_API_URL`: Your deployed backend URL (default: http://localhost:8000)

## License

MIT 