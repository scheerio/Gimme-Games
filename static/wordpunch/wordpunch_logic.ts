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

    console.log(answer);

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

/*
My thought process - this type of game would be simple to program. First, you pick a random word that's 5 letters long or so (for example, 'board'). Second, you write a function that randomly searches through a giant list of words until it finds 5 words that each contain a letter in 'board'. Third, you replace each of the 5 words to have the underline instead of the relevant letter (for example, breed -> _reed). Fourth, you just print the hint words on the screen and start the game
*/