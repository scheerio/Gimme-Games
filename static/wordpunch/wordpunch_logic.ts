import { WORDS } from "./wordpunch_wordlist";

export const getWordpunchGameData = () => {

    const answer: string = WORDS[Math.floor(Math.random() * WORDS.length)];
    let hintsList: string[] = [];

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

    if (hintsList.length < answer.length){
        getWordpunchGameData();
    }

    return [answer, ...hintsList];
}

export const validateWordpunchEntry = (input: string) => {
    //also need to check if in word list
    let newInput = 
    input.split('')
    .filter((char) => isLetter(char))
    .join('')
    .toLowerCase();

    return newInput.slice(0,5);
}

function isLetter(char: string) {
    return char.match(/[a-z]/i);
}

export const hasOneDayPassed = () => {
    // // get today's date. eg: "7/37/2007"
    var date = new Date().toLocaleDateString();

    // if there's a date in localstorage and it's equal to the above: 
    // inferring a day has yet to pass since both dates are equal.
    if( localStorage.yourDate == date ) {
        return false;
    }

    // this portion of logic occurs when a day has passed
    localStorage.yourDate = date;
    return true;
}

export const getTomorrowForCountdown = () => {
    const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay)
    const nextday = (index + 1) * msInDay + epochMs
    return nextday;
}

/*
My thought process - this type of game would be simple to program. First, you pick a random word that's 5 letters long or so (for example, 'board'). Second, you write a function that randomly searches through a giant list of words until it finds 5 words that each contain a letter in 'board'. Third, you replace each of the 5 words to have the underline instead of the relevant letter (for example, breed -> _reed). Fourth, you just print the hint words on the screen and start the game
*/