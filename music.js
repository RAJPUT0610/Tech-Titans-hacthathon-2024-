const progress=document.getElementById('progress');
const music=document.getElementById('music');
const controliocn=document.getElementById('papo');
const forwardButton = document.getElementById('forw');
const backwardButton =document.getElementById('back')
let currentSongIndex = 0;
music.onloadedmetadata=()=>
{
    progress.max=music.duration;
    progress.value=music.currentTime;
}
function papo()
{
    if(controliocn.classList.contains('fa-pause' || event.keyCode === 32))
    {
        music.pause()
        controliocn.classList.remove('fa-pause');
        controliocn.classList.add('fa-play');
    }
    else
    {
        music.play();
        controliocn.classList.remove('fa-play');
        controliocn.classList.add('fa-pause');
    }
}
setInterval(()=>{

    progress.value=music.currentTime;

},1000) ;
progress.onchange=()=>
{
    if(controliocn.classList.contains('fa-pause') || event.keyCode === 32)
    {
        music.play();
        controliocn.classList.remove('fa-play');
        controliocn.classList.add('fa-pause');
    }
    music.currentTime=progress.value;
    
} 
music.addEventListener('ended', function() {
    music.currentTime = 0;
    music.play();
    progress.value = music.currentTime;
    controliocn.classList.remove('fa-play');
    controliocn.classList.add('fa-pause');
});

let all_song = [
    {
      img: "cheque.jpg",
      music: "Cheques_320(PagalWorld.com.cm).mp3",
    },
    {
      img: "abhitopartysuruhuih.jpg",
      music: "Abhi Toh Party Shuru Hui Hai Khoobsurat 320 Kbps.mp3",
    },
    {
      img: "AdmirinYou.jpg",
      music: "Admirin_You_1.mp3",
    },
    {
      img: "akhmare.jpg",
      music: "SIMMBA_Aankh_Marey_Lyrical_Ranveer_Singh_Sara_Ali_Khan__vu5-aKf_QqA_140.mp3",
    },{
      img: "baller.jpg",
      music: "Baller_320(PagalWorld.com.cm).mp3",
    },
    {
      img: "blindinglights.jpg",
      music: "The Weeknd - Blinding Lights (Official Audio).mp3",
    },
    {
      img: "BrownMunde.jpg",
      music: "BROWN_MUNDE_AP_DHILLON_GURINDER_GILL_SHINDA_KAHLON_Offi_VNs_cCtdbPc_140.mp3",
    },
    {
      img: "crybaby.jpg",
      music: "Play_Date_9g6F1D70cEM_140.mp3",
    },{
      img: "dancin.jpg",
      music: "Aaron_Smith_Dancin_KRONO_Remix_Lyrics_Cjp6RVrOOW0_140.mp3",
    },
    {
      img: "dollar.png",
      music: "Dollar.mp3",
    },
    {
      img: "Elevated.jpg",
      music: "Elevated_Official_Audio_Shubh_9CvwbW9UhJc_140.mp3",
    },
    {
      img: "Excuses.jpg",
      music: "Excuses_Official_Video_AP_Dhillon_Gurinder_Gill_Intense_vX2cDW8LUWk_140.mp3",
    },{
      img: "Gangstasparadise.jpg",
      music: "Coolio_Gangsta_s_Paradise_feat._L.V._Official_Music_Vid_fPO76Jlnz6c_140.mp3",
    },
    {
      img: "gani.jpg",
      music: "Gani_320(PagalWorld.com.cm).mp3",
    },
    {
      img: "HoJayegiBalleBalle.jpg",
      music: "Ho_Jayegi_Balle_Balle_Daler_Mehndi_Official_Video_Jawah_KTE6S-Pmhpw_140.mp3",
    },
    {
      img: "industrybaby.jpg",
      music: "Lil_Nas_X_Jack_Harlow_INDUSTRY_BABY_Official_Video__UTHLKHL_whs_140.mp3",
    },{
      img: "lekeprabhukanaam.jpg",
      music: "Leke_Prabhu_Ka_Naam_Song_Tiger_3_Salman_Khan_Katrina_Pr_6GxXehkPyBs_140.mp3",
    },{
      img: "mashalla.jpg",
      music: "Mashallah Ek Tha Tiger 320 Kbps.mp3",
    },
    {
      img: "mehndilagakerakhna.jpg",
      music: "Mehndi Laga Ke Rakhna Dilwale Dulhania Le Jayenge 320 Kbps.mp3",
    },
    {
      img: "metamorphosis.jpg",
      music: "INTERWORLD_METAMORPHOSIS_NS9z2QHcZdY_140.mp3",
    },
    {
      img: "mockingbird.jpg",
      music: "Mockingbird_320(PaglaSongs).mp3",
    },{
      img: "rokmdenashi.jpg",
      music: "ロクデナシ_ただ声一つ_Rokudenashi_One_Voice_Official_Music_Video__5GUaMOpfmr8_140.mp3",
    },
    {
      img: "rollin.jpg",
      music: "Still Rollin_320(PagalWorld.com.cm).mp3",
    },
    {
      img: "Shapeofyou.jpg",
      music: "Shape-Of-You(PagalWorlld.Com).mp3",
    },
    {
      img: "sinformoment.png",
      music: "Eminem_Sing_For_The_Moment_Official_Music_Video__D4hAVemuQXY_140.mp3",
    },{
      img: "Softly.jpg",
      music: "Softly-(PagalWorld).mp3",
    },
    {
      img: "suzumi.jpg",
      music: "Suzume-No-Tojimari-Title-Track_320(PaglaSongs).mp3",
    }
  ];
  
