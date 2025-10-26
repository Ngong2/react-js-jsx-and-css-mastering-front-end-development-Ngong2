
React Task Manager

A full-stack task management application built with React, Node.js, Express, and MongoDB. This app allows users to create, view, update, and delete tasks with real-time persistence.

🌐 Live Demo

https://task-managers-6not.onrender.com/

🛠 Features

Create, read, update, and delete tasks

Persistent storage with MongoDB Atlas

Responsive design for desktop and mobile

Cross-origin support for deployed frontend

Clean and modern UI built with React and CSS

💻 Tech Stack

Frontend: React, JSX, CSS

Backend: Node.js, Express

Database: MongoDB Atlas

Hosting: Render (backend)

Version Control: Git & GitHub

🚀 Installation & Setup
1. Clone the Repositories

Frontend:

git clone https://github.com/Ngong2/react-js-jsx-and-css-mastering-front-end-development-Ngong2.git
cd react-task-manager
npm install


Backend:

git clone https://github.com/Ngong2/wk3backend.git
cd wk3backend
npm install

2. Configure Environment Variables

Create a .env file in the backend directory (wk3backend) with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
ALLOWED_ORIGIN=https://task-managers-6not.onrender.com
NODE_ENV=production


Replace your_mongodb_connection_string with your actual MongoDB Atlas connection URI.

3. Start the Backend
npm run dev


The backend API will run on http://localhost:5000 (or the deployed Render URL).

4. Start the Frontend
npm run dev


The frontend React app will run on http://localhost:5173 (or your chosen host).

5. Connect Frontend & Backend

Ensure the VITE_API_URL in react-task-manager/.env points to your backend:

VITE_API_URL=http://localhost:5000/api/tasks


For production:

VITE_API_URL=https://wk3backend.onrender.com/api/tasks

📦 Usage

Open the app in your browser.

Add a new task using the form.

View all tasks in the list.

Edit or delete tasks directly from the UI.

All changes are saved to MongoDB Atlas.

⚙️ API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update a task by ID
DELETE	/api/tasks/:id	Delete a task by ID



🤝 Contributing

Contributions are welcome!

Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes

Commit your changes (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Open a pull request

📄 License

This project is open-source under the MIT License.
