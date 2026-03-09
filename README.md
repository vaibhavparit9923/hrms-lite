# HRMS Lite – Full Stack Employee Management System

## Project Overview

HRMS Lite is a simple Human Resource Management System built as a full-stack application.  
The system allows HR teams to manage employee records and track attendance.

Users can:
- Add new employees
- View employee list
- Delete employees
- Mark employee attendance
- View attendance records for each employee

The project demonstrates a full-stack architecture using FastAPI for backend APIs and React for the frontend interface.

---

## Tech Stack Used

### Frontend
- React
- Vite
- Axios
- JavaScript
- HTML / CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

### Database
- SQLite

### Deployment
- Backend deployed on **Render**
- Frontend deployed on **Vercel**

---

## Project Structure
# HRMS Lite – Full Stack Employee Management System

## Project Overview

HRMS Lite is a simple Human Resource Management System built as a full-stack application.  
The system allows HR teams to manage employee records and track attendance.

Users can:
- Add new employees
- View employee list
- Delete employees
- Mark employee attendance
- View attendance records for each employee

The project demonstrates a full-stack architecture using FastAPI for backend APIs and React for the frontend interface.

---

## Tech Stack Used

### Frontend
- React
- Vite
- Axios
- JavaScript
- HTML / CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

### Database
- SQLite

### Deployment
- Backend deployed on **Render**
- Frontend deployed on **Vercel**

---

## Project Structure
hrms-lite
│
├── backend
│ ├── main.py
│ ├── models.py
│ ├── schemas.py
│ ├── database.py
│ ├── requirements.txt
│ └── hrms.db
│
├── frontend
│ ├── src
│ ├── public
│ ├── package.json
│ └── vite.config.js


## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /employees | Add new employee |
| GET | /employees | Get employee list |
| DELETE | /employees/{emp_id} | Delete employee |
| POST | /attendance | Mark attendance |
| GET | /attendance/{employee_id} | View attendance |

---

### 2️⃣ Backend Setup


cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload

Backend will start at:http://127.0.0.1:8000


Swagger docs:http://127.0.0.1:8000/docs


---

### 3️⃣ Frontend Setup


cd frontend

npm install

npm run dev


Frontend will run at:http://localhost:5173


---

## Assumptions

- Employee ID is unique.
- Attendance is recorded per employee per date.
- SQLite is used for simplicity.

---

## Limitations

- No authentication or login system.
- No role-based access control.
- Minimal UI styling.
- SQLite is used instead of production database.

---

## Deployment Links

Frontend:https://hrms-lite-one-phi.vercel.app


Backend API:https://hrms-lite-jftm.onrender.com/docs