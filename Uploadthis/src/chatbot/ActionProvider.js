class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello");
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Okay cool! There are two ways in which you can place the order",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "What would you like to have today?",
      {
        widget: "javascriptLinks",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
