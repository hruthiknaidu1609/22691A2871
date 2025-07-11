import { useParams } from "react-router-dom";
import { useEffect } from "react";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("urls")) || [];
    const found = data.find((item) => item.short.includes(shortcode));

    if (found) {
      window.location.href = found.original;
    } else {
      alert("Short URL not found or expired.");
    }
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
