const songs=[
    {
        title:'Tere_Liya',
        artist:'Atif Aslam',
        audio:'/Music_APP/songs/Tere_liya.mp3',
        image:'/Music_APP/images/tere_liya.png'
    },
   {
        title:'Alchoholic',
        artist:'Yo Yo Honey Singh',
        audio:'/Music_APP/songs/Alcoholic (The Shaukeens) Yo Yo Honey Singh.mp3',
        image:'/Music_APP/images/alcholic.jpeg'
    },
    {
        title:'Brown_Munde',
        artist:'AP Dhillon,Gurinder, Gill Shinda Kahlon',
        audio:'/Music_APP/songs/Brown Munde(PagalWorld.com.se).mp3',
        image:'/Music_APP/images/brown_munde.jpeg'
    },
    {
        title:'Zindagi_Se',
        artist:'Udit Narayan, Alka Yagnik',
        audio:'/Music_APP/songs/Zindagi Se - Raaz 3 320Kbps.mp3',
        image:'/Music_APP/images/Zindagi_se.jpeg'
    } ,
    {
        title:'Chammak_Challo',
        artist:'Akon, Hamsika Iyer',
        audio:'/Music_APP/songs/Chammak Challo x Drake Mashup(AllDjsMashup.Com) (1).mp3',
        image:'/Music_APP/images/Chammak_challo.jpeg'
    }  
]
const audio=document.getElementById("audio");
const song_image=document.getElementById("song_image");
const song_name=document.getElementById("song_name");
const artist_name=document.getElementById("artist_name");

let current_song=0;
let isPlaying=false;

function load_song(index)
{
    audio.src=songs[index].audio;
    song_image.src=songs[index].image;
    song_name.innerHTML=songs[index].title;
    artist_name.innerHTML=songs[index].artist;
}
load_song(current_song);

function toogle_Song()
{
    if(isPlaying)
    {
        audio.pause();
        isPlaying=!isPlaying;
        document.getElementById("pause").innerHTML='<i class="fa-solid fa-play"></i>';
    }
    else
    {
        document.getElementById("pause").innerHTML='<i class="fa-solid fa-pause"></i>';
        audio.play();
        isPlaying=!isPlaying;
    }
}

function next_Song()
{
    current_song++;
    if(current_song>=songs.length)
    {
        current_song=0;
    }
    load_song(current_song)
    audio.play();
    isPlaying=true;
    document.getElementById("pause").innerHTML='<i class="fa-solid fa-pause"></i>';
}
function previous_Song()
{
    current_song--;
    if(current_song<0)
    {
        current_song=songs.length-1;
    }
    load_song(current_song)
    audio.play();
    isPlaying=true;
    document.getElementById("pause").innerHTML='<i class="fa-solid fa-pause"></i>';
}