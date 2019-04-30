import axios from "axios";

const api = "http://ae-challenge-backend-prod.us-east-1.elasticbeanstalk.com";

const headers = {
  "Content-Type": "application/json"
};

export const getMoves = position => {
  return new Promise(resolve => {
    axios({
      headers,
      method: "GET",
      url: `${api}/chess/moves/${position}`
    })
      .then(success => {
        resolve(success.data);
      })
      .catch(error => {
        resolve(error);
      });
  });
};
