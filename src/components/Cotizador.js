import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


function CotizadorPrincipal() {

    const [precioCpu, setPrecioCpu] = useState(0);
    const [precioGpu, setPrecioGpu] = useState(0);
    const [cantidadModulosRam, setCantidadModulosRam] = useState(0);
    const [garantia, setGarantia] = useState("");
    const [descuento, setDescuento] = useState(0);

    const subTotal = parseInt(precioCpu) + parseInt(precioGpu) + parseInt(cantidadModulosRam);
    const totalIva = parseInt(subTotal)*0.19;
    const total = parseInt(subTotal) + parseInt(totalIva) - parseInt(descuento);

    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 text-center bg-secondary text-white p-3 rounded'>
                    <h2>Demo de cálculo</h2>
                    <h4>Sueldo líquido</h4>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-6'>
                    <h4>DEMO:</h4>
                    <h4>Cotizador de Componentes</h4>

                    <label className='form-label' htmlFor='precioCpu'>Precio CPU</label>
                    <input id='precioCpu' name='precioCpu' placeholder='1000000' type='number' className='form-control' value={precioCpu} onChange={(e) => setPrecioCpu(e.target.value)}></input>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='precioGpu'>Precio GPU (por módulo)</label>
                        <input type='number' id='precioGpu' name='precioGpu' className='form-control' value={precioGpu} placeholder='250000' onChange={(e) => setPrecioGpu(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='cantidadModulosRam'>Cantidad Modulos RAM</label>
                        <input type='number' id='cantidadModulosRam' name='cantidadModulosRam' className='form-control' value={cantidadModulosRam} placeholder='20000' onChange={(e) => setCantidadModulosRam(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='garantia'>Garantía</label>
                        <select className='form-select' id='garantia' name='garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}>
                            <option>Seleccione Opción</option>
                            <option value={1}>Con Garantía</option>
                            <option value={2}>Sin Garantía</option>
                        </select>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='descuento'>Descuento</label>
                        <input type='number' id='descuento' name='descuento' className='form-control' value={descuento} placeholder='20000' onChange={(e) => setDescuento(e.target.value)}></input>
                    </div>


                    <div className='form-group mt-3'>
                        <a className='btn btn-warning' onClick={(e) => {
                           
                            setPrecioCpu(0);
                            setPrecioGpu(0);
                            setCantidadModulosRam(0);
                            setGarantia("");
                            setDescuento(0);
                        } } ><i class="fa-solid fa-poo"></i> Limpiar </a>
                    </div>

                </div>

                <div className='col-lg-6'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Subtotal</td>
                                <td>$ {subTotal.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>(-) IVA (19%)</td>
                                <td>$ {totalIva.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>(-) Descuento </td>
                                <td>$ {descuento.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Total</td>
                                <td>$ {total.toLocaleString()}</td>
                            </tr>

                            
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>

    );

}


export default CotizadorPrincipal;