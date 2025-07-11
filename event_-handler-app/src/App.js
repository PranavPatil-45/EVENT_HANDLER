import {  useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function App() {
  const [fetched, setData] = useState([]);
  const [loading, setlodaing] = useState(false);
  const [error, seterror] = useState("");
  const [page, setpage] = useState(1);
  const getdatafromserver = async () => {
    setlodaing(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await res.json();
      console.log(data);
      setData(data);
      setlodaing(false);
    } catch (error) {
      console.log(error.message);
      seterror(error.message);
      setlodaing(false);
    }
  };
  useEffect(() => {
    getdatafromserver();
  }, [page]);

  return loading ? (
    <h1>Loding..</h1>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h1 className="text-center">Post</h1>
      <button className="btn-rounded " disabled={page == 1} onClick={() => setpage(page - 1)}>
        Previous
      </button>
      <p>{page}</p>
      <button
        disabled={page == fetched.length}
        onClick={() => setpage(page + 1)}
      >
        Next
      </button>
      <div className="App d-flex flex-wrap justify-content-center">
        {fetched.map((el) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                {el.id}
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
