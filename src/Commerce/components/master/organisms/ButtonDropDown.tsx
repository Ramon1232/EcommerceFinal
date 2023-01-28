

import React, { useEffect, useState, Component, Fragment } from 'react';

import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function App() {

  const [api, setApi] = useState([]);
  /**api donde muestre todas las categorias existentes */
  useEffect(() => {
    axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/ProductList?idLista=DEMO-100-01')
      .then(result => {
        setApi(result.data.productos);
      })
      .catch(err => console.log());
  }, []);


  return (
    <>
      <MDBDropdown>
        <MDBDropdownToggle color='warning' position="static" >Categorias</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Computadoras</MDBDropdownItem>
          <MDBDropdownItem link>Articulos variados</MDBDropdownItem>
          <MDBDropdownItem link>Tecnologias</MDBDropdownItem>
          <MDBDropdownItem link>Hogar</MDBDropdownItem>
          <MDBDropdownItem link>Deportes</MDBDropdownItem>
          <MDBDropdownItem link>Herramientas</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      </>
  );
}