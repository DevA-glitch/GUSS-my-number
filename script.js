const randomNumber = Math.floor(Math.random()*100 + 1);
let guess = 10; 


document.querySelector('.btn').addEventListener('click', function(){
    const userInput = Math.ceil(Number (document.querySelector('.input-number').value));
    
    if(userInput < 1 || userInput > 100){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.error').innerText = 'Enter a valid number';
        document.querySelector('.error').style.color = 'red';
    }else{
        if(guess > 1){
            if(userInput === randomNumber){
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.error').innerText = `YOU WON, Your Score is ${guess}`;
                document.querySelector('.error').style.color = 'green';
            }else{
                if(userInput > randomNumber){
                    document.querySelector('.error').style.display = 'block';
                    document.querySelector('.error').innerText = 'Your guess is HIGHIER';
                    document.querySelector('.error').style.color = 'orange';
                    guess = guess - 1;
                    document.querySelector('.guess-me').innerText = "Guess - " + guess;
                }else if(userInput < randomNumber){
                    document.querySelector('.error').style.display = 'block';
                    document.querySelector('.error').innerText = 'Your guess is LOWER';
                    document.querySelector('.error').style.color = 'orange';
                    guess = guess - 1;
                    document.querySelector('.guess-me').innerText = "Guess - " + guess;
                }
            }
        }else{
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.error').innerText = 'GAME OVER';
        document.querySelector('.error').style.color = 'red';
        }	
    }

    




})