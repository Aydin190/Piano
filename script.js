// Selecting all the elements with the class key inside the element with class piano keys.
const pianoKeys = document.querySelectorAll (".piano-keys .key");

// Selecting the volume slider input element.
const volumeSlider = document.querySelector(".volume-slider input");

// Selecting the checkbox input element for showing and hiding.
const keysCheckbox = document.querySelector(".keys-checkbox input");

// Creating an array (an array is a collection of things) to store all the key values.
let allKeys = [];

// Creating the audio object. We are setting a default audio source to a.wav.
let audio = new Audio("tunes/a.wav");






// We are creating the function to play a specific tune based on the key placed.
const playTune = (key)=>{

    // Setting the audio source dynamically based on the pressed key.
    audio.src = `tunes/${key}.wav`;

    // Playing the audio.
    audio.play();

    // Selecting the key element that was clicked using dataset value.
    const clickedKey = document.querySelector(`[data-key = "${key}"]`);

    // Adding the active class to visually highlight the key.
    clickedKey.classList.add("active");

    // Removing the active class after 150 milliseconds to create a visual press effect
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150);

    
}




// Now we will loop through each key element in the piano keys
pianoKeys.forEach(key =>{

    // Storing each key's dataset value in the all keys array
    allKeys.push(key.dataset.key);

    // Adding a clicked event listener to each key to play the corresponding tune when clicked
    key.addEventListener("click",()=> playTune(key.dataset.key))
})







// Function to show and hide keys checkbox
const showHideKeys =() => {
    
    // Toggling the hide class for each key
    pianoKeys.forEach(key=> key.classList.toggle("hide"))
}




// Function to adjust the volume of the audio based on slider input
const handleVolume =(e) => {

    // Updating the audio object's volume property
    audio.volume = e.target.value;
}







// Function to detect key presses and play the corresponding sound
const pressedKey =(e) => {

    // Checking if the pressed key exist in the all keys array then play the tune
    if(allKeys.includes(e.key)) playTune(e.key);
}





// Adding a eventListener to the checkbox to toggle key label visibility
keysCheckbox.addEventListener("click",showHideKeys);

// Adding a eventListener to the volume slider to adjust audio volume in real time
volumeSlider.addEventListener("input",handleVolume);

// Adding a eventListener to detect key presses on the keyboard and play the respective tune
document.addEventListener("keydown",pressedKey);