
// declare a function called computerSelection w/o parameters that returns randomly string of "Rock", "Paper", or "Scissors"
//declare function computerSelection
 //generate random integer number from 0 to 2, stored in a variable called randomInt
// assign 0 to rock, 1 to paper, and 2 to scissors
//return the string result of rock, paper, or scissors


function computerSelection() {
    let randomInt = Math.floor(Math.random() * 3);
    return randomInt;
    console.log(randomInt);
}

// delcare function round with two parameters, playerSelection and computerSelection, and returns a string message declaring the winner.
// declare function
// clean user input to account for capitalizations, make input uniform that only first letter is capitalized
// assign rock, paper scissors to numbers 0, 1, and 2
// use if statements conditional to compare the Selections between user and computer
// output result

function playRound(playerSelection, computerSelection) {
    
    // make user input uniform
    let first_letter = playerSelection.charAt(0);
    first_letter = first_letter.toUpperCase();
    let remain_string = playerSelection.slice(1);
    remain_string = remain_string.toLowerCase();
    playerSelection = first_letter + remain_string;

    if (computerSelection === 1) {
        print_comp_choice = "Rock";
    }
    else if (computerSelection === 2) {
        print_comp_choice = "Paper";
    }
    else {
        print_comp_choice = "Scissor";
    }


    console.log(`User chose ${playerSelection} and computer chose ${print_comp_choice}`);

    //assign user input
    if (playerSelection === "Rock") {
        playerSelection = 1;
    }
    else if (playerSelection === "Paper") {
        playerSelection = 2;
    }
    else {
        playerSelection = 0;
    }

    //game logic comparison

    if (playerSelection === computerSelection) {
        return("It's a tie!");
    }
    else if (playerSelection + computerSelection === 2) {
        if (playerSelection === 0 && computerSelection === 2) {
            return("Player wins!");
        }
        else {
            return("Computer wins!");
        }
    }
    else if (playerSelection > computerSelection) {
        return("Player wins!")
    }
    else {
        return ("Computer wins!");
    }

    
    // equal tie
    //rock 1 paper 2
    //rock 1 scissors 0
    //paper 2 rock 1
    //paper 2 scissors 0
    //scissors 0 rock 1
    //scissor 0 paper 2

}

// declare function game
// initate counter variable counter = 0; 
//while loop from 0 until 5
// prompt user for input, increment counter by 1 and add tally the scores
// output the final result

function game() {
    let counter = 1;
    let player_score = 0;
    let computer_score = 0;
    let check_input;
    let userInput;
  

    while (counter < 6) {
       
        check_input = false;
        
        while (check_input === false) {
            userInput = prompt("Enter Rock, Paper, or Scissor").toUpperCase();  
            if (userInput == "ROCK") {
                check_input = true;
               
            }
            else if (userInput == "PAPER") {
                check_input = true;
                

            }
            else if (userInput == "SCISSOR") {
                check_input = true;
                
            }
            else if (userInput == "") {
                
                alert("enter valid input");

            } 
            else {
                alert("enter valid input");
            }
            
            
        }
        

        let result = playRound(userInput, computerSelection());
        console.log(`The result of round ${counter} is ${result}`);

        if (result === "Player wins!") {
            player_score ++;
        }
        else if (result === "Computer wins!") {
            computer_score ++;
        }
        else {
            computer_score ++;
            player_score ++;
        }
        
        counter ++;

    }
    
    let final_result = "";
    if (player_score === computer_score) {
        final_result = "It's a tie!";
    }
    else if (player_score > computer_score) {
        final_result = "Player wins!";
    }
    else {
        final_result = "Computer wins!";
    }
    

    console.log(`The final score of player is ${player_score} and final score of computer is ${computer_score}!\n The final result is ${final_result}`);
}