// Create a layout that displays the die and text that tells you the number you rolled
// Randomize a number between 1 - 6
// Test to make sure you can get those numbers
// Assign image of die to the number
// Test to make sure you can generate a number and get the correct image
// Find button
// Add click listener
// Output to window




let btnRoll = document.querySelector('#rollBtn')

btnRoll.addEventListener('click', (event) => {  

    let dice = Math.ceil( Math.random() * 6 )

    console.log(btnRoll)

    let result = document.querySelector('#result');
    result.innerHTML = `<strong>${dice}</strong>
    <div id="dice"><img src="img/dice${dice}.svg"></div>`;
})




// ******************************************************
// ********************* VARIABLES **********************
// ******************************************************




// ******************************************************
// ********************* FUNCTIONS **********************
// ******************************************************




// ******************************************************
// ****************** APPLICATION CODE ******************
// ******************************************************


