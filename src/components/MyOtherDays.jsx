import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const MyOtherDays = (props) => {
  const [future, setFuture] = useState(null);
  const FetchFuture = () => {
    fetch(
      ` https://api.openweathermap.org/data/2.5/forecast?lat=${props.lat}&lon=${props.lon}&units=metric&appid=543aa3e0c3732b3b37a4cf7f6897e442`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Errore nella richiesta della città al server");
      })
      .then((future) => {
        setFuture(future);
        console.log(future);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (props.lat) {
      FetchFuture();
    }
  }, [props.lon, props.lat]);

  return (
    <>
      {future && (
        <Row
          style={{
            background:
              "linear-gradient( rgba(0,212,255,1) 30%, rgba(26,19,138,1) 100%)",
            borderRadius: "15px",
          }}
        >
          <Col>
            <div>
              <h4>{future.list[7].dt_txt}</h4>
              <div>
                <p>{future.list[7].main.temp}°</p>
              </div>
              <div>
                <p>{future.list[7].weather[0].main}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${future.list[7].weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p>Umidità: {future.list[7].main.humidity}%</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h4>{future.list[15].dt_txt}</h4>
              <div>
                <p>{future.list[15].main.temp}°</p>
              </div>
              <div>
                <p>{future.list[15].weather[0].main}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${future.list[15].weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p>Umidità: {future.list[15].main.humidity}%</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h4>{future.list[23].dt_txt}</h4>
              <div>
                <p>{future.list[23].main.temp}°</p>
              </div>
              <div>
                <p>{future.list[23].weather[0].main}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${future.list[23].weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p>Umidità: {future.list[23].main.humidity}%</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h4>{future.list[31].dt_txt}</h4>
              <div>
                <p>{future.list[31].main.temp}°</p>
              </div>
              <div>
                <p>{future.list[31].weather[0].main}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${future.list[31].weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p>Umidità: {future.list[31].main.humidity}%</p>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h4>{future.list[39].dt_txt}</h4>
              <div>
                <p>{future.list[39].main.temp}°</p>
              </div>
              <div>
                <p>{future.list[39].weather[0].main}</p>
              </div>
              <div>
                <Image
                  src={` https://openweathermap.org/img/wn/${future.list[39].weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <p>Umidità: {future.list[39].main.humidity}%</p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default MyOtherDays;