function forward() {
    currentSongIndex++;
    if (currentSongIndex >= all_song.length) {
        currentSongIndex = 0;
    }
    const nextSong = all_song[currentSongIndex];
    music.src = nextSong.music;
    document.querySelector('.poster img').src = nextSong.img; 
    if(controliocn.classList.contains('fa-pause') || event.keyCode === 32)
    {
        music.play();
        controliocn.classList.remove('fa-play');
        controliocn.classList.add('fa-pause');
    }
    
}

function backward() { 
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = all_song.length - 1; 
    }
    const prevSong = all_song[currentSongIndex];
    music.src = prevSong.music;
    document.querySelector('.poster img').src = prevSong.img;
    if(controliocn.classList.contains('fa-pause') || event.keyCode === 32)
    {
        music.play();
        controliocn.classList.remove('fa-play');
        controliocn.classList.add('fa-pause');
    }
}
forwardButton.onclick = forward;
backwardButton.onclick = backward;
document.addEventListener('keydown', function(event) {
  
    if (event.keyCode === 32) {
        papo();
    }
    
    else if (event.keyCode === 39) {
        forward(); 
    }
    // Check if the left arrow key was pressed
    else if (event.keyCode === 37) {
        backward(); 
    }
});






const volumeButton = document.getElementById('vol');
const volume = document.getElementById('volumeincrease');
volume.value=music.currentVolume;
volume.oninput = () => {
    music.volume = volume.value / 100; // Set the volume of the audio element based on the value of the volume input slider
    
}

 
document.addEventListener('keydown', function(event) {
    // Assuming 'volume' is the id of your volume control element
    var volume = document.getElementById('volume');

    // Check if the up arrow key was pressed
    if (event.keyCode === 38) {
        // Increase the volume
        if (volume.value < 100) {
            volume.value = parseInt(volume.value) + 10; // Increase volume by 10
        }
    }
    // Check if the down arrow key was pressed
    else if (event.keyCode === 40) {
        // Decrease the volume
        if (volume.value > 0) {
            volume.value = parseInt(volume.value) - 10; // Decrease volume by 10
        }
    }
});

function searchSongs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredSongs = all_song.filter(song => {
        return song.music.toLowerCase().includes(searchInput) || song.img.toLowerCase().includes(searchInput);
    });

    // Update the UI to display the filtered songs
    updateUI(filteredSongs);
}

function updateUI(songs) {
    const poster = document.querySelector('.poster img');
    const music = document.getElementById('music');

    if (songs.length > 0) {
        // Display the first song from the filtered list
        poster.src = songs[0].img;
        music.src = songs[0].music;
    } else {
        // If no matching songs found, display a default message or handle accordingly
        alert('No matching songs found.');
    }
}