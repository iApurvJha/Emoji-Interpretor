import "./styles.css";
import { useState } from "react";

const emojiDict = {
  "😀": "Smiling",
  "😂": "laughing",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",

  "": ""
};

var emojiList = Object.keys(emojiDict);

export default function App() {
  function emojiListInterpret(item) {
    var meaning = item + emojiDict[item];
    setState(meaning);
    // 🤑😛
  }
  function emojiHandler(event) {
    var meaning = emojiDict[event.target.value];
    if (meaning === undefined) {
      meaning = event.target.value + " It's not in our database";
      setState(meaning);
    } else {
      meaning = event.target.value + emojiDict[event.target.value];
      setState(meaning);
    }
  }

  var [emojiState, setState] = useState("");

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={emojiHandler} type="text" />
      <div>
        <h1>{emojiState}</h1>
      </div>
      <div>
        {emojiList.map(function (item) {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => emojiListInterpret(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
