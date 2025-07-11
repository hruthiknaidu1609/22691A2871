const ShortURLCard = ({ data }) => {
  return (
    <div className="result">
      <p><strong>Original:</strong> {data.original}</p>
      <p><strong>Short:</strong> <a href={data.short}>{data.short}</a></p>
      <p><strong>Expires:</strong> {data.expiry}</p>
    </div>
  );
};

export default ShortURLCard;
