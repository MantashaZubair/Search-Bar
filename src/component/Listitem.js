import React from 'react'


import "./Listitem.css"

export default function Listitem(props) {
  const Data=props.items
  return (
    <div className='list' >
     
      {Data.filter((item)=>{
        if(props.query===''){
            return item
        }else if (item.title.toLowerCase().includes(props.query.toLowerCase())){
          return item ; 
        }else if(item.id.toString().includes(props.query.toString())){
            return item;
        }else if(item.userId.toString().includes(props.query.toString())){
            return item;
        }

      }).map((item)=>(
        <div className='listbox' key={item.id}>
        <p>userId: {item.userId}</p>
        <p>Id : {item.id}</p>
        <p>Title : {item.title}</p>
        <p>Body: {item.body}</p>
        </div>
      ))}
     </div>  
  )
}
