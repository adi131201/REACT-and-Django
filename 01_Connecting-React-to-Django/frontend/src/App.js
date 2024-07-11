import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const[students, setStudents] = useState([])


  useEffect(()=>{
    async function getAllStudents(){
      try{
        const students = await axios.get("http://127.0.0.1:8000/student/")
        console.log(students.data)
        setStudents(students.data)
      } catch (error){
        console.log(error)
      }
    }
    getAllStudents()
  }, [])


  return (
    <div className="App">
      <h1>Connect REACT JS to Django.</h1>
      {
        students.map((student, i)=>{
          return(
            <h3 key={i}> {student.name} | {student.email}</h3>
          )
        })
      }
    </div>
  );
}

export default App;
