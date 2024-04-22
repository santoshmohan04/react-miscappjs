import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function CardsView() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getParameters(product) {
    const keysAfterBrand = Object.keys(product).slice(
      Object.keys(product).indexOf("brand") + 1
    );
    return keysAfterBrand;
  }

  return (
    <div className="row table-wrapper">
      {products.map((t) => (
        <div className="col-md-6" key={t.id}>
          <div className="card p-3">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="mt-2">
                <h4 className="text-uppercase">{t.name}</h4>
                <div className="mt-5">
                  <h5 className="mb-0">${t.price}</h5>
                  <h1 className="main-heading mt-0">{t.brand}</h1>
                  <div className="d-flex flex-row user-ratings">
                    <h6 className="text-muted ml-1">{t.rating}/5</h6>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src={t.image} width="150" alt="productimg" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
              {getParameters(t).map((key, index) => (
                <div key={index}>
                  <strong>{key}: </strong> {t[key]}
                </div>
              ))}
            </div>

            <p>{t.description}</p>

            <button className="btn btn-danger">Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
