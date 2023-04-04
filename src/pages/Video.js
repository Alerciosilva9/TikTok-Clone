import React,{ useRef, useState} from 'react'
import VideoFooter from "./components/VideoFooter.js"
import VideoSidebar from './components/VideoSidebar.js'


function Video({likes,messages,shares,name,description,music,url}) {

  const videoRef = useRef(null)
  const [play,setPlay] = useState(false)
  
  function handdleStart(){
    if(play){
      
      videoRef.current.pause()
      setPlay(false);
    }else{
      videoRef.current.play()
      setPlay(true);
    }
  }
  
  return (
    <div className='video'>
      <video 
        className='video_player'
        onClick={handdleStart}
        ref={videoRef}
        loop
        src={url}
      >

      </video>
        <VideoFooter
          name={name}
          music={music}
          description={description}
        />
        <VideoSidebar
            likes={likes}
            messages={messages}
            shares={shares}
        />
     

        
      </div>
      
  )
}

export default Video