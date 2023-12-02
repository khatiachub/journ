import React, { useState } from 'react'
import { days, grades, students, subjects, weeks } from './data'
import '../App.css'



export default function Journal() {

  const[state,setState]=useState({
    name:'',
    subject:'',
    week:'',
    day:'',

  })
  const handleFilter=(e)=>(
    setState({...state,[e.target.name]:e.target.value})
  )

  const filtered=grades.filter((grade)=>(
   (grade.name===state.name)&&(grade.week===state.week)&&(grade.subject===state.subject)&&(grade.day===state.day)
  ))
  console.log(filtered);
  console.log(state.name);
    
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
      </div>
      <div className='subject'>
      <p >მოსწავლე</p>
      <select name='name'  onChange={(e)=>handleFilter(e)}>
      <option >მოსწავლე</option>
        {students.map((student)=>(
          <>
          <option key={student.studentId}>{student.name}</option>
          </>
        ))}
      </select>
      </div>
     <div className='subject'>
     <p>კვირა</p>
      <select name='week' onChange={(e)=>handleFilter(e)}>
      <option>კვირა</option>
        {weeks.map((week)=>(
          <option key={week.id}>{week.week}</option>
        ))}
      </select>
     </div>
     <div className='subject'>
     <p>დღე</p>
      <select name='day' onChange={(e)=>handleFilter(e)}>
      <option>დღე</option>
        {days&&days.map((day)=>(
          <option key={day.dayId}>{day.day}</option>
        ))}
      </select>
     </div>

    
    </div>
    <div style={{display:'flex',flexDirection:'column', marginLeft:80, marginTop:30}}>
    <p>{state.name}</p>
     <p>{state.subject}</p>
     <p>{state.week}</p>
     <p>{state.day}</p>
     {filtered.map((grade)=>(
        <p>{grade.grade} ქულა</p>
      ))}    </div>
    </>
  )
}
