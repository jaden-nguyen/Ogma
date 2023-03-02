import React, { useState } from "react";
import { SavedProps, Transcript, SavedModuleProps } from "../../../types";
import Modal from "./Modal";

export default function SavedModule({
  transcripts,
  handleClose,
  handleTranscriptClick,
  selectedTranscript,
}: SavedModuleProps) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (transcript: any) => {
    handleTranscriptClick(transcript);
    console.log("selected", selectedTranscript);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Saved--module">
      <h1>Saved Transcripts</h1>
      <ul>
        {transcripts.map((transcript) => (
          <li
            key={transcript.id}
            onClick={(transcript) => handleOpenModal(transcript)}
          >
            {transcript.title}
          </li>
        ))}
      </ul>
      {showModal ? (
        <Modal transcript={selectedTranscript} handleClose={handleCloseModal} />
      ) : null}
    </div>
  );
}
