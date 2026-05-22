# 🚀 AI Support CRM

AI Support CRM is a modern AI-powered customer support SaaS platform built using React, TypeScript, Node.js, Express, MongoDB and Gemini AI.

This project was created to provide a complete support desk solution where users can:

* Create and manage support tickets
* Use an AI chatbot assistant
* Manage customers
* Authenticate users securely
* View dashboard analytics
* Use a floating AI support widget
* Experience a modern SaaS-style CRM interface

---

# 🌟 Main Features

## 🤖 AI Assistant

* Floating AI Chat Widget
* AI Assistant Page
* Smart AI replies
* Gemini AI integration ready
* ChatGPT-style UI

## 🎫 Ticket Management

* Create Ticket
* View All Tickets
* Single Ticket Details Page
* Ticket Status Handling
* CRM Workflow

## 🔐 Authentication System

* Login Page
* Registration Page
* Reset Password
* New Password Setup
* JWT Authentication
* Protected Routes

## 👥 Customer Management

* Customer List
* CRM Customer Handling
* Dashboard Integration

## 📊 Dashboard

* CRM Dashboard UI
* Analytics Overview
* Ticket Statistics
* Protected Dashboard Layout

## 🌐 Landing Page

* Modern SaaS Design
* Floating AI Assistant
* Responsive UI
* Company Style Interface

---

# 🛠️ Complete Tech Stack

## Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React            | Frontend UI Library     |
| TypeScript       | Type Safety             |
| React Router DOM | Routing System          |
| React Hot Toast  | Notifications           |
| React Icons      | Icons                   |
| CSS              | Styling                 |
| Vite             | Fast Development Server |

---

## Backend

| Technology | Purpose               |
| ---------- | --------------------- |
| Node.js    | Backend Runtime       |
| Express.js | Backend Framework     |
| MongoDB    | Database              |
| Mongoose   | MongoDB ODM           |
| JWT        | Authentication        |
| bcryptjs   | Password Hashing      |
| dotenv     | Environment Variables |
| cors       | Cross-Origin Requests |
| nodemon    | Auto Restart Server   |

---

# 📦 Dependencies Installed

## Frontend Dependencies

```bash
npm install react-router-dom
npm install react-hot-toast
npm install react-icons
npm install axios
```

---

## Backend Dependencies

```bash
npm install express
npm install mongoose
npm install cors
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
npm install nodemon
```

---

# 📂 Project Structure

```bash
ai-support-crm/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── src/
│   ├── components/
│   │   ├── ChatBot/
│   │   ├── CreateTicket/
│   │   ├── ProtectedRoute/
│   │   └── TicketTable/
│   │
│   ├── pages/
│   │   ├── LandingPage/
│   │   ├── Dashboard/
│   │   ├── Login/
│   │   ├── Registration/
│   │   ├── Customers/
│   │   ├── TicketDetails/
│   │   └── AIAssistant/
│   │
│   ├── layouts/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── README.md
└── vite.config.ts
```

---

# ⚙️ Full Setup Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/ai-support-crm.git
```

---

## 2️⃣ Open Project Folder

```bash
cd ai-support-crm
```

---

# ▶️ Frontend Setup

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ▶️ Backend Setup

## Move Into Backend Folder

```bash
cd backend
```

## Install Backend Dependencies

```bash
npm install
```

## Run Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

---

# 🧠 Main Pages Overview

## Landing Page

Purpose:

* Public SaaS homepage
* Marketing page
* AI chatbot widget access

Contains:

* Hero section
* Feature sections
* Navigation
* Floating AI widget

---

## Dashboard

Purpose:

* Main CRM dashboard after login

Contains:

* Ticket overview
* Statistics
* Customer insights

---

## Create Ticket

Purpose:

* Create support tickets

Contains:

* Ticket form
* CRM workflow

---

## Tickets Page

Purpose:

* Show all tickets

Contains:

* Ticket table
* Status management
* Ticket listing

---

## Ticket Details

Purpose:

* Show individual ticket information

Contains:

* Ticket description
* Ticket status
* Customer details

---

## Customers Page

Purpose:

* CRM customer management

Contains:

* Customer list
* CRM records

---

## AI Assistant

Purpose:

* Dedicated AI support assistant page

Contains:

* AI chat interface
* AI replies
* Assistant UI

---

# 🤖 Floating AI Widget

The project includes a floating chatbot widget.

Features:

* Floating button
* Open/close chatbot
* Glassmorphism UI
* ChatGPT-style design
* User & AI messages
* Enter key support

Files:

```bash
src/components/ChatBot/ChatBot.tsx
src/components/ChatBot/ChatBot.css
```

---

# 🔒 Authentication Flow

Authentication uses JWT.

Protected pages:

* Dashboard
* Customers
* Tickets
* AI Assistant

ProtectedRoute component checks login status before rendering pages.

---

# 💾 Database

Database used:

```bash
MongoDB Atlas
```

Main collections may include:

* users
* tickets
* customers
* chats

---

# 🚀 Deployment Plan

## Frontend

Recommended:

* Vercel
* Netlify

## Backend

Recommended:

* Render
* Railway

## Database

Recommended:

* MongoDB Atlas

---

# 🔥 Future Improvements

Planned features:

* Socket.io Realtime Chat
* Typing Animation
* AI Memory
* Voice Assistant
* Email Notifications
* File Uploads
* Team Collaboration
* Admin Panel
* Live Analytics
* Dark/Light Theme Toggle
* AI Ticket Automation
* Notification System

---

# 🧑‍💻 Developer Notes

If another developer continues this project:

1. First install frontend and backend dependencies.
2. Configure `.env` variables.
3. Run frontend and backend separately.
4. Check MongoDB connection.
5. Ensure JWT secret exists.
6. AI features can later connect to Gemini API.
7. Floating chatbot component is globally added in `App.tsx`.
8. ProtectedRoute handles dashboard security.

---

# 👩‍💻 Author

Built with ❤️ by Shifa

---

# 📄 License

MIT License
