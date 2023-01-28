import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Alert, Button } from '@mui/material';
import Foter from '../../master/Foter/Foter';
import ButtonDropDown from '../../../components/master/organisms/ButtonDropDown'

import MDBDropdownItem from 'mdb-react-ui-kit';
import ShoppingCart from '../../../components/master/organisms/ShopingCart';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Carrusel from '../../master/Carrusel/Carrusel';
import Pages from '../../master/Products/Product';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { messages } from '@/Commerce/config';
import toast, { Toaster } from 'react-hot-toast';


const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          main: '#FDD835',
          contrastText: '#fff'
        }
      }



    },
  },
});

window.addEventListener("load", function () {
  document.getElementById("viewAlerta")?.addEventListener("click", function () {
    alert("Esto es alerta");
  })
})
const Search = styled('div')(({ theme }) => ({
  position: 'static',

  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, .80),
  },

  marginRight: "25%",

  [theme.breakpoints.up('sm')]: {

    width: '40%',
    justifyContent: "flex-start",
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '65%',
  position: 'absolute',
  pointerEvents: 'none',
  color: "#FDD835",
  backgroundColor: "black",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      width: '50ch',

      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export const Welcome = () => {
  /**api donde muestre todas los productos existentes */
  /**APi consulta y set api para modificar o agregar algo */

  const [newApi, setNewApi] = useState([]);
  const [prueba, setprueba] = useState("");
  const [islogin, setisLogin] = useState(false);
  /**Se usa para mostrar los datos */

  const apiglobal = () => {
    let dato1, dato2, dato3 = [];
    setNewApi([]);
    axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/ProductList?idLista=DEMO-100-01')
      .then(result => {
        dato1 = result.data.productos;
        axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/ProductList?idLista=DEMO-100-02')
          .then(result => {
            dato2 = result.data.productos;
            axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/ProductList?idLista=DEMO-100-03')
              .then(result => {
                dato3 = result.data.productos;
                ApiComprativa(dato1, dato2, dato3);
              })

          })

      })
      .catch(err => console.log(err));
  }

  const apiSola = () => {
    axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/ProductList?idLista=DEMO-100-02')
      .then(result => {
        setNewApi(result.data.productos);
      })
  }

  const mayorEs = (valor1, valor2, valor3) => {
    if (valor1 > valor2) {
      if (valor1 > valor3) {
        return valor1;
      } else {
        return valor3;
      }
    } else {
      if (valor2 > valor3) {
        return valor2
      } else {
        return valor3
      }
    }
  }

  const menorEs = (valor1, valor2, valor3) => {
    if (valor1 < valor2) {
      if (valor1 < valor3) {
        return valor1;
      } else {
        return valor3;
      }
    } else {
      if (valor2 < valor3) {
        return valor2
      } else {
        return valor3
      }
    }
  }

  const ApiComprativa = (dato1, dato2, dato3) => {

    dato1.map((precioos, index) => {
      console.log(precioos);
      let menor = menorEs(dato1[index].precio, dato2[index].precio, dato3[index].precio);
      //api[i].precioMenor = menor;

      let mayor = mayorEs(dato1[index].precio, dato2[index].precio, dato3[index].precio);
      //api[i].precioMayor = mayor;
      setNewApi((prev) => ([...prev, { ...precioos, ["precioMenor"]: menor, ["precioMayor"]: mayor }]));


    })

  }

  const BuscarProduct = () => {

    axios.get('https://app-rest-e-all-modules.herokuapp.com/api/v1/commerce/Principal/VistaProdBusq?descripcion=' + prueba + '&idLista=DEMO-100-01')
      .then(result => {
        console.log(result.data.productos);
        setNewApi(result.data.productos);
      })
      .catch(err => console.log());
  };

  useEffect(() => {
    let logiado = localStorage.getItem('secion');
    if (logiado == '1') {
      apiglobal();
    } else {
      setisLogin(true);
      apiSola();
    }
  }, [])




  const login = () => {
    let logiado = localStorage.getItem('secion');
    console.log(logiado);
    if (logiado == '1') {

      toast.success("Hasta luego");
      localStorage.setItem('secion', '2');
      setisLogin(false);
      apiglobal();


    } else {

      toast.success("Hola Fic");
      localStorage.setItem('secion', '1');
      setisLogin(true)
      apiSola();

    }
  };
  // falso: tiene que mostrar variacion de precio
  // true: tiene que mostrar precio de 02





  return (
    <Box sx={{ flexGrow: 1 }} >
      <nav>
        <div className='title'>
          TORMENTA
        </div>
        <div className='search-bar'>
          <i className="fas fa-search"></i>
          <input type="search" placeholder="Buscar..." onChange={(e) => { setprueba(e.target.value) }} />
        </div>
        <ol>
          <li><ButtonDropDown ></ButtonDropDown></li>
          <li><button className='btn btn-header' onClick={() => { login(); }}>{
            islogin ? "Cerrar sesion" : "Iniciar Sesion"
          }</button></li>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ol>

      </nav>
      <Carrusel />
      <h1><p className="text-center"></p></h1>
      <Pages api={newApi} />

      <Foter></Foter>
    </Box>


  );
}