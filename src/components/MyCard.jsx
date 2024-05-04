import { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyCard = (props) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const FetchSelectedCity = () => {
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=543aa3e0c3732b3b37a4cf7f6897e442`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Errore nella richiesta della città al server");
      })
      .then((selectedCity) => {
        console.log(selectedCity);

        setSelectedCity(selectedCity);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (props.lon) {
      FetchSelectedCity();
    }
  }, [props.lon, props.lat]);

  return (
    <Col>
      {selectedCity && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/home/detail/${props.lat}/${props.lon}`}
        >
          <Card
            className="text-white"
            style={{
              width: "18rem",

              background:
                "linear-gradient( rgba(0,212,255,1) 30%, rgba(26,19,138,1) 100%)",
            }}
          >
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
              <Card.Title>{selectedCity.name}</Card.Title>
              <Card.Text>
                <span>{selectedCity.weather[0].main}</span>
              </Card.Text>
              <Card.Text>
                <h5>{(selectedCity.main.temp - 273.15).toFixed()}°</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      )}
    </Col>
  );
};
export default MyCard;
