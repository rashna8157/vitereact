import icon from'./images/pubg.jpg'
import './css/style.css'

function Headerpage(){
    return(
        <>
        <h1 className='title'>HeaderPage</h1>
        <p>
           page this created in jsx 
        </p>
        <img src={icon} className='img' alt=""width="200"height="200"/><br></br>
        </>
    )
}
export default Headerpage;








