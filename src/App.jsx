import { useState } from 'react'
import './App.css'

 function App() {
  const[text, settext] = useState("")
const backspace = () => {
  try{
    settext(text.slice(0, -1))
  }catch(error){
    settext("")
  }
  
}

  const calculate =()=>{
    try{
      settext(eval(text))
    }catch(error){
      settext("Error")
    }
  }


  
  return (
    
    <main>
       React ⚛️ + Vite ⚡ + Replit 🌀
      <h1 style={{fontFamily:"monospace", color:"#056605",textAlign:"center"}}> React Calculator</h1>
      <hr/>
     <table>
       <tbody>
        <tr>
            <td colSpan="3"><input type="text" onChange={(e)=>settext(e.target.value)} value={text} id="result"/></td>
            
            <td><input type="button" value="c" onClick={(e)=> backspace()} /> </td>
        </tr>
        <tr>
           
            <td><input type="button" value="1" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
            <td><input type="button" value="2" onClick={(e)=> settext(text+e.target.value)} 
                       /> </td>
            <td><input type="button" value="3" onClick={(e)=> settext(text+e.target.value)}
                        /> </td>
            <td><input type="button" value="/" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
        </tr>
        <tr>
            <td><input type="button" value="4" onClick={(e)=> settext(text+e.target.value)}
                       /> </td>
            <td><input type="button" value="5" onClick={(e)=> settext(text+e.target.value)} 
                       /> </td>
            <td><input type="button" value="6" onClick={(e)=> settext(text+e.target.value)} 
                       /> </td>
            <td><input type="button" value="*"onClick={(e)=> settext(text+e.target.value)} 
                       /> </td>
        </tr>
        <tr>
            <td><input type="button" value="7" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
            <td><input type="button" value="8" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
            <td><input type="button" value="9" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
            <td><input type="button" value="-" onClick={(e)=> settext(text+e.target.value)}
                        /> </td>
        </tr>
        <tr>
            <td><input type="button" value="0" onClick={(e)=> settext(text+e.target.value)}
                        /> </td>
            <td><input type="button" value="." onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
            <td><input type="button" value="=" onClick={(e)=> calculate()}/> </td>
  
            <td><input type="button" value="+" onClick={(e)=> settext(text+e.target.value)} 
                        /> </td>
        </tr></tbody>
    </table>
       <marquee> Created by Uwaoma Cyrus &copy; 2022. All right reserved</marquee>
    </main>
  )
}
export default App