const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

async function chat(prompt) {
  console.log("openai.chat.completions.create", prompt);
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  console.log(chatCompletion);
  return chatCompletion.choices[0].message.content;
}

module.exports = {
  helpers: {
    chat: async (prompt) => {
      return await chat(prompt);
    },
  },
};
