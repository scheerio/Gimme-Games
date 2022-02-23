import React, { useRef, useEffect, useState } from 'react'
import InstructionsModal from '../components/InstructionsModal';
import Layout from '../components/Layout';
import { getTomorrowForCountdown, getWordpunchGameData, hasOneDayPassed, validateWordpunchEntry } from '../static/wordpunch/wordpunch_logic';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from '../styles/Wordpunch.module.css';
import { WRONG_GUESS_DIALOGS, WRONG_BUT_CLOSE_GUESS_DIALOGS, LOST_GAME_DIALOGS, WON_GAME_DIALOG } from '../static/wordpunch/wordpunch_constants';
import Countdown from 'react-countdown';
import ReactTooltip from 'react-tooltip';

type Props = {}

function Wordpunch({}: Props) {

  const [modalOpen, setModalOpen] = useState(true);
  const [triesLeft, setTriesLeft] = useState(5);
  const [input, setInput] = useState('');
  const [dialog, setDialog] = useState('Good luck guessing this word');
  const [gameData, setGameData] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');
  const [didWinGame, setDidWinGame] = useState(false);
  const [didLoseGame, setDidLoseGame] = useState(false);
  const [lastSubmission, setLastSubmission] = useState('');

  useEffect(()=>{
    // const currentGameData: string[] = getWordpunchGameData();
    // const currentAnswer: string = currentGameData.shift() || '';
    // setGameData(currentGameData);
    // setAnswer(currentAnswer);

    if (!hasOneDayPassed()){
        console.log('using local storage')
        setDidWinGame(JSON.parse(localStorage.getItem('winStatus') || 'false'));
        setDidLoseGame(JSON.parse(localStorage.getItem('loseStatus') || 'false'));
        setTriesLeft(JSON.parse(localStorage.getItem('triesLeft') || '5'));
        setGameData(JSON.parse(localStorage.getItem('currentGameData') || '[]'));
        setAnswer(JSON.parse(localStorage.getItem('currentAnswer') || ''));
        setDialog(JSON.parse(localStorage.getItem('currentDialog') || 'Good luck guessing this word'));
        setModalOpen(JSON.parse(localStorage.getItem('currentModalOpenStatus') || 'true'));
        setLastSubmission(JSON.parse(localStorage.getItem('lastSubmission') || ''));
    } else {
        const currentGameData: string[] = getWordpunchGameData();
        const currentAnswer: string = currentGameData.shift() || '';
        setGameData(currentGameData);
        setAnswer(currentAnswer);
        localStorage.setItem('winStatus', JSON.stringify(didWinGame));
        localStorage.setItem('loseStatus', JSON.stringify(didLoseGame));
        localStorage.setItem('triesLeft', JSON.stringify(triesLeft));
        localStorage.setItem('currentGameData', JSON.stringify(gameData));
        localStorage.setItem('currentAnswer', JSON.stringify(answer));
        localStorage.setItem('currentDialog', JSON.stringify(dialog));
        localStorage.setItem('currentModalOpenStatus', JSON.stringify(modalOpen));
        localStorage.setItem('lastSubmission', JSON.stringify(lastSubmission));
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('winStatus', JSON.stringify(didWinGame));
    localStorage.setItem('loseStatus', JSON.stringify(didLoseGame));
    localStorage.setItem('triesLeft', JSON.stringify(triesLeft));
    localStorage.setItem('currentGameData', JSON.stringify(gameData));
    localStorage.setItem('currentAnswer', JSON.stringify(answer));
    localStorage.setItem('currentDialog', JSON.stringify(dialog));
    localStorage.setItem('currentModalOpenStatus', JSON.stringify(modalOpen));
    // localStorage.setItem('lastSubmission', JSON.stringify(lastSubmission));
  }, [triesLeft])

  useEffect(()=>{
    localStorage.setItem('lastSubmission', JSON.stringify(lastSubmission));
  }, [lastSubmission])

  const wordpunchInputRef = useRef<HTMLInputElement>(null);

  const handleExitModal = () => {
    setModalOpen(!modalOpen);
    if (!didLoseGame || !didWinGame){
      wordpunchInputRef?.current?.focus();
    }
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
        setDialog(`${WON_GAME_DIALOG} ${answer}`);
      } else if (triesLeft == 1){
        setDialog(LOST_GAME_DIALOGS[Math.floor(Math.random() * LOST_GAME_DIALOGS.length)]);
        setDidLoseGame(true);
      } else {
        let gotSomeOfAnswer = false;
        for (let i = 0; i < input.length; i++){
            if (answer[i] == input[i]){
                gotSomeOfAnswer = true;
                break;
            }
        }
        if (gotSomeOfAnswer){
            setDialog(WRONG_BUT_CLOSE_GUESS_DIALOGS[Math.floor(Math.random() * WRONG_BUT_CLOSE_GUESS_DIALOGS.length)]);
        } else {
            setDialog(WRONG_GUESS_DIALOGS[Math.floor(Math.random() * WRONG_GUESS_DIALOGS.length)]);
        }
        wordpunchInputRef?.current?.focus();
      }
      setTriesLeft(prev=>prev-1);
      setLastSubmission(input)
      setInput('');
    }
  }

  const getShareText = () => {
      const URL = window.location.href;
      let shareText = '';
      let resultGraphic = '';
      for (let i = 0; i < lastSubmission.length; i++){
        if (answer[i] == lastSubmission[i]){
            resultGraphic += '🟩';
        } else {
            resultGraphic += '🟥';
        }
      }
      if (didLoseGame) {
        shareText = `I lost at Wordpunch today 😭 ${resultGraphic} but maybe you can win: ${URL}`;
      } else if (didWinGame){
        shareText = `I won at Wordpunch with ${triesLeft} tries left 🎉 ${resultGraphic} play it here: ${URL}`;
      }
      navigator.clipboard.writeText(shareText);
      setTimeout(ReactTooltip.hide, 3000)
  }

  const displayLoseModal = () => {
    //use this to display a new LostGameModal
  }

  return (
    <>
      {modalOpen ? <InstructionsModal handleExitModal={handleExitModal}/> : null}
      <Layout>
        <div className="h-screen text-white p-10 bg-black overflow-x-hidden flex flex-col items-center">
          <h1 className="text-3xl mt-10">Wordpunch</h1>
          <p className="p-1 text-xl text-green-500">{dialog}</p>
          <div className="">
            <div className="mt-3 flex flex-col justify-center items-center">
              {(!didLoseGame && !didWinGame) && <div className="flex flex-row">
                <input className="w-40 text-center outline-0 pb-1 bg-gray-600 bg-opacity-60 rounded text-4xl text-white" onChange={e => handleInputChanged(e)} value={input} spellCheck='false' placeholder='guess' ref={wordpunchInputRef} aria-label="Type guess here" aria-required="true"></input>
                {
                    (input.length == answer.length && !didWinGame && !didLoseGame)
                    ? <button className="text-xl ml-5 p-5 text-white border-2 text-white border-green-500 transform duration-300 content-center hover:border-transparent bg-green-500 font-semibold rounded" onClick={handleEnterInput}>Enter</button>
                    : <button disabled className="text-xl ml-5 p-5 border-2 border-green-500 text-white transform duration-300 content-center bg-transparent font-semibold rounded" onClick={handleEnterInput}>Enter</button>
                }
              </div>}
              <div className="mt-3 flex flex-row text-xl">
                    <p className="text-white">Tries left:</p>
                    {
                        (triesLeft == 0) 
                        ? <p className="text-white ml-2">{triesLeft}</p>
                        : <p className="text-green-500 ml-2">{triesLeft}</p>
                    }
                </div>
              <div className="mt-4 flex flex-row text-xl">
                {(!didWinGame && !didLoseGame) && <p className="text-white font-semibold">Hints:</p>}
              </div>
            {/* <TransitionGroup component="ol" className="mt-1 mb-3 flex flex-col justify-center items-center text-2xl"> */}
            <ol className="mt-2 mb-3 flex flex-row justify-center items-center text-xl">
                {
                gameData.map((word, i)=>{
                    let splitWord = word.split(' ');
                    return (
                    //Look into this below
                    //   <CSSTransition key={word} appear={true} timeout={2000} classNames={styles.hint}>
                    <div key={word}>
                    {(i < input.length && !didWinGame && !didLoseGame)
                    ? <div className="m-1 p-1 bg-white rounded w-fit border border-white">
                        <li className="text-black"><span>{splitWord[0]}</span><span className="text-green-500 font-semibold text-sm">_</span><span>{splitWord[1]}</span></li>
                        </div>
                    : (didLoseGame && lastSubmission[i] == answer[i])
                    ? <div className="m-1 p-1 bg-green-500 rounded w-fit border-r-2 border-green-500 border-l-2 border-green-500 border-t border-green-500 border-b border-green-500">
                        <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                        </div>
                    : (didLoseGame && lastSubmission[i] != answer[i])
                    ? <div className="m-1 p-1 bg-red-500 rounded w-fit border-r-2 border-red-500 border-l-2 border-red-500 border-t border-red-500 border-b border-red-500">
                        <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                        </div>
                    : (lastSubmission[i] == answer[i] || didWinGame) 
                    ? <div className="m-1 p-1 bg-green-500 rounded w-fit border-r-2 border-green-500 border-l-2 border-green-500 border-t border-green-500 border-b border-green-500">
                        <li className="text-black"><span>{splitWord[0]}</span><span className="text-white font-semibold">{answer[i]}</span><span>{splitWord[1]}</span></li>
                        </div>
                    : <div className="m-1 p-1 bg-black rounded w-fit border border-white">
                        <li className="text-white"><span>{splitWord[0]}</span><span className="text-green-500 font-semibold text-sm">_</span><span>{splitWord[1]}</span></li>
                        </div>}
                    </div>
                    // </CSSTransition>
                    );
                })
                }
            {/* </TransitionGroup> */}
            </ol>
            {(didLoseGame || didWinGame) &&
                <div className="flex flex-col items-center">
                    <div className="mt-2 flex flex-row text-xl">
                        Next game starts in:
                        <Countdown
                            className="text-xl font-semibold ml-2 text-green-500"
                            date={getTomorrowForCountdown()}
                            daysInHours={true}
                        />
                    </div> 
                    <button onClick={getShareText} data-tip='Copied to clipboard!' data-background-color='white' data-event='click' data-event-off='dblclick' type="button" className="p-2 mt-6 bg-white w-fit text-black rounded font-semibold text-xl border-2 border-green-500">Share Results 💬</button>
                    <ReactTooltip place="top" effect="solid" className="font-semibold" textColor='black' backgroundColor='white' afterShow={() => { getShareText() }}/>
                </div>
            }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Wordpunch;