import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MyOtherDays from "./MyOtherDays";

const MyDetails = () => {
  const params = useParams();
  const [meteo, setMeteo] = useState(null);
  const [hour, setHour] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  console.log(params);
  const FetchDetails = () => {
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=543aa3e0c3732b3b37a4cf7f6897e442`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Errore nella richiesta della città al server");
      })
      .then((meteo) => {
        console.log(meteo);
        setMeteo(meteo);
        setHour(new Date(meteo.dt * 1000).toDateString());
        setSunrise(new Date(meteo.sys.sunrise * 1000).getHours());
        setSunset(new Date(meteo.sys.sunset * 1000).getHours());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <Container>
      <Row>
        {meteo && (
          <Col md={4} className="text-white mt-5">
            <div
              style={{
                background:
                  "linear-gradient( rgba(0,212,255,1) 30%, rgba(26,19,138,1) 100%)",
                borderRadius: "15px",
              }}
            >
              <div>
                <h2>{meteo.name}</h2>
                <p>{hour}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <h3>{(meteo.main.temp - 273.15).toFixed()}°</h3>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <p>Massima:{(meteo.main.temp_max - 273.15).toFixed()}°</p>
                <p>Minima:{(meteo.main.temp_min - 273.15).toFixed()}°</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="ps-2">
                  <p>Oggi</p>
                  <p>Umidità: {meteo.main.humidity}% </p>
                  <p>Nuvole: {meteo.clouds.all}%</p>
                  <p>Alba: {sunrise}am</p>
                  <p>Tramonto: {sunset}pm</p>
                </div>
                <div className="pe-2">
                  <p>Vento</p>
                  <p>Velocità: {meteo.wind.speed}m/s</p>
                  <p>Angolazione: {meteo.wind.deg}°</p>
                </div>
              </div>
            </div>
          </Col>
        )}

        <Col md={8} className="text-white mt-5">
          <MyOtherDays lat={params.lat} lon={params.lon} />
        </Col>
      </Row>
    </Container>
  );
};
export default MyDetails;
