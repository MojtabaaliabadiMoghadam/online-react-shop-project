import "./home.css";
import Header from "./header";
import Productsec from "./product-sec";
import SupperOffer from "./super-offer";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:3003/posts")
      .then((response) => response.data)
      .then((response) => setData(response));
  };
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <>
      <body>
        <Header />
        { !data.length? <p>....loading</p> : <Productsec  data={data}/> }
        <SupperOffer />
        <Footer />
      </body>
    </>
  );
};

export default Home;
