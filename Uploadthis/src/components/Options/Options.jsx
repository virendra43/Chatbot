import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "How to place the order?",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    {
      text: "Explore Menu",
      handler: props.actionProvider.handleJavascriptList,
      id: 2,
    },
    { text: "Give feedback", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
