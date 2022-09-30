import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Ship from "./components/Ship";
import { Route, Routes } from "react-router-dom";

function App() {
  const [ships, setShips] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredShips, setFilteredShips] = useState([]);
  const [noOfElement, setnoOfElement] = useState(4);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = filteredShips.slice(0, noOfElement);
  useEffect(() => {
    const loadShips = async () => {
      try {
        setLoading(true);
        const response = await axios
          .get("https://swapi.dev/api/starships/?format=json")
          .catch((error) => console.log(error));

        console.log(response.data.results);
        setShips(response.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    loadShips();
  }, []);

  useEffect(() => {
    setFilteredShips(
      ships.filter((ship) =>
        ship.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, ships]);
  return (
    <div className="App font-Poppins">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header search={search} setSearch={setSearch} />

              <CardList slice={slice} loadMore={loadMore} loading={loading} />
            </>
          }
        />
        <Route path="/ship/:shipId" element={<Ship ships={ships} />} />
      </Routes>
    </div>
  );
}

export default App;
