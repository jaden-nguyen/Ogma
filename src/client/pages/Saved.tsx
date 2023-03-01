import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../styles/Saved.css";
import SavedModule from "../components/SavedModule";
import { SavedProps, Transcript } from "../../../types";

const Saved: React.FC<SavedProps> = ({ userId }) => {
  const [selectedTranscript, setSelectedTranscript] = useState(null);

  const [transcripts, setTranscripts] = useState<Transcript[]>([]);

  useEffect(() => {
    // fetch(`/api/users/${userId}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setTranscripts(data);
    //   });
    setTranscripts([
      {
        id: 1,
        title: "test",
        text: "This is a test transcript",
      },
    ]);
  }, []);

  const handleTranscriptClick = (transcript: Transcript): void => {
    setSelectedTranscript(transcript);
    console.log(transcript);
  };

  const handleClose = (): void => {
    setSelectedTranscript(null);
  };

  return (
    <>
      <SavedModule
        transcripts={transcripts}
        handleClose={handleClose}
        selectedTranscript={selectedTranscript}
        setSelectedTranscript={setSelectedTranscript}
        handleTranscriptClick={handleTranscriptClick}
      />
    </>
  );
};

export default Saved;
