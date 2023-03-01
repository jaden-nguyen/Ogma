import React, { useState } from "react";
import Output from "../components/Output";
import "../styles/Home.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Record() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // states

  const [isListening, setIsListening] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [title, setTitle] = useState("");

  function handleRecord() {
    setIsListening(true);
    setIsSaved(false);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  }

  function handleStop() {
    SpeechRecognition.stopListening();
    setIsListening(false);
  }

  function handleSave() {
    if (title === "") {
      alert("Please enter a title for your recording.");
      return;
    }
    console.log("saved");
    setIsSaved(true);
  }

  function handleUnsave() {
    console.log("unsaved");
    setIsSaved(false);
  }

  return (
    <>
      <section id="record-section">
        {isListening ? (
          <button
            className="stoprecording"
            id="stop"
            onClick={() => handleStop()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M2 2h20v20h-20z" />
            </svg>
          </button>
        ) : (
          <button className="microphone" onClick={() => handleRecord()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M16 10c0 2.209-1.791 4-4 4s-4-1.791-4-4v-6c0-2.209 1.791-4 4-4s4 1.791 4 4v6zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13.03v-2.03h-2v2.03c-2.282.139-4 .744-4 1.47 0 .829 2.238 1.5 5 1.5s5-.671 5-1.5c0-.726-1.718-1.331-4-1.47z" />
            </svg>
          </button>
        )}

        {transcript ? (
          isSaved ? (
            <button className="saved" id="true" onClick={() => handleUnsave()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 0l3.668 8.155 8.332 1.151-6.064 5.828 1.48 8.866-7.416-4.554-7.417 4.554 1.481-8.866-6.064-5.828 8.332-1.151z" />
              </svg>
            </button>
          ) : (
            <button className="saved" id="false" onClick={() => handleSave()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.876l2.298 5.109 5.342.737-3.851 3.7.931 5.575-4.72-2.897-4.72 2.898.931-5.575-3.851-3.7 5.342-.737 2.298-5.11zm0-4.876l-3.668 8.155-8.332 1.151 6.064 5.828-1.48 8.866 7.416-4.554 7.416 4.554-1.48-8.866 6.064-5.828-8.332-1.15-3.668-8.156z" />
              </svg>
            </button>
          )
        ) : (
          <></>
        )}
      </section>
      <div className="title-box">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="title"
          type="text"
          placeholder="Enter recording title..."
        />
      </div>
      <div className="output-box">
        <Output transcript={transcript} />
      </div>
    </>
  );
}
