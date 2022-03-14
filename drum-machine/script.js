let sound = null;
const playsound = (event) => {
    if(sound !== null){sound.pause();sound.currentTime = 0}
    id = event.target.value;
    if (id === "Q") id = "Q";
    if (id === "W") id = "W";
    sound = document.getElementById(id)
    var instrument = sound !== null && sound.src.split("/")[sound.src.split("/").length - 1]
    document.getElementById("display").innerHTML = instrument.replace(".mp3", "")
    sound.play()
}
window.addEventListener('click', playsound)