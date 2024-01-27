import './GamingLibraryCarte.css'
import { Secondarybutton } from '../../Compo/index'

import { IoCloudDownload } from "react-icons/io5";




const GamingLibraryCarte = (props) => {
  return (
    <div className='gaming-library_card'>
      <ul>
        <li><img src={props.image} alt=''/></li>
        <li><h4>{props.title}</h4><span>{props.categorie}</span></li>
        <li><h4> Date added</h4><span>{props.date_added}</span></li>
        <li><h4>hours played</h4><span>{props.hours_played}</span></li>
        <li><h4>Currently</h4><span>{props.download}</span></li>
        <Secondarybutton>Download  <IoCloudDownload className='download-icons'/></Secondarybutton>
      </ul>
    </div>
  )
}

export default GamingLibraryCarte