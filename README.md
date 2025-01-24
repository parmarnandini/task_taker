React To-Do Application

Description
This is an advanced React-based To-Do application featuring task management, a responsive design, API integration, and user authentication. It demonstrates the use of React, Redux Toolkit, and modern JavaScript features for scalable and maintainable applications.

Features
🌟 Core Functionalities
Add Task: Add new tasks with priorities and due dates.
View Tasks: Display tasks sorted by priority and due date(user can see remaining time to complete the task)
Delete Task: Remove tasks easily with a delete button.
Persistent Storage: Tasks and user sessions are saved in localStorage.

🔒 User Authentication
Simulated login/logout functionality using Redux.
To-Do list visibility is restricted to authenticated users.

🌐 API Integration
Fetch and display daily news using the News API (as reading daily news feature matches the todo app.)
Error handling for API requests ensures smooth functionality.

📱 Responsive Design
Fully responsive for mobile, tablet, and desktop using Flexbox and CSS Grid.
Mobile-first design approach.

🛠️ Advanced State Management
State management with Redux Toolkit.
Handling asynchronous actions like API calls using Redux Thunk.

Technologies Used
Frontend: ReactJS, JavaScript, Redux Toolkit
Styling: CSS, Flexbox, Bootstrap
API Integration: News API
Build Tool: Vite
State Management: Redux with Thunk middleware


Getting Started - 
Installation
Clone the repository:
git clone https://github.com/parmarnandini/task_taker.git  
cd task_taker  

Install dependencies:
npm install  

Create a .env file and add your API key:
VITE_API_KEY=your_api_key_here  

Start the development server:
npm run dev  

