import dotenv from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

dotenv.config();

const testFunc = async () => {
  const parser = new StringOutputParser();
  const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const messages = [
    new SystemMessage("Translate the following from English into Italian"),
    new HumanMessage("hi!"),
  ];
  const chain = model.pipe(parser);
  const res3 = await chain.invoke(messages);
  console.log(res3);
};

testFunc();
