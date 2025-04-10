import "./App.css";
import { useState , useEffect} from "react";
import Streak from "./Streak.jsx";
import Meaning from "./Meaning.jsx";
import Smallbox from "./Smallbox.jsx";
import axios from 'axios'
function App() {
const [words,setWords]=useState([])
useEffect(()=>{
  axios.get('/words')
.then((response)=>{
  setWords(response.data)
})
.catch((error)=>{
  console.log(error)
})
})
const [word,setWord]=useState([])
let [wordCount, setwordCount] = useState(0);
useEffect(() => {
  if (words.length > 0 && wordCount < words.length) {
    setWord(words[wordCount]);
  }
}, [words, wordCount]); // Depend on words & wordCount

  function next() {
    wordCount = wordCount + 1;
    setwordCount(wordCount);
  }
  return (
<>
    <div className="backGround">

      <div className="streak">
        <Streak wordCount={wordCount + 1} />
      </div>
      <div className="mainContent">
        <Meaning
          word={word.name}
          meaning={word.meaning}
        />
        <div>
        <Smallbox value="Synonym" nym={word?.synonym || "N/A"} />
        <Smallbox value="Antonym" nym={word?.antonym || "N/A"} />
        </div>
      </div>

      <button className="nextButton" onClick={next}>
        NEXT <span class="material-symbols-outlined">double_arrow</span>
      </button>
    </div>
    </>
  );
}

export default App;
