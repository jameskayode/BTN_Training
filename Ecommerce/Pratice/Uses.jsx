import {useState} from 'react'


const Uses = () => {
    const handleClick = () => {
        setCount(Count + 1)
    }
    const DhandleClick=()=>{
        setCount(Count-1)
    }

    const textchange = (e) => {
       setText(e.target.value) 
    }
   
    const [Count, setCount] = useState(0)
    const [text, setText] = useState("James")
  return (
      <div>

     <button onClick={DhandleClick}>Decrement</button> 

        <span>{Count}</span>

     <button onClick={handleClick}>Increment</button> 
     <input type="text" name="" id="" onChange={textchange} placeholder='Enter your name'/>
    {text}
    </div>
  )
}

export default Uses
