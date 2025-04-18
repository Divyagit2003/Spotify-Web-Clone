console.log("Lets start JavaScript");

let songs = [];
let currFolder = "songs/ncs";

// Function to manually define songs
async function getSongs(folder) {
    currFolder = folder;

    // ✅ Set song list manually
    if (folder === "songs/ncs") {
        songs = ["song1.mp3", "song2.mp3"];
    } else if (folder === "songs/cs") {
        songs = ["song3.mp3", "song4.mp3"];
    }

    let songUl = document.querySelector(".songList ul");
    songUl.innerHTML = "";

    for (const song of songs) {
        songUl.innerHTML += `
            <li>
                <img class="invert" src="img/music.svg" alt="">
                <div class="info">
                    <div>${song}</div>
                    <div>Artist</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                    <img class="invert" src="img/play.svg" alt="">
                </div>
            </li>`;
    }

    // Event listener for each song
    Array.from(document.querySelectorAll(".songList li")).forEach((e) => {
        e.addEventListener("click", () => {
            const songName = e.querySelector(".info div").innerText.trim();
            playMusic(songName);
        });
    });

    return songs;
}

// ✅ Function to play music
function playMusic(track) {
    let audio = new Audio(`${currFolder}/${track}`);
    audio.play().then(() => {
        console.log("Now playing:", track);
    }).catch((error) => {
        console.error("Error playing track:", error);
    });
}

// ✅ Initialize with default folder
getSongs("songs/ncs");
