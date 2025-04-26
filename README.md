
---


# Fullstack Task Frontend (React.js + TypeScript + Tailwind CSS)

This is the frontend for the Fullstack To-Do List Application.

It communicates with the backend via HTTP and shows a responsive UI.

---

## 📦 Tech Stack

- React.js (Vite + Typescript)
- Axios (for API calls)
- Tailwind CSS (for styling)
- React Hooks (for state management)

----

## 🛠 Functionalities
- Add New Tasks via MQTT connection to /add topic.
- Fetch All Tasks using /fetchAllTasks API.
- Responsive Design for mobile, tablet, and desktop.
- Reusable Components:
    - Task Item
    - Add Task Form

----

## 🛠 Functionalities

- /add MQTT topic:
    - Publishes new tasks.
    - Stores tasks in Redis cache under key FULLSTACKTASK<YOUR_FIRST_NAME>.
    - If tasks > 50, moves them to MongoDB and clears Redis.

-GET /fetchAllTasks HTTP Endpoint:
    - Fetches all tasks (combination from Redis and MongoDB).