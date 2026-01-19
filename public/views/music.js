export default function music() {

  return `<style>
  *{margin: 0;
padding: 0ch ;
box-sizing: border-box;}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EFE1B5;
  

}

.music-player{
    width: 350px;
    height: 550px;
    border-radius: 20px;
    background-color: #F5FBE6;
    box-shadow: 0px 20px 50px #6E5034 ;
}
.music-name,
.artist-name{
    content: '';
    position:relative;
    top: 65%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    text-transform: capitalize;
    font-family: 'Times New Roman', Times, serif;
    
}

.music-player{
    font: bold;
    font-size: 20px;
    
}

.disk{
    position: relative;
    display: block;
    margin: 40px auto;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-image: url('1.jpg');
    background-size: cover;
    box-shadow: 0 10px 20px #233D4D ;
    
}

.music-name{background: whitesmoke;}

.disk::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #F5FBE6;
}
 
.song-slider{
    position: relative;
    left: 3%;
    width: 100px; ;
}

.seek-ban{
    -webkit-appearance: none;
    width: 330px;
    height: 4px;
    border-radius: 10px;
    background: #595959;
    cursor: pointer;
    overflow: hidden;
    
}

.seek-ban::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 1px;
    height: 20px;
    background: #000;
    box-shadow: -400px 0 0 400px #000000;
   
}

.current-time,
.song-time{
    position: absolute;
    font-size: 15px;
}
.song-time{
    left: 290px;
}

.controls{ 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 100px;
}

.play-but{
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ade6f7;
    cursor: pointer;
    border: none;

}
 .play-but span{
    position: absolute;
    top: 50%;
 }
  </style>
  <div>music</div>`;
}
