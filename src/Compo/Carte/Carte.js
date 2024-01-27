import './Carte.css'
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";




const Carte = (props) => {
  return (
    <div> <div className='most-popular-item'>
    <div className='card-wrapper'>
           <img className='most-popular-image' src={props.image}/>
           <div className='most-popular-item-centent'>
            <h4 className='most-popular-item-title'>
              {props.title} <br/>
              <span>{props.categorie}</span>
              </h4>
              <ul>
                <li><span style={{"color":'yellow'}}><FaStar /></span><span> {props.rate}</span></li>
                <li><span style={{"color":'#ec6090'}}><FaDownload /></span><span> {props.download}</span></li>
              </ul>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Carte