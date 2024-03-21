

let currentSong = new Audio();
let songs;
let currentSongIndex = 0;


const secondsToMinutesSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};


async function getSongs() {
    const songs = [
        "Hussain Akela Hai.mp3",
        "Chalta Rahe Karwan.mp3",
        "Zinda Rahy Hussain.mp3"
        

    ];
    return songs;
}



const playNextSong = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playMusic(songs[currentSongIndex].split("/").pop().replace(/%20/g, " "));
};

const playPreviousSong = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playMusic(songs[currentSongIndex].split("/").pop().replace(/%20/g, " "));
};



const playMusic = (track, pause = false) => {
    currentSong.src = encodeURIComponent(track);

    if (!pause) {
        currentSong.play();
        play.src = "https://raw.githubusercontent.com/CodeWithHarry/Sigma-Web-Dev-Course/cb54aa395ad2ff4fbfd64353b250bfaedee0611d/Video%2084%20-%20Project%202%20-%20Spotify%20Clone/img/pause.svg";
    }

    document.querySelector(".noha-name").innerHTML = track;
    document.querySelector(".noha-time").innerHTML = "00:00 / 00:00";
};


async function main() {
    songs = await getSongs();
    playMusic(songs[0].split("/").pop().replace(/%20/g, " "), true);



    let songUL = document.querySelector(".options").getElementsByTagName("ul")[0];
    for (const song of songs) {
        const songName = song.split("/").pop().replace(/%20/g, " ");




        songUL.addEventListener("click",()=>{

            options.classList.add("op")



        })
    
    

        let li = document.createElement("li");
        li.innerHTML = `
            <div class="info">
                <div>${songName}</div>
            </div>
        `;
        songUL.appendChild(li);
    }

    Array.from(songUL.getElementsByTagName("li")).forEach(li => {
        li.addEventListener("click", () => {
            const songName = li.querySelector(".info").firstElementChild.innerHTML.trim();
            playMusic(songName);
        });
    });










    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "https://raw.githubusercontent.com/CodeWithHarry/Sigma-Web-Dev-Course/cb54aa395ad2ff4fbfd64353b250bfaedee0611d/Video%2084%20-%20Project%202%20-%20Spotify%20Clone/img/pause.svg";
        } else {
            currentSong.pause();
            play.src = "https://raw.githubusercontent.com/CodeWithHarry/Sigma-Web-Dev-Course/cb54aa395ad2ff4fbfd64353b250bfaedee0611d/Video%2084%20-%20Project%202%20-%20Spotify%20Clone/img/play.svg";
        }
    });



    currentSong.addEventListener("timeupdate", () => {
        const formattedCurrentTime = secondsToMinutesSeconds(currentSong.currentTime);
        const formattedDuration = secondsToMinutesSeconds(currentSong.duration);

        document.querySelector(".noha-time").innerHTML = `${formattedCurrentTime} / ${formattedDuration}`;
        document.querySelector(".circle1").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });


    document.querySelector(".seek-bar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width);
        let newTime = percent * currentSong.duration;

        document.querySelector(".circle1").style.left = percent * 100 + "%";

        if (!isNaN(newTime) && isFinite(newTime)) {
            currentSong.currentTime = newTime;
        }
    });


    const nextButton = document.querySelector("#next");
    const previousButton = document.querySelector("#previous");

    nextButton.addEventListener("click", playNextSong);
    previousButton.addEventListener("click", playPreviousSong);



}



main();



let options=document.querySelector(".options");


let more=document.getElementById("more").addEventListener("click",()=>{
   
    
   
    options.classList.toggle("op")


})


let remove=document.getElementById("remove").addEventListener("click",()=>{

    options.classList.add("op")
})


options.addEventListener("click",()=>{




})