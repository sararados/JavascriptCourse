const getUserChoice = userInput=> {
    userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
        console.log( 'You wrote wrong');
    }
  }

  //console.log(getUserChoice('rock'));

  const getComputerChoice = () => {

    const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return'rock';
    
    case 1:
      return'paper';
      
    case 2:
      return 'scissors';
    }
  };

console.log(getComputerChoice());

const determineWinner = ( userChoice, computerChoice) => { 
    
    if(userChoice === computerChoice) {
     return 'The game is a tie!';
    }    
    if( userChoice === 'rock' ) {
        if(computerChoice === 'paper') {
            return'computer won'; 
                  } else {
                    return'user won';
        }   
    }
      
    if(userChoice === 'paper') {
        if (computerChoice === 'rock'){
            return'user won';
        } else {
            return'computer won';
          }
        }
    
    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return  'computer won';
        } else {
           return'user won';
        }
    }
};

//console.log(determineWinner());
const playGame = () => {
   const userChoice = getUserChoice('rock');
   const computerChoice = getComputerChoice();

   console.log(determineWinner(userChoice, computerChoice));
}

playGame();