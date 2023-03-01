import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { SavedProps, Transcript, SavedModuleProps } from "../../../types";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function SavedModule({
  transcripts,
  handleClose,
  setSelectedTranscript,
  handleTranscriptClick,
  selectedTranscript,
}: SavedModuleProps) {
  return (
    <div className="Saved--module">
      <h1>Saved Transcripts</h1>
      <ul>
        {transcripts.map((transcript) => (
          <li
            key={transcript.id}
            onClick={() => handleTranscriptClick(transcript)}
          >
            {transcript.title}
          </li>
        ))}
      </ul>
      {selectedTranscript ? (
        <Modal show={selectedTranscript !== null} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{selectedTranscript.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Transcript:{selectedTranscript.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}
