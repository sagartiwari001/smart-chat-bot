const button = document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("speech Recognition started");
};
recognition.onresult = function (event) {
    console.log(event);
    const spokenwords = event.results[0][0].transcript;
    console.log("spoken words are", spokenwords);
    computerSpeech(spokenwords);

};
function computerSpeech(words) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-us";
    speech.pitch = 0.9;
    speech.volume = 1;
    speech.rate = 1;
    speech.text = words;
    determineWords(speech, words);
    window.speechSynthesis.speak(speech.text);

}
function determineWords(speech, words) {

    if (words.includes("who am i ")) {
        speech.text = "you are my master";
    }

    if (words.includes(" how are you")) {
        speech.text = " i am fine ! Thank you";
    }

    if (words.includes(" whats your name ")) {
        speech.text = " my name is trish";
    }
    if (words.includes(" Do you love me  ")) {
        speech.text = " why should  i love you ! you are a looser";
    }
    if (words.includes(" how is the weather ")) {
        speech.text = " why you care about that ? you never go out";
    }
    if (words.includes(" open facebook for me ")) {
        speech.text = " openning facebook for you ";
        window.open("https://www.facebook.com/");
    }
    if (words.includes(" open google for me ")) {
        speech.text = " opening google for you ";
        window.open("https://www.google.com/");
    }
    if (words.includes(" open wikipeadia for me ")) {
        speech.text = " openning wikipeadia for you ";
        window.open("https://www.wikipeadia.com/");
    }

}
button.addEventListener("click", () => {
    recognition.start();


})