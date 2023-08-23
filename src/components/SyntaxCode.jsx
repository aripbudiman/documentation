import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SyntaxCode = ({ codeString, language }) => {
  const [copy, setCopy] = useState(false);
  return (
    <div className="bg-customGray-3 rounded-md overflow-hidden my-3">
      <div className="flex justify-between text-white px-4 py-1 text-xs">
        <p className="text-base">Source Code</p>
        {copy ? (
          <button className="text-xs item-center gap-1">
            <span className="mr-2">
              <i class="fa-solid fa-check"></i>
            </span>
            Copied!
          </button>
        ) : (
          <button
            className="text-xs item-center gap-1"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1500);
            }}
          >
            <span className="mr-2">
              <i className="fa-regular fa-clipboard"></i>
            </span>
            Copy code
          </button>
        )}
      </div>
      <SyntaxHighlighter language={language} style={atomOneDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxCode;
