export function musicInit() {


  let playlist = ['images/1.mp3', 'images/2.mp3', 'images/3.mp3', 'images/4.mp3'];
let currentTrackIndex = 0;

// Get elements
let audioPlayer = document.getElementById('myaudio');  // Assuming audio element has id="myaudio"
let backButton = document.getElementById('back-button');
let nextButton = document.getElementById('next-button');
let playButton1 =document.getElementById('play-button');


// ========== AUDIO FUNCTIONS ==========
function playTrack(index) {
    if (index >= 0 && index < playlist.length) {
        audioPlayer.src = playlist[index];  // Use audioPlayer, not myaudio
        audioPlayer.play();
        currentTrackIndex = index;
    }
}

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}


function playNextTrack() {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    playTrack(nextIndex);
}

// Audio event listeners
audioPlayer.addEventListener('ended', playNextTrack);
nextButton.addEventListener('click', playNextTrack);
backButton.addEventListener('click',pauseAudio);
playButton1.addEventListener('click',playAudio);


}

export default function music() {
  return `
  

  <style>

  


    .music-player{          /*background box black box*/
    width: 350px;
    height: 550px;
    border-radius: 20px;
    border: 5px solid #ffb109;
    box-shadow: 0px 0px 40px #000000 ; 
    display: flex;
    justify-content: center;
    align-items: center;
    

}

/*artist and song name*/

.music{ 
  position:relative;
  text-transform: capitalize;
  color: #ffffff;
  left:70px;
  top:90px;
  font-family: var(--font-primary);
  font-size: 100px;
  }


.artist-name{            /*artist and song name*/
    position:relative;
    text-transform: capitalize;
    color: #ffffff;
    left:50px;
    top:120px;
    position:relative;
    text-align: justify;
  }


.play-but{
    position:relative;
    width: 60px;
    height: 40px;
    border-radius: 10%;
    background: #9fe8fa;
    cursor: pointer;
    background-color: #dcf763; 
    border-radius: 10%;
    margin-right: 5px;
    }


    .backBut{
      position:relative;
      width: 60px;
      height: 40px;
      border-radius: 10%;
      background: #9fe8fa;
      background-color: #dcf763; 

    }

  .nextBut{
    position: relative;
    width: 120px;
    height: 40px;
    border-radius: 50%;
    background-color: #dcf763;
    margin-top: 20px;
    font-family: var(--font-primary);
    
    
    }

   

    
 /*wall paper*/

.pict{
    height: 540px;
    position: fixed;
    border-radius: 20px;
    border: 3px solid #000000;
    
    
}



 .nextBut:hover{background-color: #ffffff;}
 .backBut:hover{background-color: #ffffff;}
 .play-but:hover{background-color: #ffffff;}


. display
  {}


.ply{
    display: flex;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.button{
  position: relative;
  top: 200px;
  left:-100px;
  
  }
  
 .text{
    
 }

  </style>

 
  
  
  <div class="ply">
       
   
        
    
      

       <div class="music-player">

          <img src="images/lofi1.jpg" id="pic" class="pict">

        <div class="text">
          <h1 class="music">LOFi</h1>
          <p class="artist-name"></p>
        </div>


        <div class="button">
            
            <button onclick="playAudio()" type="button" class="play-but" id="play-button">play</button>
            <button onclick="pauseAudio()" type="button" class="backBut" id="back-button">pause</button><br>
            <button class="nextBut" id="next-button">next</button>
        </div>


        <audio id="myaudio">
          <source src="sandawathiye.mp3" type="audio/mp3">
          <source src="images/1.mp3" type="audio/mp3">
          <source src="images/2.mp3" type="audio/mp3">
          <source src="images/3.mp3" type="audio/mp3">
          <source src="images/4.mp3" type="audio/mp3">
        </audio>

        <audio src="images/1.mp3" id="myaudio></audio>
        
        
    


  </div>`;
}
