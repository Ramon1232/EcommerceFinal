import React, { useEffect, useState, Component, Fragment } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { display } from '@mui/system';
import '../Products/style.css'
import rutas from '@/Commerce/routes/index'

export default function App({ api }) {
  console.log(api)

  return (
    <Fragment  >
      <div className='container py-4'>
        <div className='col-6'>
          <h3 className="mb-3">Recomendaciones</h3>
        </div>
        <div className='row row-cols-3 g-4'>
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-image-ps'>
                <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/M_headset-t-dagger-sona-pink-16276.png?61&time=1673929803"} />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>T-DAGGER</h4>
                <h5 className='card-text'>AUDÍFONOS GAMER</h5>
                {
                  /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                  <h5 className='text-price'>Precio : $349</h5>
                }
              </div>
              <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                Comprar
              </a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-image-ps'>
                <img className='card-img-fluid' src={"https://falabella.scene7.com/is/image/FalabellaPE/17169419_1?wid=800&hei=800&qlt=70"} />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>ADIDAS</h4>
                <h5 className='card-text'>ADIDAS SUPERSTAR</h5>
                {
                  /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                  <h5 className='text-price'>Precio : $449</h5>
                }
              </div>
              <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                Comprar
              </a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-image-ps'>
                <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_amd-ryzen-7-5700g-17613.png?61&time=1673930294"} />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>AMD</h4>
                <h5 className='card-text'>AMD RYZEN 7 5700G</h5>
                {
                  /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                  <h5 className='text-price'>Precio : $649</h5>
                }
              </div>
              <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                Comprar
              </a>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-image-ps'>
                <img className='card-img-fluid' src={"https://cdn.shopify.com/s/files/1/0455/4339/1384/products/26299_63ff1ccd-f7d0-408b-bf94-81c8eead07d8_1200x1200.jpg?v=1665602290"} />
              </div>
              <div className='card-body'>
                <h4 className='card-title'>BANPRESTO</h4>
                <h5 className='card-text'>FIGURA GOKU SSJ1</h5>
                {
                  /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                  <h5 className='text-price'>Precio : $259</h5>
                }
              </div>
              <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>



      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Computación </h3>
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-controls mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left"></i>
              </a>
              <a className="btn btn-controls mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row row row-category-1">

                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_amd-ryzen-7-5700g-17613.png?61&time=1673930294"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>AMD</h4>
                            <h5 className='card-text'>AMD RYZEN 7 5700G</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $649</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_1618254370bx8070811400f-18028.jpg?61&time=1673930209"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>INTEL</h4>
                            <h5 className='card-text'>INTEL CORE I5-11400F</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $849</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_661147486611791024(10).png?61&time=1674018656"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row row-category-1">
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_teros31775846.jpg?61&time=1674019274"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_66113622193366us-int-g915-tkl-carbon-gallery-topdown.png?61&time=1673930156"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dojiw2m9tvv09.cloudfront.net/74275/product/X_tailgate-19284.png?61&time=1674019296"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="mb-3">Articulos de cocina </h3>
            </div>
            <div className="col-6 text-right">
              <a className="btn btn-controls mb-3 mr-1" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                <i className="fa fa-arrow-left"></i>
              </a>
              <a className="btn btn-controls mb-3 " href="#carouselExampleIndicators3" role="button" data-slide="next">
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
            <div className="col-12">
              <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row row row-category-1">

                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2022/10/BL75000-100-0-01-600x600.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2021/01/BL961D-D.24-01.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2018/12/OU76254.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row row-category-1">
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2019/08/OUQJ91-3.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2019/08/CS746635-1.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <div className='card'>
                          <div className='card-image-ps'>
                            <img className='card-img-fluid' src={"https://dcocina.pe/wp-content/uploads/2021/12/ZW64243-722-0-01-600x600.jpg"} />
                          </div>
                          <div className='card-body'>
                            <h4 className='card-title'>LOGITECH</h4>
                            <h5 className='card-text'>TECLADO LOGITECH G915</h5>
                            {
                              /*producto.precioMayor ? <h6> ${producto.precioMenor}  -  ${producto.precioMayor}</h6> :*/
                              <h5 className='text-price'>Precio : $259</h5>
                            }
                          </div>
                          <a href='@/Commerce/pages/demo/Page2' className='btn btn-outline-warning'>
                            Comprar
                          </a>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Fragment>




  );
}



