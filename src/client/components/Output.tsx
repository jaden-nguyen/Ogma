import React from "react";

type outputProps = {
  transcript: string;
};

export default function Output({transcript}: outputProps) {
  return (
    <div className="output">
      <p>{transcript}</p>
    </div>
  );
}
