import { SetStateAction } from "react";

export interface SavedProps {
    userId: number;
  }
  
export interface Transcript {
    id: number;
    title: string;
    text: string;
}

export interface SavedModuleProps {
    handleClose: () => void;
    transcripts: Transcript[];
    setSelectedTranscript: (transcript: Transcript) => void;
    handleTranscriptClick: (transcript: Transcript) => void;
    selectedTranscript: Transcript;
}

export interface User {
    username: string;
    password: string;
}


export type LoginProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: (newValue: boolean) => void;
    // setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}