
    console.log("Welcome to Haley");

    // Initialize the variables
    let songIndex = 0;
    let audioElement = new Audio('Quran/1.mp3'); // Adjust path based on actual location
    let masterPlay = document.getElementById('masterPlay');
    let myProgressBar = document.getElementById('myProgressBar');
    let gif = document.getElementById('gif');
    let masterSongName = document.getElementById('masterSongName')
    let songItems = Array.from(document.getElementsByClassName('songItem'));

    let Quran = [
        {songName: "Surah At tin ", filepath: "Quran/1.mp3", coverpath: "covers/1.jpg"},
        {songName: "Surah Al Qadr", filepath: "Quran/2.mp3", coverpath: "covers/2.jpg"},
        {songName: "Surah Al Asr", filepath: "Quran/3.mp3", coverpath: "covers/3.jpg"},
        {songName: "Surah Al Humazah", filepath: "Quran/4.mp3", coverpath: "covers/4.jpg"},
        {songName: "Surah Al Maun", filepath: "Quran/5.mp3", coverpath: "covers/5.jpg"},
        {songName: "Surah An Nasr", filepath: "Quran/6.mp3", coverpath: "covers/6.jpg"},
        {songName: "Surah Al Masad", filepath: "Quran/7.mp3", coverpath: "covers/7.jpg"},
        {songName: "Surah Al Ikhlas", filepath: "Quran/8.mp3", coverpath: "covers/8.jpg"},
        {songName: "Surah Al falaq", filepath: "Quran/9.mp3", coverpath: "covers/9.jpg"},
        {songName: "Surah An Nas", filepath: "Quran/10.mp3", coverpath: "covers/10.jpg"},
    ];

    songItems.forEach((element, i)=>{
        // console.log(element, i)
    //     element.getElementsByTagName("img")[0].src = Quran[i].coverPath; 
        element.getElementsByClassName("songName")[0].innerText = Quran[i].songName; 
        
    });

    // Handle play/pause click
    if (masterPlay) {
        masterPlay.addEventListener('click', () => {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                 audioElement.play();
                 masterPlay.classList.remove('fa-play');
                 masterPlay.classList.add('fa-pause');
                 gif.style.opacity = 1;
                 

            }else{
                audioElement.pause();
                masterPlay.classList.remove('fa-pause');
                masterPlay.classList.add('fa-play');
                gif.style.opacity = 0;

            }
        });
    } else {
        console.error('Element with ID "masterPlay" not found');
    }

    // Listen to events
    audioElement.addEventListener('timeupdate', ()=>{ 
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myProgressBar.value = progress;
    })
    


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-pause');
        element.classList.add('fa-solid', 'fa-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      console.log(e.target)
      makeAllPlays();
    //   masterSongName.innerText = Quran[songIndex].songName
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-solid', 'fa-play');
      e.target.classList.add('fa-solid', 'fa-pause');
    //   console.log(index);
      audioElement.src = `Quran/${songIndex+1}.mp3`;
      masterSongName.innerText = Quran[songIndex].songName
    //   console.log(audioElement.src);
      audioElement.currentTime = 0;
      audioElement.play();
      element.classList.remove('fa-solid', 'fa-play');
      element.classList.add('fa-solid', 'fa-pause');

    })
})

document.getElementById('next').addEventListener('click', (e)=>{
    if(songIndex>=9){
        songIndex = 0
    }else{
      songIndex += 1;
    }
    audioElement.src = `Quran/${songIndex+1}.mp3`;
    masterSongName.innerText = Quran[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    // element.classList.remove('fa-solid', 'fa-play');
    // element.classList.add('fa-solid', 'fa-pause');

    
})

document.getElementById('previous').addEventListener('click', (e)=>{
    if(songIndex<=9){
        songIndex = 0
    }else{
      songIndex -= 1;
    }
    audioElement.src = `Quran/${songIndex+1}.mp3`;
    masterSongName.innerText = Quran[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    element.classList.remove('fa-solid', 'fa-play');
    element.classList.add('fa-solid', 'fa-pause');

    
})