import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import LinkList from "../components/LinkList/LinkList";

const config = {
  botName: "HelpDesk",
  initialMessages: [
    createChatBotMessage(`Hi, How Can I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "1) Via app/website",
            answer:
              "Select the contents from the menu and then review the cart and proceed to checkout.",
            id: 1,
          },
          {
            question: "2) Via Phone Call",
            answer:
              "Call on the given no. below and place your order 91-XXXXXXXXXX",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Beverages",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Pizza",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Desserts",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
