import React, { useEffect, useState } from "react";
const Currency = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=9f17463bf563a09c2e9b63fe7ddf84d6&symbols=RUB"
    )
      .then((responce) => responce.json())
      .then((data) => setInfo(data.rates.RUB.toFixed(4)));
  }, []);

  return (
    <div className="currency">
      EUR/RUB : <br></br> &#8364;/&#8381; <span>{info}</span>
    </div>
  );
};
export default Currency;
