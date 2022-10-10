import React from 'react'
import { Link } from 'react-router-dom';

function Product(props)
{
  const { product, onAdd, showDetails } = props;
  
  return (
    <div className="card  suggestedProduct" key={product.id}>
      <div className="image-container">
        <img className="card-img-top" src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        {showDetails === false ? (
          <>
            <h5 className="card-title">{product.title.slice(0, 20)}</h5>
            <p className="card-text">{product.description.slice(0, 37)}...</p>
            <Link
              to={`/prodcuts/${product.id}`}
              className="btn btn-primary button"
              // onClick={()=>console.log(product.id)}
            >
              see more
            </Link>
          </>
        ) : (
          <>
            <h3 className="card-title mb3">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <p>price is {product.price}$</p>
            
          </>
        )}

        <button
          className="btn btn-danger buyButton "
          onClick={() => {
            onAdd(product);
          }}
        >
          buy now
        </button>
      </div>
    </div>
  );
}

export default Product