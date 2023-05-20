import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function ItemsComponent() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filterItems, setFilterItems] = useState("");

  // Fetching Data
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log("Data", data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <main>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <div className="search-items">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn-light btn-search">Search</button>
            </div>
          </form>
        </div>
        <div className="categories">
          <button
            className="btn-dark category"
            onClick={() => setFilterItems("")}
          >
            All
          </button>
          <button
            className="btn-dark category"
            onClick={() => setFilterItems("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn-dark category"
            onClick={() => setFilterItems("women's clothing")}
          >
            Women's Closing
          </button>
          <button
            className="btn-dark category"
            onClick={() => setFilterItems("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn-dark category"
            onClick={() => setFilterItems("electronics")}
          >
            Electronics
          </button>
        </div>
      </main>
      <div className="grid-container">
        {Array.from(items)
          .filter((item) => !filterItems || item.category === filterItems)
          .filter(
            (value) =>
              !search ||
              value.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="item-container">
              <div className="card">
                <h3 className="title">{item.title}</h3>
                <img src={item.image} alt={item.title} />
                <h5 className="price">£ {item.price}</h5>
                <button className="btn-dark btn-buy">
                  <Link to={`/${item.id}`} className="btn-link">
                    Buy Now
                  </Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ItemsComponent;