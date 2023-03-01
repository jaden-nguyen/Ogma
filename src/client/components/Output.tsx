import React from "react";

type outputProps = {
  transcript: string;
};

export default function Output(props: outputProps) {
  return (
    <div className="output">
      <p>{props.transcript}</p>
    </div>
  );
}
