import { useEffect, useState } from "react";

import MyCard from "./MyCard";

const HomeCard = (props) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const fetchCity = () => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${props.city}=&appid=543aa3e0c3732b3b37a4cf7f6897e442 `
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Errore nella richiesta della città al server");
      })
      .then((elem) => {
        console.log("sono elem", elem);
        setLat(elem[0].lat);
        setLon(elem[0].lon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCity();
  }, []);

  return lat && lon && <MyCard lon={lon} lat={lat} src={props.src} />;
};
export default HomeCard;
