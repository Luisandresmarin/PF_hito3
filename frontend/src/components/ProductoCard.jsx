import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const ProductoCard = ({ producto }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();

  const handleDetailClick = () => {
    navigate(`/detail/${producto.id_producto}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(producto);
  };

  return (
    <div className="col-md-4 my-3" onClick={handleDetailClick} style={{ cursor: 'pointer' }}>
      <div className="card">
        <img
          src={producto.imagen_url} 
          alt={producto.nombre}
          className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>

          {isAuthenticated ? (
            <p className="card-text">
              <strong>{producto.precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</strong>
            </p>
          ) : (
            <p className="card-text">Inicia sesión para ver VALORES</p>
          )}

          <p className="card-text">Stock: {producto.stock}</p>
          <div className="d-flex justify-content-between">
            {isAuthenticated && (
              <button className="btn btn-custom" onClick={handleAddToCart}>
                Agregar al carrito
              </button>
            )}
            <button className="btn btn-custom" onClick={handleDetailClick}>
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoCard;

