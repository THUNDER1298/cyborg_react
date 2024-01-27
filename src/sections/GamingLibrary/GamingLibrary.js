import './GamingLibrary.css'
import {SectionHeader,SectionRapper,GamingLibraryCarte} from '../../Compo/index';
import GamingLibraryData from '../../Data/GamingLibraryData';

const GamingLibrary = () => { 
     const Cartes = GamingLibraryData.map(carte => <GamingLibraryCarte key={carte.id} image={carte.image} title={carte.title} categorie={carte.categorie} date_added={carte.date_added} hours_played={carte.hours_played} download={carte.Downloaded} />)

    return (
        <> 
         <SectionRapper>
           <SectionHeader>Gaming Library</SectionHeader>
           <div className='gaming-library-cards'>
            {Cartes}
           </div>
           </SectionRapper>
         </>
         )
}

export default GamingLibrary