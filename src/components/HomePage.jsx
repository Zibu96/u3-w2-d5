import { Col, Container, Row } from "react-bootstrap";
import HomeCard from "./HomeCard";
import MySearchBar from "./MySearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDetails from "./MyDetails";

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row>
                <h1 className="mt-5">In giro per il mondo</h1>
                <h2 className="mb-3">
                  Scopri il meteo nelle principali città del mondo
                </h2>
                <HomeCard
                  city="Roma"
                  src="https://c.wallhere.com/photos/87/9a/rome_italy_vatican_city_citta_della_stato-1034515.jpg!d"
                />
                <HomeCard
                  city="Londra"
                  src="https://th.bing.com/th/id/R.3fba0c5cdd6a7f49985eca0713699d12?rik=55vX0i38V04%2fjw&riu=http%3a%2f%2fwww.nerverland.com%2fwp-content%2fuploads%2flondra.jpg&ehk=AzMMkvd2y7OKeGD7VwVaGO639oFxC9%2frNE1jAOv9NpQ%3d&risl=&pid=ImgRaw&r=0"
                />
                <HomeCard
                  city="New-York"
                  src="https://th.bing.com/th/id/OIP.DVpY9bSCtwsm0jZ0rZqOTgHaE8?rs=1&pid=ImgDetMain"
                />
                <HomeCard
                  city="Los-Angeles"
                  src="https://th.bing.com/th/id/OIP.1ics56Eb0BScWdiP082u-wHaE8?rs=1&pid=ImgDetMain"
                />
                <HomeCard
                  city="Pechino"
                  src="https://www.circuitoturismo.it/wp-content/uploads/shutterstock_474575647.jpg"
                />
                <HomeCard
                  city="Mosca"
                  src="https://www.consigliamidove.it/wp-content/uploads/2019/04/Mosca.jpg"
                />
              </Row>
              <Row>
                <Col>
                  <h2 className="my-3">Oppure scegli la tua città preferita</h2>
                  <MySearchBar />
                </Col>
              </Row>
            </Container>
          }
        />

        <Route path="/home/detail/:lat/:lon" element={<MyDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default HomePage;
