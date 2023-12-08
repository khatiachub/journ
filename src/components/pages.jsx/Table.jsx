import React from 'react'
import { subjects } from '../data'




export default function Table(props) {
  return (
    <div>
       <table>
      <thead>
        <tr>
          <th>საგანი</th>
          <th>ქულა</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{border:'none'}}>
           {subjects.map((sub)=>(
           <td style={{display:'flex',flexDirection:'column',borderTop:'none',borderRight:'none',padding:12}}  key={sub.subjectId}>{sub.subject}</td>
           ))} 
           </td>
           <td style={{border:'none'}}>
           {props.week&&props.day?
           <>
           {props.filteredgrade&&props.filteredgrade[0].map((grade,i)=>(
           <td style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'baseline',borderTop:'none',padding:13.5}}  key={i}>{grade.grade.map((grade)=>(grade))}</td>
           ))}
           </>
            :''}
            </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}
