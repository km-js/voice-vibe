let button = document.querySelector('.card button')
let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('.card select')

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (
        voiceSelect.options[i]
        = new Option(voice.name, i)))
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

button.addEventListener('click', speak);
function speak() {
    speech.text = document.querySelector('.card textarea').value;
    window.speechSynthesis.speak(speech);
} 
