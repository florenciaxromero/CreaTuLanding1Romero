import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Catálogo</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4">

        {items.map((item) => (
          <div className="col" key={item.id}>
            <div className="card item-card border-0 shadow-sm h-100">
              <img
                src={item.image}
                className="card-img-top object-fit-cover"
                alt={item.name}
                style={{ height: '220px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title fw-semibold">{item.name}</h5>
                <p className="card-text text-muted mb-2">Precio: <strong>${item.price}</strong></p>
                <Link to={`/producto/${item.id}`} className="btn btn-outline-dark mt-auto w-100">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;


