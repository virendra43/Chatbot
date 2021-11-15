import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import { useState } from "react";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {show ? (
        <div style={{ maxWidth: "300px" }}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      ) : null}
      <button Class="helpdesk" onClick={() => setShow(!show)}>
        👩‍💻
        <title>Helpdesk</title>
      </button>
    </div>
  );
}

export default App;
