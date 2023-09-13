import React, { useEffect, useState } from 'react'
import Display from './Display'
import StartButton from './StartButton'
function Tetris() {
    const myStyle={
        backgroundColor : "black",
        width:"300px",
        margin:"auto",
        height:"500px"};

    const randomWord = () =>{
        const words = ["We","design","and","the","develop", "applications","that","run","world","showcase","future"];
        let ind = Math.floor(Math.random()*words.length);
        return words[ind];
    }
    const [score,setScore] = useState(0);
    const [nextWord,setNextWord] = useState(() => randomWord());

    useEffect(() => {

        const variable = setInterval(() => {
            let ele = document.createElement('p');
            ele.innerText= nextWord;
            document.getElementById('board').appendChild(ele);
            setNextWord(randomWord());
        },1500)
        const abc = setTimeout(() =>{
            clearInterval(variable)},
            2800);
            
            clearTimeout(abc);
        },[nextWord])
    // const moveWordsDown = () => {
    //     let top_pos = parseInt(ele.style.top) + 5;
    //     ele.style.top = `${top_pos}px`;
    // }
    // Move words down every 500ms (adjust timing as needed)
    // const moveWordsInterval = setInterval((ele) => {
    //   moveWordsDown(ele);
    //   if(ele.style.top >= document.getElementById("board").clientHeight){
    //     clearInterval(moveWordsInterval);
    //   }
    // }, 500);

  return (
    <>
    <div>
        <section>
            <div>
            <Display text={`Score: ${score}`}/>
            <Display text={`Next Word: ${nextWord}`}/>
            </div>
            <StartButton/>
        </section>
    </div>
    <div id='board' style={myStyle}>
        <p style={{textAlign:'center',color:'white'}}>
            {randomWord()}
        </p>
    </div>
    </>
  )
}

export default Tetris;