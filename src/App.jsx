import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState(null);
  const [summary, setSummary] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const summarize = async () => {
    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
      params: {
        url: text,
        lang: "en",
        engine: "2",
      },
      headers: {
        "x-rapidapi-key": "53d78bff01mshb2fb41f50cfce61p15e944jsn41d5c208b6a5",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    setSummary(response.data.summary);
  };

  return (
    <div className=" text-[#202F66] ">

      <div className=" bg-[#d4ebfb] h-[38rem] w-auto rounded-3xl my-14 mx-20 flex justify-center items-center flex-col gap-y-6">

        <h1 className=" text-center text-4xl font-bold text-[#202F66] ">
          Welcome to Rapid Article Summarizer!
        </h1>
        <p className="text-lg text-center ">
          Tired of reading long articles to get the gist? Let Rapid Article
          Summarizer do the work for you!
        </p>

        <div className="flex items-center justify-center gap-x-2 ">

          <input
            type="text"
            className="text-[#213555] w-64 px-5 py-4 outline-none border-none rounded-lg"
            onChange={handleInput}
            placeholder="Enter or paste your url here..."
          />
          <button
            className=" hover:bg-gray-500 text-white bg-[#202F66] text-lg font-bold px-4 py-3 rounded-lg "
            onClick={summarize}
          >Summarize
          </button>

        </div>

        <div className="w-96 h-72 bg-[#f7f6f5] text-justify px-6 py-4 rounded-lg overflow-x-hidden shadow-xl">
          {summary}
        </div>

      </div>
    </div>
  );
}

export default App;
