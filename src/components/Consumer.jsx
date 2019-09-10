import React, { Fragment, useContext } from 'react';
import Table from './table/Table';
import Tbody from './table/Tbody';
import Tr from './table/Tr';
import Th from './table/Th';
import Thead from './table/Thead';
import Formulario from './Formulario';
import Td from './table/Td';
import S from './table/S.jsx';
import Button from './table/Button';
import { MyContext } from '../Mycontext/Mycontext';


function Consumer() {

    const { lista, ring, btnkill, btnring, handleSubmit, handleKill, handleClick, viewForm, handleViewForm } = useContext(MyContext);

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                <Table >
                    <Thead>
                        <Tr >
                            <Th>Name</Th>
                            <Th>Race</Th>
                            <Th>Age</Th>
                            <Th>Weapon</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {lista.map((e, i) => (
                            <Tr key={i}>
                                {e.kill ? <Td  > <S > {e.name} </S></Td> : <Td> {e.name} </Td>}
                                <Td> {e.kill ? <S> {e.race} </S> : e.race}</Td>
                                <Td > {e.kill ? <S> {e.age} </S> : e.age}</Td>
                                <Td> {e.kill ? <S> {e.weapon} </S> : e.weapon}</Td>

                                <Td> {ring && <Button estilo={btnring} event={() => (handleClick(e))}>RING</Button>}</Td>
                                <Td><Button estilo={btnkill} event={() => (handleKill(e))}>KILL</Button></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                
                <Button event={handleViewForm} estilo="btn btn-success">Agregar Heroe</Button>
                </div>
                {viewForm &&    <div className="col-md-6">

               <Formulario handleSubmit={handleSubmit}  /> 
                        </div>}
            </div>
        </Fragment>
    );
}

export default Consumer;