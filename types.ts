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