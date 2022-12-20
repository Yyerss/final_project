let play = 0;
let playlist = [
    'ALPHA-DAU-mood-video.m4a',
    'BTS-Jungkook-2U-Cover-LYRICS-HAPPY-BIRTHDAY-ANGEL.m4a',
    'Dosmukasan-Sagyndym-Seni-1971.m4a',
    'Jungkook-Paper-Hearts-Lyrics.m4a',
    'lee-hi-only-easy-lyrics.m4a',
    'M-B-B-A-B-B-D.m4a',
    'Moldanazar-Мейірімді-бол.m4a',
    'Orynkhan-Menimen-bol.m4a',
    'Pompeya-90.m4a',
    'Son-Pascal-Men-Seni-Suyemin.m4a',
    'The-Weekend-I-Was-Never-There-speed-up.m4a'
];
var times = document.getElementsByClassName("time")
let treck=0;
let pause;
function playMusic(id){
    document.getElementById("1").pause()
    document.getElementById("1").currentTime=0
    document.getElementById("2").pause()
    document.getElementById("2").currentTime=0;
    document.getElementById("3").pause()
    document.getElementById("3").currentTime=0;
    document.getElementById("4").pause()
    document.getElementById("4").currentTime=0;
    document.getElementById("5").pause()
    document.getElementById("5").currentTime=0;
    document.getElementById("6").pause()
    document.getElementById("6").currentTime=0;
    document.getElementById("7").pause()
    document.getElementById("7").currentTime=0;
    document.getElementById("8").pause()
    document.getElementById("8").currentTime=0;
    document.getElementById("9").pause()
    document.getElementById("9").currentTime=0;
    document.getElementById("10").pause()
    document.getElementById("10").currentTime=0;
    document.getElementById("11").pause()
    document.getElementById("11").currentTime=0;
    let audio = document.getElementById(id)
 if (pause == audio) {
        audio.pause()
    }else if (play == 0){
        audio.play()
        // play++;
        pause = document.getElementById(id);
        setInterval(function (){
            let audiotime = Math.round(audio.currentTime)
            let audioLength = Math.round(audio.duration)
            if (audiotime == audioLength && treck<11){
                treck++;
                audio.src='music/'+playlist[treck];
                audio.currentTime=0;
                audio.play();
            }else if (audiotime == audioLength && treck>=11){
                treck=0;
                audio.src='music/'+playlist[treck]
                audio.currentTime=0;
                audio.play();

            }
        },10)

    }
}
