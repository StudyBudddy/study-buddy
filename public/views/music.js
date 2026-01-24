export function musicInit() {
  let playlist = ["1.mp3", "2.mp3", "3.mp3"]; /* js file */
  let currentTrackIndex = 0;

  // Get elements
  let audioPlayer = document.getElementById("myaudio"); // Assuming audio element has id="myaudio"
  let backButton = document.getElementById("back-button");
  let nextButton = document.getElementById("next-button");
  const myimag = document.getElementById("myimage");
  const currentInfo = document.getElementById("currentInfo");

  // ========== AUDIO FUNCTIONS ==========
  function playTrack(index) {
    if (index >= 0 && index < playlist.length) {
      audioPlayer.src = playlist[index]; // Use audioPlayer, not myaudio
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
  audioPlayer.addEventListener("ended", playNextTrack);
  nextButton.addEventListener("click", playNextTrack);
}

export default function music() {
  return `
  <style>


  .body {margin: 0;               /*  css code*/
padding: 0ch ;
box-sizing: border-box;}

body{               /*background*/
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   background-color: #000000;
  

}

.music-player{          /*background box black box*/
    width: 350px;
    height: 550px;
    border-radius: 20px;
    border: 2px solid #96d9f8;
    left: 38%;
    position: fixed;
    top: 90px;
    
    box-shadow: 0px 0px 40px #000000 ;
}
.music-name,
.artist-name{            /*artist and song name*/
    content: '';
    position:fixed;
    top: 68%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
    color: #ffffff;
    font-size: medium;
    
}




.pic{                      /*picture box shodow box*/
    position:fixed;
    display: block;
    margin: auto;
    width: 200px;
    height: 510px;
    /*border-radius: 50%;*/
    top: -55px;
    left: 50%;
    
    background-size: cover;
    box-shadow: 0 0px 30px #505050 ;

    
}


.pictures{
    width: 100px;
    height: 100px;background-color: #96d9f8;
}


.play-but{
    position:fixed;
    width: 60px;
    height: 40px;
    border-radius: 10%;
    background: #9fe8fa;
    cursor: pointer;
    background-color: transparent; 
    top: 75%;
    left: 46%;
     border-radius: 10%;
    
    

}

 


 .backBut{
    position:fixed;
    left: 50%;
    top: 75%;
     width: 60px;
    height: 40px;
    border-radius: 10%;
    background: #9fe8fa;
    background-color: transparent; 

 }

  .nextBut{
    position: fixed;
    top: 587px;
    left: 46%;
     width: 120px;
    height: 40px;
    border-radius: 10%;
    background: white;}
   




 .nextBut:hover{background-color: #ffffff;}
 .backBut:hover{background-color: #ffffff;}
 .play-but:hover{background-color: #ffffff;}

 .music_yt{
       position: fixed;
    display: block;
    margin: 0px auto;
    width: 200px;
    height: 270px;
    /*border-radius: 50%;*/
    background-size: cover;
    box-shadow: 0 0px 30px #9cd5f9 ;
    transform: scale(0);
    opacity: 0;
 }


 /*wall paper*/

.pict{
    top: 95px;
    width: 345px;
    height: 74%;
    position:fixed;
    border-radius: 20px;
    left: 38%;
    
}

.music-name{
    font-size: 50px;
}


.wallpaper{max-width: 100%;}

</style>



 <div class="signup-wrapper">
  


/*html code*/
<div class="wallpaper">
     <img src="lofi1.jpg" id="pic" class="pict"> 
    

    

    <div class="music-player">
        <h1 class="music-name">LOFi</h1>
        <p class="artist-name">Lofi Girl</p>

        <div class="disk"> </div>

        


        <div class="next_bu" id="next-button">  
            <button class="nextBut">next</button>
     </div>
     
    </div>

    <audio id="myaudio">
        <source src="sandawathiye.mp3" type="audio/mp3">
        <source src="1.mp3" type="audio/mp3">
        <source src="2.mp3" type="audio/mp3">
        <source src="3.mp3" type="audio/mp3">

    </audio>

   <img id="myimage" src="">

<div>


    <button onclick="playAudio()" type="button" class="play-but">plwy</button>

    <button onclick="pauseAudio()" type="button" class="backBut">pu</button> 
</div>
</div>


  </div>`;
}
