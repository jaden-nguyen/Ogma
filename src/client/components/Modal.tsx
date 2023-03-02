import React from "react";
import { Transcript, ModalProps } from "../../../types";
import "../styles/Modal.css";

export default function Modal({ transcript, handleClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>{transcript.title}</h2>
        <p>{transcript.text}</p>
      </div>
    </div>
  );
}
