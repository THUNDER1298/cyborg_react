import './Mstpop.css'
import {SectionHeader,SectionRapper,Carte} from '../../Compo/index';
import MostPopularData from '../../Data/MostPopularData';



const Mstpop = () => {
   
  const Cartes = MostPopularData.map(carte => <Carte key={carte.id} image={carte.image} title={carte.title} categorie={carte.categorie} rate={carte.rate} download={carte.download} />)

  return (
   <> 
    <SectionRapper>
      <SectionHeader>MostPopular</SectionHeader>
      <div className='most-popular-items'>
      {Cartes}
      </div>
      </SectionRapper>
    </>
    )
}

export default Mstpop