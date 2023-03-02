import React, { useState, useEffect } from "react";
import "../styles/Saved.css";
// import "../styles/Modal.css";
import { SavedProps, Transcript } from "../../../types";

const Saved: React.FC<SavedProps> = ({ userId }) => {
  const [selectedTranscript, setSelectedTranscript] =
    useState<Transcript | null>(null);

  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // fetch(`/api/users/${userId}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTranscripts(data);
    //   });
    setTranscripts([
      {
        id: 1,
        title: "Lorem ipsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        title: "test2",
        text: "This is a test transcript 2",
      },
    ]);
  }, []);

  const handleTranscriptClick = (transcript: Transcript) => {
    setSelectedTranscript(transcript);
    setShowModal(true);
  };

  return (
    <>
      <div className="Saved--module">
        <ul className="ulSaved">
          {transcripts.map((transcript) => (
            <li
              key={transcript.id}
              onClick={() => handleTranscriptClick(transcript)}
            >
              <h2 style={{ fontWeight: "600" }}>{transcript.title}</h2>
            </li>
          ))}
        </ul>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setShowModal(false)}>Close</button>
            <span className="close" onClick={() => setShowModal(false)}></span>
            <h2>{selectedTranscript.title}</h2>
            <p>{selectedTranscript.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Saved;
