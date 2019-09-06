import React, { useState, Fragment } from 'react';
import { getAll } from '../services/heroes.services';
import { MyContext } from '../Mycontext/Mycontext';
import Consumer from './Consumer';


function List() {

   /**
    * Declaracion de los Hooks y 2 const
    */
    const [lista, setLista] = useState(getAll);
    const [ring, setRing] = useState(true);
    const [viewForm, setViewForm] = useState(false);
    const btnring = "btn btn-primary";
    const btnkill = "btn btn-danger";

  /**
   * Funcion Ring que oculta el objeto
   * @param {Object} objeto a ocultar
   */
    const handleClick = e => {

        const newdata = lista.filter(r => r !== e);
        setLista(newdata);
        setRing(false);
    };

    /**
     * Funcion mueve el objeto al final de la cola
     * @param {Object} objeto a mover al final
     */
    const handleKill = e => {

        const datakill = e;
        datakill["kill"] = true;

        const newdata = lista.filter(r => r !== e);
        newdata.push(datakill);
        setLista(newdata);

    };
    /**
     * Funcion que inserta un nuevo objeto en la lista
     * @param {Object} Datos a insertar en la lista  
     */
    const handleSubmit = e => {
        e.preventDefault();
        let obj = {};
        obj['name'] = e.target.name.value;
        obj['race'] = e.target.race.value;
        obj['age'] = e.target.age.value;
        obj['weapon'] = e.target.weapon.value;
        console.log(obj);
        const data = [];
        lista.map((e) => data.push(e));
        data.push(obj);
        setLista(data);
        console.log('lista nueva', lista);
        setViewForm(false);
    }
/**
 * Funcion que muestra el formulario
 *
 */
    const handleViewForm = () => {
        setViewForm(true);
    }

    const data = {
        handleClick,
        handleKill,
        handleSubmit,
        lista,
        ring,
        btnkill,
        btnring,
        viewForm,
        handleViewForm
    }
    return (
        <Fragment>
            <MyContext.Provider value={data}>
                <Consumer />
            </MyContext.Provider>
        </Fragment >
    );

}

export default List;