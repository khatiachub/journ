import React, { useEffect, useState } from 'react'
import { days, subjects, weeks,students } from './data'
import '../App.css'
import { Link } from 'react-router-dom'



export default function Journal() {

  const[state,setState]=useState({
    name:'',
    week:'',
    day:'',
    studentname:'',
  })
  const filteredSubject=subjects.filter((subject)=>(state.subject===subject.subject))
  const subj=filteredSubject.map((subject)=>(subject.subjectId))
  console.log(subj);

  const handleFilter=(e)=>(
    setState({...state,[e.target.name]:e.target.value})
  )

    // const filtered=grades.filter((grade)=>(
    //   (grade.name===state.name)&&(grade.week===state.week)&&(grade.subject===state.subject)&&(grade.day===state.day)
    //  ))
  
    



  const addGrade=()=>{
    grades.push(state)
    console.log(grades)
  }
  const addStudent=()=>{
    grades.push(state)
    console.log(grades);
  }

  return (
    <>
    <div className='wraper'>
      <div className='subject'>
      <p>საგანი</p>
      <select name='subject' onChange={(e)=>handleFilter(e)}>
      <option>საგანი</option>
        {subjects.map((subject)=>(
          <option key={subject.subjectId}>{subject.subject}</option>
        ))}
      </select>
      <input name='subjectId' onChange={(e)=>handleFilter(e)} value={subj[0]}/>
      </div>
      <div className='subject'>
      <p >მოსწავლე</p>
      <select name='name'  onChange={(e)=>handleFilter(e)}>
      <option >მოსწავლე</option>
        {/* {grades.map((student,i)=>(
          <>
          <option key={i}>{student.name}</option>
          </>
        ))} */}
      </select>
      </div>
    
    
    
    </div>
    
    <div>
      <input name='studentname' onChange={(e)=>handleFilter(e)} type="text" placeholder='მოსწავლე'/>
      <button onClick={addStudent}>ახალი სტუდენტის დამატება</button>
      <input name='grade' onChange={(e)=>handleFilter(e)} type='text' placeholder='ქულა'/>
      <button onClick={addGrade}>ქულის დამატება</button>
    </div>



    <div>
      {students.map((student)=>(
        <>
        <Link key={student.studentId} to={`/student/${student.studentId}`} className='list'>{student.name}</Link>
        </>
      ))}
    </div>
   

    </>
  )
}
