import React, {useContext, useEffect} from 'react'
import {Context} from '../AppContext';
import NavbarTienda from '../Components/Tienda/NavbarTienda';
import '../Components/Tienda/producto.css';
import SideNavLeftTwo from '../Components/HomeMapa/SideNavLeftTwo';
import Producto from '../Components/Tienda/Producto';
import Categories from '../Components/Tienda/Categories';
import Pagination from '../Components/Tienda/Pagination';



export default function Tienda(props) {
    const { store, actions } = useContext(Context);
  
    useEffect(() => {
        if(!store.isAuthenticated) props.history.push('/');
    });

    return (
        <div>
            {
                
                store.tiendaSeleccionada.length > 0 &&
                store.tiendaSeleccionada.map(tienda => {
                   return <NavbarTienda tienda={tienda}/>
                })
            }
            <div class="container main-position">
                <div class="row">
                    <Categories />
                    <div class="col">
                    <div class="row">
                    {   
                            store.tiendaSeleccionada.map((producto, i) => {
                                return (
                                    <Producto key={i} producto={producto}/>
                                )
                        })
                    }   
                    </div>
                    </div>
                    <Pagination />
                </div>
            </div>
            <SideNavLeftTwo />
        </div>
    )
}
