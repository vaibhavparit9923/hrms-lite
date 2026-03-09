from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

import models, schemas
from database import SessionLocal, engine

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # Vercel frontend allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database tables create
models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/employees")
def add_employee(emp: schemas.EmployeeCreate, db: Session = Depends(get_db)):
    employee = models.Employee(
        employee_id=emp.employee_id,
        name=emp.name,
        email=emp.email,
        department=emp.department
    )

    db.add(employee)
    db.commit()
    db.refresh(employee)

    return employee

@app.get("/")
def home():
    return {"message": "HRMS Lite API Running"}

@app.get("/employees")
def get_employees(db: Session = Depends(get_db)):
    return db.query(models.Employee).all()

@app.delete("/employees/{emp_id}")
def delete_employee(emp_id: int, db: Session = Depends(get_db)):

    employee = db.query(models.Employee).filter(models.Employee.id == emp_id).first()

    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")

    db.delete(employee)
    db.commit()

    return {"message": "Employee deleted"}

@app.post("/attendance")
def mark_attendance(att: schemas.AttendanceCreate, db: Session = Depends(get_db)):

    attendance = models.Attendance(
        employee_id=att.employee_id,
        date=att.date,
        status=att.status
    )

    db.add(attendance)
    db.commit()
    db.refresh(attendance)

    return attendance

@app.get("/attendance/{employee_id}")
def get_attendance(employee_id: str, db: Session = Depends(get_db)):

    return db.query(models.Attendance).filter(
        models.Attendance.employee_id == employee_id
    ).all()