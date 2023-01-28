import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <footer>
      <div className="footer-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h2>Tormenta</h2>
                <p>Tormenta no se hace responsable si no pasamos la materia</p>
                <h3>Aceptamos : </h3>
                <div className="card-area">
                  <i className="fa fa-cc-visa" aria-hidden="true"></i>
                  <i className="fa fa-credit-card" aria-hidden="true"></i>
                  <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                  <i className="fa fa-cc-paypal" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h2>Mas información</h2>
                <ul>
                  <li><a href="#">Acerca de nosotros</a></li>
                </ul>
                <h2>Cuenta</h2>
                <ul>
                  <li><a href="#">Ingresa</a></li>
                  <li><a href="#">Vender</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <h3>Siguenos en</h3>
                <div className="socials">
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='facebook' />
                  </MDBBtn>
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='twitter' />
                  </MDBBtn>
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='google' />
                  </MDBBtn>
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='linkedin' />
                  </MDBBtn>
                  <MDBBtn outline color="white" floating className='m-1' href='/' role='button'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <h5>©️2023 Copyright Tormenta.com</h5>
        </div>
      </div>
    </footer>
  );
}