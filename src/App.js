import './App.css';
import Video from "./pages/Video.js";
import React,{useEffect, useState} from 'react';
import "./pages/video.css"
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore'


function App() {
  
  let maxHeight;

  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight

  }

  const [videos,setVideos] = useState([])

  async function getVideos(){
    const videosCollection = collection(db,"videos")
    const videoSnapshot = await getDocs(videosCollection)
    const videosList = videoSnapshot.docs.map( doc=>doc.data() )
    setVideos(videosList)
  }
  
  
  
  useEffect(
    ()=>{
      getVideos();
    },[]
  )


  return (
    <div className="App" style={{maxHeight:maxHeight+"px"}}>
      <header className="App-header">
        <div className='appvideos'>
           { videos.map((item)=>{
              return(
                <Video
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                name={item.name}
                description={item.description}
                music={item.music}  
                url={item.url}    
           />
              )
            }) }
           {/* <Video
                likes={310}
                messages={100}
                shares={10}
                name="carlossilva"
                description="gato teste"
                music="musica epica"   
                ulr="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"        
           
           /> */}
           
        </div>
      </header>
    </div>
  );
}

export default App;
