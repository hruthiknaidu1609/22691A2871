const logger = (msg, data = "") => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${msg}`, data);
};

export default logger;
