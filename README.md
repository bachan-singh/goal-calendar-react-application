# Goal Calendar Web Application

The **Goal Calendar Web Application** is a robust tool designed to help users manage their goals effectively. With an intuitive interface and advanced functionality, it facilitates goal setting, tracking, and monitoring across personal and professional domains. Built using a modern tech stack, the application ensures reliability, responsiveness, and scalability.

This application integrates a React frontend with a Node.js backend and a MySQL database, delivering a full-stack experience. It is developed with a user-centric approach, focusing on usability and accessibility.

---

## Features Overview

The Goal Calendar Web Application combines functionality and simplicity to provide users with an effective tool for goal management. Users can create, edit, and delete goals while assigning them to specific dates in an interactive calendar. The calendar allows users to visualize their schedules with color-coded categorizations and flexible views, including monthly, weekly, and daily formats.

Additionally, the application supports configurable notifications and reminders to keep users on track. A dynamic dashboard offers insightful analytics, showcasing the progress of completed and pending goals through charts and statistics. Secure user authentication and role-based access further enhance its capabilities. With a responsive design and compatibility across devices, the application ensures accessibility for all users.

---

## Technology Stack

### Frontend
The application’s frontend is powered by **React**, ensuring a dynamic and responsive user interface. 
- **React Router** is utilized for seamless navigation between pages.
- State management is efficiently handled through **Redux** or the **Context API**.
- API interactions are facilitated by **Axios**, while styling is implemented using **CSS Modules** or **Tailwind CSS**, ensuring a polished and responsive design.

### Backend
The backend, built on **Node.js**, uses **Express.js** to handle RESTful API development.
- **MySQL** serves as the database, providing a robust and relational structure for storing user and goal data.
- Security is prioritized with **BCrypt** for password hashing and **JSON Web Tokens (JWT)** for authentication.
- **Dotenv** is employed for managing environment variables, enhancing configuration security.

### Libraries and Tools
- **FullCalendar**: An advanced library for creating the calendar interface, supporting event rendering and drag-and-drop functionality.
- **Chart.js**: Used for creating progress charts on the dashboard.
- **Postman**: Facilitated API testing and debugging.
- **Git**: Enabled version control and collaborative development.
- **ESLint & Prettier**: Maintained code quality and formatting consistency.

---

## Insights and Learnings
Developing this application provided a hands-on experience with the full development lifecycle, from design to deployment. Key learnings include:

### Full-Stack Development
Integrating a React frontend with a Node.js backend highlighted the importance of seamless communication between client and server through REST APIs.

### State Management
Managing complex application state using Redux and Context API deepened the understanding of global state management and its impact on user interface consistency.

### Responsive and Accessible Design
Designing layouts compatible across devices and ensuring accessibility reinforced the importance of user-centric development.

### API Development
Designing and integrating RESTful APIs required careful planning and debugging, ensuring reliable communication between the client and server.

---

## Installation and Setup

The Goal Calendar Web Application can be set up locally by following these steps:

### Prerequisites
Ensure the following are installed:
- Node.js (v16 or later)
- MySQL Server
- Git

### Steps
1. Clone the repository using Git:
   ```bash
   git clone https://github.com/bachan-singh/goal-calendar-webapp.git
   cd goal-calendar-webapp
   ```
2. Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```bash
   cd ../server
   npm install
   ```
4. Configure the database:
   - Create a MySQL database.
   - Add your database credentials in the `.env` file located in the server directory:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=
     DB_NAME=goal_calendar
     ```
5. Start the backend server:
   ```bash
   npm run dev
   ```
6. Start the frontend application:
   ```bash
   cd ../client
   npm start
   ```

---

## Future Scope

While the current version offers a comprehensive solution, several enhancements are planned for future iterations. These include adding goal prioritization, enabling social sharing of goals and achievements, building a mobile application using React Native, implementing offline capabilities through service workers, and supporting multiple languages for global accessibility.


