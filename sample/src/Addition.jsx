
import {useState} from 'react'
import{button} from 'react-bootstrap'

function Addition(){
    const[num1,setNum1] = useState(0)
    const[num2,setNum2]= useState(0)
    return(
        <>
        <form>
        <br/>
        <input type="text"name="num1"id=""placeholder="Enter num1"
        onChange={
            (e)=>{setNum1(e.target.value)}

        }></input><br></br>
        {num1}
        <input type="text"name="num1"id=""placeholder="Enter num2"
        onChange={
            (e)=>{setNum2(e.target.value)}

        }></input><br></br>
        {num2}
        
        <Button
        varient='danger'
        onClick={(e)=>{
            let sum;
            sum= Number(num1)+Number(num2)
            alert(sum)
        }}
        className="button">Add</Button>
        </form>
        </>
    )
}
export default Addition;