import { useState, useEffect } from "react";
import axios from "axios";
import "./Student.css"


function Student() {
  const [Student, setStudent] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/student/")
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="student">
 <h1>Student_Record</h1>
      {Student.map((str) => (
       <div key={str.id} className="record">
  <img src={str.resume}/>
 <div className="card-content">
  <h2>{str.name}</h2>
  <p>👤 Last Name: {str.lastname}</p>
  <p>🎂 Age: {str.age}</p>
  <p>📧 Email: {str.email}</p>
  <p>📱 Phone: {str.phone}</p>
  <p>💰 Fees: ₹{str.fees}</p>
  <button>Register Now</button>
</div>
</div>
      ))}
    </div>
  );
}
export default Student;