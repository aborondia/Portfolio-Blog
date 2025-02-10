import React, { createContext, useContext, useEffect, useState } from "react";
import ServerCommunicator from "./ServerCommunicator.js";
import TextBlock from "../dataTransferModels/TextBlock.js";

const TextBlocksContext = createContext();

export const TextBlocksProvider = ({ children }) => {
  const [textInfo, setTextInfo] = useState([]);
  const [loadingText, setLoadingText] = useState(true);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingText(true);
      setErrorText(null);

      try {
        const rawText = await ServerCommunicator.fetchTextBlocks();
        let deserializedTextBlocks = rawText.map(
          (textData) => new TextBlock(textData)
        );
        setTextInfo(deserializedTextBlocks);
      } catch (error) {
        setErrorText(error);
        console.error("Error fetching text blocks:", error);
      } finally {
        setLoadingText(false);
      }
    };

    fetchData();
  }, []);

  return (
    <TextBlocksContext.Provider value={{ textInfo, loadingText, errorText }}>
      {children}
    </TextBlocksContext.Provider>
  );
};

export const useTextBlocks = () => useContext(TextBlocksContext);
