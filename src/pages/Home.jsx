import { useState } from "react";
import logger from "../middleware/logger";
import { v4 as uuidv4 } from "uuid";
import ShortURLCard from "../components/ShortURLCard";
import "../index.css";

const Home = () => {
  const [urls, setUrls] = useState([{ longUrl: "", validity: 30, shortcode: "" }]);
  const [shortened, setShortened] = useState([]);

  const handleChange = (index, key, value) => {
    const updated = [...urls];
    updated[index][key] = value;
    setUrls(updated);
  };

  const shorten = () => {
    const results = urls.map((u) => {
      if (!u.longUrl.startsWith("http")) {
        alert("Enter valid URL with http/https");
        logger("Invalid URL format", u);
        return null;
      }

      const code = u.shortcode || uuidv4().slice(0, 6);
      const expiry = new Date(Date.now() + (u.validity || 30) * 60000);
      const shortenedURL = `http://localhost:3000/${code}`;

      logger("URL shortened", { long: u.longUrl, short: shortenedURL });

      return {
        original: u.longUrl,
        short: shortenedURL,
        expiry: expiry.toLocaleString(),
      };
    }).filter(Boolean);

    setShortened(results);
    localStorage.setItem("urls", JSON.stringify(results));
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      {urls.map((url, idx) => (
        <div key={idx} className="card">
          <input
            type="text"
            placeholder="Enter Long URL"
            value={url.longUrl}
            onChange={(e) => handleChange(idx, "longUrl", e.target.value)}
          />
          <input
            type="number"
            placeholder="Validity (min)"
            value={url.validity}
            onChange={(e) => handleChange(idx, "validity", e.target.value)}
          />
          <input
            type="text"
            placeholder="Custom shortcode (optional)"
            value={url.shortcode}
            onChange={(e) => handleChange(idx, "shortcode", e.target.value)}
          />
        </div>
      ))}
      <button onClick={shorten}>Shorten URLs</button>

      {shortened.map((url, i) => (
        <ShortURLCard key={i} data={url} />
      ))}
    </div>
  );
};

export default Home;
