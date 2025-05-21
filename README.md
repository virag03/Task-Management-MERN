# Task Management Web Application (MERN Stack)
![Task1](https://github.com/user-attachments/assets/f7bdc3f8-21c9-46a2-aed3-e6d1214e1e80)

## 📘 Project Description

A full-featured Task Management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to:

- Create, view, update, and delete tasks
- Track task status (Pending, In Progress, Completed)
- Manage tasks through an intuitive interface
- Access data via RESTful API endpoints

## 🛠 Technology Stack

### Frontend
- React.js
- React Router
- Axios for API communication
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- REST API architecture

### Development Tools
- Git for version control
- Postman for API testing
- dotenv for environment variables

## ▶️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   npm install
   ```

2. Install Dependencies
   ```bash
   npm install
   ```

3. Create .env file:
   ```bash
   MONGO_URI=mongodb://localhost:27017/taskmanager
   PORT=5000
   ```
4. Start server:
    ```bash
   npm start
    ```

### Frontend Setup

1. Navigate to frontend directory:
    ```bash
   cd frontend
    ```
    
2. Install dependencies: 
    ```bash
   npm install
    ```
    
3. Start development server:
    
    ```bash
   npm start
    ```
    

The application will be available at `http://localhost:3000`.

## 📡 API Documentation

**Base URL:** `http://localhost:5000`

| Method | Endpoint | Description | Request Body |
| --- | --- | --- | --- |
| GET | /tasks | Get all tasks | None |
| POST | /tasks | Create new task | `{ title, description, status }` |
| PUT | /tasks/:id | Update existing task | `{ title, description, status }` |
| DELETE | /tasks/:id | Delete task | None |

### Task Schema

```json
{
  "title": "String (required)",
  "description": "String (optional)",
  "status": "String (enum: ['Pending', 'In Progress', 'Completed'])",
  "createdAt": "Date (auto-generated)",
  "updatedAt": "Date (auto-generated)"
}

```
