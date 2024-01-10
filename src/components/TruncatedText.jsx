import React from "react";

const TruncatedText = ({ text, maxWords }) => {
  const words = text.split(" ").slice(0, maxWords);
  const truncatedText = words.join(" ");

  // console.log("max word", words);
  return (
    <p className="text-sm text-gray-500">
      {truncatedText} {words.length < text.split(" ").length ? "..." : ""}
    </p>
  );
};

export default TruncatedText;
