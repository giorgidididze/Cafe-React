import React, {useState} from 'react';

function Comment({Getpost}) {
  const [title, setTitle]=useState('')
  const [numb, setNumb]=useState('')
  const [desc, setDesc]=useState('')
  const [text, setText]=useState('')
  const [show, setShow]=useState(false)
 
  const titleHandler=(e)=>{
    setTitle(e.currentTarget.value)
}
const numbHandler=(e)=>{
  setNumb(e.currentTarget.value)
}
const DescHandler=(e)=>{
    setDesc(e.currentTarget.value)
}
const TextHandler=(e)=>{
    setText(e.currentTarget.value)
}

const SubmitHandler=(e)=>{
    e.preventDefault()
    setShow(true)
    let postObj={
        title:title,
        numb:numb,
        desc:desc,
        text:text,
    }
    Getpost={postObj}
  }

 


  return (
    <>
    <div className='container'>
    <div className='content'>
    <p className='para'><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <form action="#" method='post' onSubmit={SubmitHandler}>
    <p><input className="input-border" type="text" placeholder="Name" required name="Name" onChange={titleHandler}/></p>
    <p><input className="input-border" type="number" placeholder="How many people" required name="People" onChange={DescHandler}/></p>
    <p><input className="input-border" type="datetime-local" max="2999-12-31" defaultValue={`2020-03-13 18:22`} placeholder="Date and time" required onChange={numbHandler} /></p>
    <p><textarea className="input-border" type="text" placeholder="Message \ Special requirements" required name="Message" onChange={TextHandler}/></p>
    <p><button className="button-black" type="submit" >SEND MESSAGE</button></p>
    </form>
    </div>
    </div>
 {show ===true ?(
     <div className='kurs'>
      <div className='numberclas'>
        
           <div>
           <h2>{numb}</h2>
           <h2>{title}</h2>
           <h3>{desc}</h3>
           <p>{text}</p></div></div>
    </div>
 ):(
  <p></p>
 )
}
    </>
  )
}

export default Comment
