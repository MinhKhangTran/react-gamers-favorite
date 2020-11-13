const API_ENDPOINT = "https://api.rawg.io/api/";

// get Date
const format = (date) => {
  if (date < 10) {
    date = `0${date}`;
  }
  return date;
};

const month = new Date().getMonth + 1;
console.log(month);
