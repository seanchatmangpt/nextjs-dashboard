// SpeechContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import "regenerator-runtime/runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

interface SpeechContextType {
  listening: boolean;
  transcript: string;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);
SpeechContext.displayName = "SpeechContext"; // Set the displayName

export const useSpeechContext = (): SpeechContextType => {
  const context = useContext(SpeechContext);
  if (!context) {
    throw new Error("speechContext must be used within a SpeechProvider");
  }
  return context;
};

interface SpeechProviderProps {
  children: ReactNode;
}

export const SpeechProvider = ({ children }: SpeechProviderProps) => {
  const [listening, setListening] = useState(false);

  const { transcript, resetTranscript: resetSpeechRecognitionTranscript } =
    useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening();
    setListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setListening(false);
  };

  const resetTranscript = () => {
    resetSpeechRecognitionTranscript();
  };

  console.log("hooks/SpeechContext.tsx", "transcript", transcript);

  return (
    <SpeechContext.Provider
      value={{
        listening,
        transcript,
        startListening,
        stopListening,
        resetTranscript,
      }}
    >
      {children}
    </SpeechContext.Provider>
  );
};
