import React, { Component } from 'react';
import '../css/Contenedor.css';

class Contenedor extends Component {
  render() {
    return (
      <div className="Contenedor">
        <h1>Contenedor</h1>
        <div className="Contenedor__img">
          <figure>
            <img
              src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/03/15/604ebe271e101.jpeg"
              alt="Imagen de un perrito"
            />
            <figcaption>Es una imagen de un perrito 🐶</figcaption>
          </figure>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          laboriosam!
        </p>
      </div>
    );
  }
}

export default Contenedor;
