import React, { useRef, useEffect, useState } from 'react'
import InstructionsModal from '../components/InstructionsModal';
import Layout from '../components/Layout';
import { getWordpunchGameData, validateWordpunchEntry } from '../static/wordpunch/wordpunch_logic';

type Props = {}

function Game({}: Props) {

  const [modalOpen, setModalOpen] = useState(true);
  const [triesLeft, setTriesLeft] = useState(3);
  const [input, setInput] = useState('');
  const [dialog, setDialog] = useState('Good luck guessing this word');
  const [gameData, setGameData] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');
  const [didWinGame, setDidWinGame] = useState(false);
  const [didLoseGame, setDidLostGame] = useState(false);
  const [lastSubmission, setLastSubmission] = useState('');

  useEffect(()=>{
    const currentGameData: string[] = getWordpunchGameData();
    const currentAnswer: string = currentGameData.shift() || '';
    setGameData(currentGameData);
    setAnswer(currentAnswer);
  }, []);

  const wordpunchInputRef = useRef<HTMLInputElement>(null);

  const wrongGuessDialogs = ['Nope, try again', 'You might be close', 'No, guess again'];
  const lostGameDialogs = ['Better luck next time 😭', 'Aw shoot, you lost 😭', 'You lost, but good game 😭'];

  const handleExitModal = () => {
    setModalOpen(!modalOpen);
    wordpunchInputRef?.current?.focus();
  }

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validatedInput = validateWordpunchEntry(e.target.value);
    setInput(validatedInput);
  }

  const handleEnterInput = () => {
    if (input.length == answer.length && triesLeft > 0 && !didWinGame) {
      //check if correct -> handle that with function. else do this:
      if (input == answer){
        setDidWinGame(true);
        setDialog(`You did it! 🎉 Answer: ${answer}`);
      } else if (triesLeft == 1){
        setDialog(lostGameDialogs[Math.floor(Math.random() * lostGameDialogs.length)]);
        setDidLostGame(true);
      } else {
        setDialog(wrongGuessDialogs[Math.floor(Math.random() * wrongGuessDialogs.length)]);
        wordpunchInputRef?.current?.focus();
      }
      handleSubtractTries();
      setLastSubmission(input)
      setInput('');
    }
  }

  const handleSubtractTries = () => {
    setTriesLeft(prev=>prev-1);
  }

  const displayLoseModal = () => {
    //use this to display a new LostGameModal
  }

  return (
    <>
      {modalOpen ? <InstructionsModal handleExitModal={handleExitModal}/> : null}
      <Layout>
        <div className="h-fit text-white p-10 bg-black overflow-x-hidden flex flex-col justify-center items-center">
          <h1 className="text-3xl">Wordpunch</h1>
          <p className="p-1 text-green-500 text-xl">{dialog}</p>
          <ol className="mt-1 mb-3 flex flex-col justify-center items-center text-2xl">
            {
              gameData.map((word, i)=>{
                let splitWord = word.split(' ');
                console.log(word);
                console.log(splitWord);
                return (
                  (i < input.length && !didWinGame && !didLoseGame)
                  ? <div className="m-1 p-1 bg-white rounded w-fit" key={word}>
                      <li className="text-black"><span>{splitWord[0]}</span><span className="text-green-500 font-semibold">_</span><span>{splitWord[1]}</span></li>
                    </div>
                  : (didLoseGame && lastSubmission[i] == answer[i])
                  ? <div className="m-1 p-1 bg-green-500 rounded w-fit" key={word}>
                      <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                    </div>
                  : (didLoseGame && lastSubmission[i] != answer[i])
                  ? <div className="m-1 p-1 bg-red-500 rounded w-fit" key={word}>
                      <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                    </div>
                  : (lastSubmission[i] == answer[i] || didWinGame) 
                  ? <div className="m-1 p-1 bg-green-500 rounded w-fit" key={word}>
                      <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                    </div>
                  : <div className="m-1 p-1 bg-black rounded w-fit" key={word}>
                      <li className="text-white"><span>{splitWord[0]}</span><span className="text-green-500 font-semibold">_</span><span>{splitWord[1]}</span></li>
                    </div>
                );
              })
            }
          </ol>
          <div>
            <div className="mt-3 flex flex-col justify-center items-center">
              <div className="flex flex-row">
                <input autoFocus className="w-40 text-center outline-0 pb-1 bg-gray-600 bg-opacity-60 rounded text-4xl" onChange={e => handleInputChanged(e)} value={input} placeholder='guess' ref={wordpunchInputRef}></input>
                <button className="text-xl ml-3 p-5 text-black border-2 border-green-500 transform duration-300 content-center bg-transparent hover:bg-green-500 bg-green-200 font-semibold hover:text-black hover:border-transparent rounded" onClick={handleEnterInput}>Enter</button>
              </div>
              <div className="mt-4 flex flex-row text-xl">
                <p className="text-green-500">Tries left:</p>
                <p className="text-white ml-2">{triesLeft}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Game;