import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map(item => (
          <div className="col" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Precio:</strong> ${item.price}</p>
                <Link to={`/producto/${item.id}`} className="btn btn-primary mt-auto">
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

