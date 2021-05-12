
import React, { useState, useEffect } from 'react';

import beforeImg from '../assets/before.svg';
import afterImg from '../assets/after.svg';

import './index.less';

export default () => {
  const newRecognition = new window.webkitSpeechRecognition();
  const [talkList, setTalkList] = useState([]);
  const [isListening, setIsListening] = useState(false);
  newRecognition.continuous = true;

  newRecognition.onresult = async function (event) {
    console.log(event.results[0][0].transcript, 'onresult');
    const result = event.results[0][0].transcript;
    setTalkList([...talkList, result]);
    const reply = await fetch(
      `http://api.qingyunke.com/api.php?key=free&appid=0&msg=${result}`,
      {
        headers: {
          'Access-Control-Allow-Origin': 'no-cors'
        }
      }
    );
    console.log(reply);
    // const utterThis = new window.SpeechSynthesisUtterance(
    //   '对不起, 我不知道您在说什么'
    // );
    // window.speechSynthesis.speak(utterThis);
    // setTalkList([...talkList, reply]);
  };

  useEffect(() => {
    window.onkeydown = function (e) {
      if (e.code === 'ShiftLeft') {
        setIsListening(true);
        newRecognition.stop();
        newRecognition.start();
      }
    };
    window.onkeyup = function (e) {
      if (e.code === 'ShiftLeft') {
        setIsListening(false);
        newRecognition.stop();
      }
    };
  }, []);
  return <div className="container">
    <header>按 左-shift 键对话</header>
    <div className="content">
      {talkList.map(item => <div>
        <span className="dialog">{ item }</span>
      </div>)}
    </div>
    <footer>
      <img src={isListening ? afterImg : beforeImg} alt="" />
    </footer>
  </div>;
}