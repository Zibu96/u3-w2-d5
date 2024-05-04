import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MySearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}=&appid=543aa3e0c3732b3b37a4cf7f6897e442 `
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("Errore nella richiesta della città al server");
      })
      .then((elem) => {
        navigate(`/home/detail/${elem[0].lat}/${elem[0].lon} `);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Col onSubmit={HandleSubmit}>
      <Form>
        <Form.Control
          className="mb-3 "
          size="lg"
          type="search"
          placeholder="Cerca la tua città"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Button type="submit">Scopri il meteo</Button>
      </Form>
    </Col>
  );
};
export default MySearchBar;
