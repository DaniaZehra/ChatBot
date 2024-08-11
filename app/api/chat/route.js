'use client'
import {NextResponse} from 'next/server'
import OpenAI from 'openai'

export async function POST(req){
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0])
  console.log('POST /api/chat')
  return NextResponse.json({message: 'Hello from the server'})
}
//const { GoogleGenerativeAI } = require("@google/generative-ai");
//const fs = require("fs");
//const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

//async function run() {
//const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//const result = await model.generateContent([
//"What is in this photo?",de
//{inlineData: {data: Buffer.from(fs.readFileSync('path/to/image.png')).toString("base64"),
//mimeType: 'image/png'}}]
//);
//console.log(result.response.text());
//}
//run();

