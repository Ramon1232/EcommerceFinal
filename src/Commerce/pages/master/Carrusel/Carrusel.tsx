import React from 'react';

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carrusel() {

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://cdn.discordapp.com/attachments/951660678232563742/1065115354432540783/foto_1.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/951660678232563742/1065116855007715408/foto_2.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/951660678232563742/1065119574686707803/foto_3.png" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className ="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
        <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className ="sr-only">Previous</span>
      </button>
      <button className ="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
        <span className ="carousel-control-next-icon" aria-hidden="true"></span>
        <span className ="sr-only">Next</span>
      </button>
    </div>

  );
}