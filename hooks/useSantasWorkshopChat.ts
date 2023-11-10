import { useState, useCallback } from "react";
import { useChat } from "ai/react";

function useSantasWorkshopChat() {
  const [channels] = useState([
    "General",
    "Elves",
    "Reindeers",
    "Robot Notifications",
  ]);

  // Use the useChat hook
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    // other properties and methods from useChat
  } = useChat({
    // Add any specific configurations here
    api: "/api/santas-workshop-chat", // Example API endpoint
    initialMessages: [
      // Initial messages specific to Santa's Workshop, if any...
    ],
    // other configurations...
  });

  // Additional logic specific to Santa's Workshop
  const customHandleSubmit = useCallback(
    (e: any) => {
      console.log(
        "hooks/useSantasWorkshopChat.ts",
        "customHandleSubmit",
        e,
        messages,
        input,
      );
      // Custom logic before submitting
      handleSubmit(e); // Call the original handleSubmit from useChat
      // Any post-submit logic
    },
    [handleSubmit],
  );

  return {
    channels,
    messages,
    input,
    handleInputChange,
    handleSubmit: customHandleSubmit,
    // other properties and methods from useChat
  };
}

export default useSantasWorkshopChat;
