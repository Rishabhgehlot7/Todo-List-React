import React from 'react'

export default function ToDO(props) {
  return (
    <div className='py-3'>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}
