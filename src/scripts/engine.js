const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);

// const volumeSlider = document.querySelector('input[type="range"]');
// const keysCheck = document.querySelector('input[type="checkbox"]');



// const notes = {
//     'a': 'a',
//     'w': 'w',
//     's': 's',
//     'e': 'e',
//     'd': 'd',
//     'f': 'f',
//     't': 't',
//     'g': 'g',
//     'y': 'y',
//     'h': 'h',
//     'u': 'u',
//     'j': 'j',
//     'o': 'o',
//     'k': 'k',
//     'l': 'l',
//     'p': 'p',
//     'ç': 'ç',
// };



// // Adicionando um ouvinte de evento para teclas do teclado
// document.addEventListener('keydown', (event) => {
//     const pressedKey = event.key.toLowerCase();
//     if (notes[pressedKey]) {
//         const key = document.querySelector(`.key[data-note="${pressedKey}"]`);
//         playTune(key);
//     }
// });

// // function playTune(key) {
// //     const note = key.getAttribute('data-note');
// //     if (!note) return;

// //     const audio = new Audio(`./src/tunes/${note}.wav`);
// //     audio.volume = volumeSlider.value / 100;

// //     if (keysCheck.checked) {
// //         key.classList.add('active');
// //         audio.addEventListener('ended', () => {
// //             key.classList.remove('active');
// //         });
// //     }

// //     audio.play();
// // }

// volumeSlider.addEventListener('input', () => {
//     // Atualize o volume com base no valor do controle deslizante
//     const volumeLabel = document.querySelector('.volume-slider span');
//     volumeLabel.textContent = volumeSlider.value;
// });

