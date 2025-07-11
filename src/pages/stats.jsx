import "../index.css";
import ShortURLCard from "../components/ShortURLCard";

const Stats = () => {
  const data = JSON.parse(localStorage.getItem("urls")) || [];

  return (
    <div className="container">
      <h2>Statistics</h2>
      {data.length === 0 ? (
        <p>No URLs shortened yet.</p>
      ) : (
        data.map((url, i) => <ShortURLCard key={i} data={url} />)
      )}
    </div>
  );
};

export default Stats;
