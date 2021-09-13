import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "🇮🇳": "India",
    "🇮🇱": "Isreal",
    "🇯🇵": "Japan",
    "🇰🇵": "North Korea",
    "🇵🇰": "Pakistan",
    "🇶🇦": "Qatar",
    "🇸🇦": "Saudi Arabia",
    "🇪🇸": "Spain",
    "🇹🇷": "Turkey",
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
    "🇺🇸": "United States of America"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  var [emojiMeaning, setEmojiMeaning] = useState(" ");

  function emojiTranslator(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This is not in our DataBase";
    }
    setEmojiMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Flag Interpreter </h1>
      <input onChange={emojiTranslator} />
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {" "}
        the meaning is: {emojiMeaning}{" "}
      </div>
      <h3 style={{ fontSize: "2rem" }}> Emoji's We Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ padding: "2rem", fontSize: "3rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
