# 🦙 Llama Playground — AI Chat App Powered by Hugging Face LLaMA

![Llama Playground UI](screenshots/App.png)

Llama Playground is a fast, lightweight React app built with **Vite** that allows you to chat with **LLaMA 3.1** models via **Hugging Face Inference API**.
Experiment with AI prompts in real-time, and use it as a foundation for your AI-powered projects.

---

## 🌐 Live Demo

Check out the live app here: [Llama Playground](https://llamplayground.netlify.app/)

Preview video:
[![Watch the Llama Playground Demo](screenshots/App.png)](https://youtu.be/80u5t2CvHeo)
*(Click the image to play the demo video)*


---

## 🚀 Why Llama Playground?

* Lightweight, minimal, and fast
* Interactive AI chat with Hugging Face LLaMA 3.1
* Fully frontend, easy to customize
* Perfect for AI enthusiasts, students, and developers
* Clean modular code structure

---

## 📁 Project Structure

```
llama-playground/
│
├── public/                     # Favicon & static assets
│    └── assets/                # Logos, images, icons
│
├── src/
│    ├── components/            # Reusable UI components
│    │    ├── PromptBox.jsx
│    │    ├── OutputBox.jsx
│    │    └── Navbar.jsx
│    │
│    ├── hooks/                 # Custom React hooks
│    │    └── useLlama.js
│    │
│    ├── services/              # API requests
│    │    └── llamaApi.js
│    │
│    ├── styles/                # Global & utility CSS
│    │    └── globals.css
│    │
│    ├── pages/
│    │    └── Playground.jsx
│    │
│    ├── App.jsx                # Main layout
│    ├── main.jsx               # Entry point
│    └── config.js              # App constants
│
├── screenshots/               # Images & video preview
├── .env                       # Hugging Face API token
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/llama-playground.git
cd llama-playground
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add your Hugging Face API token

Create `.env` file at the project root:

```
VITE_HF_TOKEN=your_token_here
```

Get your token here: [Hugging Face Tokens](https://huggingface.co/settings/tokens)

### 4️⃣ Start the development server

```bash
npm run dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🌱 Future Enhancements

* Dark/light mode toggle
* Multiple AI model selection
* Streaming responses for large prompts
* Chat history + local storage
* Secure backend proxy for API requests
* Mobile-friendly responsive UI
* Custom prompt templates

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!
Feel free to fork this repository and submit PRs.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 👨‍💻 Author

**Sumanth Gunji**
Full-Stack Developer
Passionate about building clean, scalable AI-powered interfaces.
