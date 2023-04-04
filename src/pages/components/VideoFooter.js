import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import "../components/VideoFooter.css"


function VideoFooter({name,description,music}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooterText'>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='videoFooterMusic'>
              <MusicNoteIcon className='videoFooterIcon'/>
               <div className='videoMusicFooterText'>
                 <p>{music}</p>
               </div>
               
            </div>

            <img className='videoFooterRecord' 
            alt="Imagem do Vínil"
            src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" >
            </img>
            
        </div>
        
        </div>
  )
}

export default VideoFooter