import { WORDS } from "./wordpunch_wordlist";

/* This gets the wordpunch data for the game */
export const getWordpunchGameData = () => {

    /* Gets random word as answer */
    const answer: string = WORDS[Math.floor(Math.random() * WORDS.length)];

    /* Sets up list to hold hints */
    let hintsList: string[] = [];

    /* Shuffle through word list and pick valid hints based on answer word */
    for (let answerChar of answer){
        let foundValidHint = false;
        while (!foundValidHint){
            let randomWord: string = WORDS[Math.floor(Math.random() * WORDS.length)];
            let hintTryCount = 0;
            if (randomWord != answer && !(hintsList.includes(randomWord))){
                let randomWordAsArray: string[] = randomWord.split('')
                if (randomWordAsArray.includes(answerChar)){
                    for (let i = 0; i < randomWord.length; i++){
                        if (answerChar == randomWord[i]){
                            randomWordAsArray[i] = ' ';
                            break;
                        }
                    }
                    randomWord = randomWordAsArray.join('');
                    hintsList.push(randomWord);
                    foundValidHint = true;
                }
            } else {
                if (hintTryCount == WORDS.length-5){
                    foundValidHint = true;
                    getWordpunchGameData();
                } else {
                    hintTryCount++;
                }
            }
        }
    }

    /* If the answer word doesn't get enough hints, get another answer word and try again */
    if (hintsList.length < answer.length){
        getWordpunchGameData();
    }

    /* Returns the answer along with the hints in a single array for convenience */
    return [answer, ...hintsList];
}

/* This validates input for a better user experience */
export const validateWordpunchEntry = (input: string) => {
    
    /* IMPORTANT NOTE: In the future, will also want to check the word is a valid word in our word list or another list */

    /* Filter out non-letters and ensure input is valid length */
    let newInput = 
    input.split('')
    .filter((char) => isLetter(char))
    .join('')
    .toLowerCase();

    return newInput.slice(0,5);
}

/* This is a helper function for making sure a character is in the alphabet */
function isLetter(char: string) {

    /* Filter out non-letters and ensure input is valid length */
    return char.match(/[a-z]/i);
}

/* This determines if a day has passed and therefore if a new game can be generated or not, simply uses local storage to see when user last played */
export const hasOneDayPassed = () => {

    /* get today's date. eg: "7/37/2007" */
    var date = new Date().toLocaleDateString();

    /* if there's a date in localstorage and it's equal to the above, do the following 
    inferring a day has yet to pass since both dates are equal. */
    if( localStorage.yourDate == date ) {
        return false;
    }

    /*  this portion of logic occurs when a day has passed */
    localStorage.yourDate = date;

    /* If you need to clear local storage during development, you can use the line below */
    // localStorage.clear();

    return true;
}

/* This is the countdown to tomorrow logic displayed at the end of the game */
export const getTomorrowForCountdown = () => {
    const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextDay = (index + 1) * msInDay + epochMs
    return nextDay;
}

/*
My thought process - this type of game would be simple to program. First, you pick a random word that's 5 letters long or so (for example, 'board'). Second, you write a function that randomly searches through a giant list of words until it finds 5 words that each contain a letter in 'board'. Third, you replace each of the 5 words to have the underline instead of the relevant letter (for example, breed -> _reed). Fourth, you just print the hint words on the screen and start the game
*/