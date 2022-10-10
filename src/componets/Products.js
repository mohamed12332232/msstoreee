import React, { useEffect, useState } from "react";
import "./style/main.css";
import Product from './Product';
function Products(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const { onAdd } = props;

  const fake_Store_api_url = "https://fakestoreapi.com/products";
  const fetchProducts = () => {
    fetch(fake_Store_api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const fetchCategories = () => {
    fetch(`${fake_Store_api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const fetch_specific_category = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <>
     
      <div className="container my-0">
        <h1 className="text-center my-3">this is our products</h1>

        <div className="categories_container d-flex justify-content-center ">
          <button
            className="btn btn-primary  m-1 p-3 btn-sm"
            onClick={() => {
              fetchProducts();
            }}
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <>
                <button
                  className="btn btn-primary btn-sm m-1 "
                  key={category}
                  onClick={() => {
                    fetch_specific_category(category);
                  }}
                >
                  {category}
                </button>
              </>
            );
          })}
        </div>

        <div className="productsss-container my-5">
          {products.map((product) => {
            return (
              <div className="" key={product.id}>
                <Product product={product} onAdd={onAdd} showDetails={false} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
