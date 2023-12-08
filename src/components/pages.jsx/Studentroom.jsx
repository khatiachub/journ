import React, { useState } from 'react'
import { days, students, subjects, weeks } from '../data'
import { useParams } from 'react-router-dom'
import Table from './Table'


export default function Studentroom() {
    
  const params=useParams()
  const filtered=students.filter((student)=>(student.studentId==params.id))
  const[state,setState]=useState({
      week:'',
      day:'',
      grade:null,
      subject:''
    })
  const handleFilter=(e)=>(
      setState({...state,[e.target.name]:e.target.value})
    )


    const filteredweek=filtered&&filtered.map((week)=>(week.weeks.filter((week)=>(week.week===state.week))))
    const filtereddays=filteredweek[0]&&filteredweek[0].map((days)=>(days.days.filter((day)=>(day.day===state.day))))
    const filteredgrade=filteredweek&&filtereddays[0]&&filtereddays[0].map((subject)=>(subject.subject))
   
  console.log(filteredgrade);
  // const pushgrades=filteredgrade&&filteredgrade[0].map((grade)=>(grade.grade))

const addGrade=()=>{
  if(state.week&&state.day){
    const choosesub=filteredgrade&&filteredgrade[0].filter((subject)=>(subject.sub===state.subject))
    const pushgrades=choosesub&&choosesub.map((grade)=>(grade.grade))
    pushgrades[0].push(state.grade)
    console.log(pushgrades);
    console.log(choosesub);

  }
}
   
  return (
      <div>
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

      <label >ქულის დამატება</label>
      <div className='addgrade'>
      <input type='number' style={{border:'none'}} name='grade' onChange={(e)=>handleFilter(e)}/>
      <button onClick={addGrade}>დამატება</button>
      <select name='subject' onChange={(e)=>handleFilter(e)}>
        <option>საგანი</option>
        {subjects.map((sub)=>(
           <option   key={sub.subjectId}>{sub.subject}</option>
           ))}
      </select>
      </div>
     {filtered.map((students)=>(
        <h2>{students.name}</h2>
    ))}

<Table
      filteredgrade={filteredgrade}
      filteredweek={filteredweek}
      week={state.week}
      day={state.day}
     />
    </div>
  )
}


