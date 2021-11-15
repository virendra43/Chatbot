import React, { useState } from "react";

import FlashCard from "./FlashCard";
import "./LinkList.css";

const Quiz = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));

  const currentQuestion = props.questions[questionIndex];

  if (!currentQuestion) {
    return <p>Thank You😊 </p>;
  }

  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};
const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default Quiz;
