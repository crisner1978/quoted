import { useState, useEffect } from "react";
import twitter from "../twitter-icon.svg";

const Quotes = () => {
  const [quote, setQuotes] = useState("");

  const getQuote = () => {
    fetch(
      `https://raw.githubusercontent.com/vinitshahdeo/inspirational-quotes/master/data/data.json`
    )
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">{quote.from}</div>
      <div id="buttons">
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.text}`}
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer">
          <span>
            <img className="twit" src={twitter} alt="twitter" />
          </span>
        </a>
        <button onClick={getQuote} className="btn" id="new-quote">
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
