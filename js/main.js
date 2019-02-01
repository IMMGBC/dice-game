// Step 2: Randomize a dice roll (make sure it's an integer number)
  // Start by creating a variable that hold a dice number
let roll = 5;
// Step 3: Update the user interface (document) to show the diceface (svg image)
let diceMsg = document.getElementById('msg');
let theDice = document.gwtElementById('dice');

diceMsg.innerHTML = 'You rolled 5';
theDice.innerHTML = '<img scr="img/dice5.svg" alt='Dice' class='dice'>

// Step 4: Convert the roll number (for example: 3) to a word ("three")
// convert the number
