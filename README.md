<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading"> 🤖 Public AI Chatbot</h1>

## 🚀 Deploy Your Own Public AI Chatbot

This repository contains a fully functional AI chatbot that anyone can use without needing their own API keys! The chatbot features a beautiful Next.js frontend and a FastAPI backend powered by OpenAI's GPT-4o-mini model.

### ✨ Features

- **Public Access**: Anyone can use the chatbot without API keys
- **Real-time Streaming**: Responses stream in real-time for a smooth experience
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Server-side API Key**: Secure backend handling of OpenAI API calls
- **Cost Control**: Built-in token limits and error handling
- **Deploy Anywhere**: Easy deployment to Vercel, Railway, or any platform

### 🏗️ Architecture

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Backend**: FastAPI with Python 3.9+
- **AI Model**: OpenAI GPT-4o-mini
- **Deployment**: Vercel (recommended) or any cloud platform

### 🚀 Quick Deploy to Vercel

#### Step 1: Fork and Clone

1. Fork this repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/The-AI-Engineer-Challenge.git
   cd The-AI-Engineer-Challenge
   ```

#### Step 2: Set Up OpenAI API Key

1. Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. You'll need to add this as an environment variable during deployment

#### Step 3: Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy your application:
   ```bash
   vercel
   ```

3. During deployment, Vercel will ask you to:
   - Link to your GitHub repository
   - Set up environment variables
   - Configure build settings

4. **Important**: Add this environment variable in Vercel:
   - **Name**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-`)

#### Step 4: Configure Environment Variables

In your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

#### Step 5: Update API URL

After deployment, update the frontend to use your deployed API:

1. In your Vercel dashboard, copy your deployment URL
2. In the frontend code, update the API URL in `frontend/src/components/Chat.tsx`:
   ```typescript
   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-app.vercel.app';
   ```

3. Add this environment variable to Vercel:
   ```
   NEXT_PUBLIC_API_URL=https://your-app.vercel.app
   ```

### 🔧 Local Development

#### Prerequisites

- Python 3.9+
- Node.js 18+
- OpenAI API key

#### Backend Setup

1. Navigate to the API directory:
   ```bash
   cd api
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

4. Set your OpenAI API key:
   ```bash
   export OPENAI_API_KEY=sk-your-api-key-here
   ```

5. Run the backend:
   ```bash
   python app.py
   ```

The backend will be available at `http://localhost:8000`

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

### 🌐 Usage

Once deployed, anyone can:

1. Visit your chatbot URL
2. Start chatting immediately - no signup or API key required
3. Ask questions, get help, or just have a conversation
4. Use the "New Chat" button to start fresh conversations

### 💰 Cost Management

The chatbot includes several cost-control measures:

- **Token Limits**: Responses are limited to 1000 tokens
- **Model Selection**: Uses GPT-4o-mini (cost-effective)
- **Error Handling**: Graceful handling of API limits and errors
- **Rate Limiting**: Built-in protection against abuse

### 🔒 Security Features

- **Server-side API Key**: API key is never exposed to the frontend
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: All user inputs are validated
- **Error Sanitization**: Sensitive information is not exposed in errors

### 🛠️ Customization

#### Changing the AI Personality

Edit the system message in `api/app.py`:
```python
system_message: Optional[str] = "You are a helpful, friendly, and knowledgeable AI assistant..."
```

#### Modifying the UI

The frontend uses Tailwind CSS and is fully customizable. Main files:
- `frontend/src/components/Chat.tsx` - Main chat interface
- `frontend/src/app/page.tsx` - Landing page
- `frontend/src/app/globals.css` - Global styles

#### Adding Features

- **User Authentication**: Add login/signup functionality
- **Chat History**: Implement database storage for conversations
- **File Upload**: Add document processing capabilities
- **Voice Input**: Integrate speech-to-text functionality

### 🐛 Troubleshooting

#### Common Issues

1. **API Key Not Set**: Ensure `OPENAI_API_KEY` is set in your environment variables
2. **CORS Errors**: Check that the frontend URL is allowed in the backend CORS settings
3. **Deployment Failures**: Verify all environment variables are set in Vercel
4. **Rate Limiting**: The chatbot includes built-in rate limiting to prevent abuse

#### Getting Help

- Check the Vercel deployment logs for backend errors
- Monitor your OpenAI API usage in the OpenAI dashboard
- Review the browser console for frontend errors

### 📈 Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **OpenAI Usage**: Monitor API usage in your OpenAI dashboard
- **Error Tracking**: Check Vercel function logs for backend issues

### 🎉 Success!

Once deployed, you'll have a fully functional public AI chatbot that anyone can use! Share your URL and watch people start chatting with your AI assistant.

### 📝 License

This project is open source and available under the MIT License.

---

**Happy Chatting! 🤖✨**
