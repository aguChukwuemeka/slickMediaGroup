import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/movies";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("star wars");
  // const [activateModal, setActivateModal] = useState(false);
  // const [detail, setShowDetail] = useState(false);
  // const [detailRequest, setDetailRequest] = useState(false);

  const API_KEY = "ce762116";
  // cc74c319;

  useEffect(() => {
    try {
      async function fetchMovie() {
        setLoading(true);
        setError(null);
        setData(null);
        await axios
          .get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
          .then((response) => {
            const data = response.data;
            if (data.Response) {
              setData(data.Search);
              console.log(data.Search);
            } else {
              setError(response.Error);
            }
            setLoading(false);
          });
      }
      fetchMovie();
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [query]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  console.log(query);

  return (
    <div>
      <Navbar />
      <Banner />
      <nav className="navbar my-3 container">
        <span className='py-2'>Search</span>
        <input
          style={{ width: "100%" }}
          type="search"
          className="form-control mr-sm-2"
          onChange={handleChange}
          placeholder="Search  for movies"
        />
      </nav>

      <div className="container-fluid">
        {loading ? <>loading...</> : <Movies movies={data} />}
      </div>
    </div>
  );
}

export default App;
