exports.handleMessage = (req, res) => {
    const { userMessage } = req.body;
    const userInput = userMessage.toLowerCase().trim();
  
    let response;
  
    // Chatbot response logic
    if (userInput.includes('hello') || userInput.includes('hi')) {
      response = 'Hi there! How can I help you today?';
    } else if (userInput.includes('how are you')) {
      response = 'I am just a bot, but I am functioning perfectly! How about you?';
    } else if (userInput.includes('fine')) {
      response = 'Great to hear that!';
    } else if (userInput.includes('thank you') || userInput.includes('thanks')) {
      response = 'You’re welcome! Is there anything else I can help you with?';
    } else if (userInput.includes('bye')) {
      response = 'Goodbye! Have a great day!';
    } else if (userInput.includes('help')) {
      response = 'Sure, I’m here to help! Can you tell me more about what you need assistance with?';
    } else if (userInput.includes('your name')) {
      response = 'I am your friendly chatbot! You can call me ChatBot.';
    } else if (userInput.includes('weather')) {
      response = 'I can’t provide live weather updates, but I recommend checking a reliable weather app!';
    } else if (userInput.includes('joke')) {
      response = 'Why don’t skeletons fight each other? They don’t have the guts!';
    } else if (userInput.includes('time')) {
      response = `I’m not wearing a watch, but your device should have the correct time!`;
    } else if (userInput.includes('what can you do')) {
      response = 'I can chat with you, answer simple questions, and help you out as best as I can!';
    } else if (userInput.includes('are you real')) {
      response = 'I’m as real as the internet! Just a friendly chatbot here to assist you.';
    } else if (userInput.includes('tell me about yourself')) {
      response = 'I am a chatbot created to assist and chat with you. What would you like to know?';
    } else if (userInput.includes('favorite color')) {
      response = 'I love all colors equally! What about you?';
    } else if (userInput.includes('food')) {
      response = 'I don’t eat, but I hear pizza is a popular choice!';
    } else if (userInput.includes('story')) {
      response = 'Once upon a time, there was a chatbot who loved to help people. The end!';
    } else if (userInput.includes('hobby')) {
      response = 'I enjoy chatting with you and learning new things!';
    } else if (userInput.includes('who made you')) {
      response = 'I was created by some brilliant developers to assist and chat with you!';
    } else if (userInput.includes('age')) {
      response = 'I was created recently, so I’m quite young. Time works differently for me, though!';
    } else if (userInput.includes('where are you from')) {
      response = 'I live in the digital world, hosted on a server somewhere. What about you?';
    } else if (userInput.includes('fun fact')) {
      response = 'Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!';
    } else {
      response = 'I am not sure about that. Can you clarify or ask something else?';
    }
  
    res.json({ response });
  };
  