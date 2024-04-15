import React, { useReducer,useEffect} from 'react';
import './Home.css'

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      const newText = action.payload;
      return { 
        text: newText,
        wordCount: newText.trim().split(/\s+/).filter(Boolean).length,
        charCount: newText.length,
        readingTime: calculateReadingTime(newText)
      };

    case 'uppercase':
      return { ...state, text: state.text.toUpperCase() };

    case 'lowercase':
      return { ...state, text: state.text.toLowerCase() };

    case 'clear':
      return { text: '', wordCount: 0, charCount: 0, readingTime: 0 };

    // case 'copy':
    //   // Copy text to clipboard
    //   if (navigator.clipboard && navigator.clipboard.writeText) {
    //     navigator.clipboard.writeText(state.text);
    //   }
    //   return state;
    case 'copy':
    // Copy text to clipboard using navigator.clipboard if available, or fallback to document.execCommand()
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(state.text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = state.text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    return state;
    case 'removeExtraSpaces':
      const words = state.text.split(' ').filter(Boolean);
      const newTextWithoutExtraSpaces = words.join(' ');
      return { ...state, text: newTextWithoutExtraSpaces };

    default:
      return state;
  }
}

const calculateReadingTime = (text) => {
    //reading time based on an average reading time
    const wordsPerMinute = 200;
    const averageWordReadingTime = 60 / wordsPerMinute; // Time to read one word in seconds
  
    // Count the number of words in the text
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  
    // Calculate the total reading time based on the number of words
    const totalReadingTime = wordCount * averageWordReadingTime;
  
    return totalReadingTime;
  };
  

const Home = ({ setTextForDownload }) => {
  const initialvalue = {
    text: '',
    wordCount: 0,
    charCount: 0,
    readingTime: 0
  };

  const [state, dispatch] = useReducer(reducer, initialvalue);

  useEffect(() => {
    setTextForDownload(state.text);
  }, [state.text, setTextForDownload]);

  return (
    <div className='home_main_part'>
      <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      <h2>Enter Your Text Here:</h2>
      <textarea className='textarea1'
        style={{padding : "5px"}}
        id="textareavalue"
        value={state.text}
        onChange={(e) => {
          dispatch({ type: 'change', payload: e.target.value });
        }}
        rows={'6'}
        cols={'40'}
        placeholder="Enter Your Text...."
      ></textarea>
      <div>
        <button className='btn_color' onClick={() => { dispatch({ type: 'uppercase' }); }}>
          Convert Uppercase
        </button>
        <button className='btn_color' onClick={() => { dispatch({ type: 'lowercase' }); }}>
          Convert Lowercase
        </button>
        <button className='btn_color' onClick={() => { dispatch({ type: 'clear' }); }}>
          Clear Text
        </button>
        <button className='btn_color' onClick={() => { dispatch({ type: 'copy' }); }}>
          Copy To Clipboard
        </button>
        <button className='btn_color' onClick={() => { dispatch({ type: 'removeExtraSpaces' }); }}>
          Remove Extra Spaces
        </button>
      </div>

      <h2 id='summary'>Summary Of Your Text</h2>

      <h3 className='count_text'>Number of Words: {state.wordCount}</h3>
      <h3 className='count_text'>Number of Characters: {state.charCount}</h3>
      <h3 className='count_text'>Reading Time: {state.readingTime} Second</h3>
        <br></br>
      <h2 id='preview_text'>Preview Document</h2>
      <textarea style={{padding : "5px"}} value={state.text} rows={'7'} cols={'40'}></textarea>
    </div>
  );
};

export default Home;