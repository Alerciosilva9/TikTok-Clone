import React,  {useState} from 'react'
import "./VideoSidebar.css"
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes,messages,shares}) {

    const [liked,setLiked] = useState(false)
    function handleLike(){
        setLiked(!liked)
    }


  return (
    <div className='videoSidebar'>
    
    <div 
        className='videoSidebarOptions'
        onClick={handleLike}
    >
        {liked? <FavoriteIcon fontSize='large'/> :<FavoriteBorderIcon fontSize='large'/>}
       <p> {liked? likes+1: likes} </p>
    </div>
    <div className='videoSidebarOptions'>
        <ChatIcon fontSize='large'/>
        <p>{messages}</p>
    </div>
    <div className='videoSidebarOptions'>
        <ShareIcon fontSize='large'/>
        <p>{shares}</p>
    </div>
    
    </div>
  )
}

export default VideoSidebar