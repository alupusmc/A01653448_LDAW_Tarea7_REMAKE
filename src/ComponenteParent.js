import React from "react";

import "./ComponenteParent.css";
import Button from "./componentes/Button/boton";
import ButtonFilter from "./componentes/ButtonFilter/filtro";
import RangeFilter from "./componentes/RangeFilter/rangeFilter";

//tutoriales
//https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
//https://www.npmjs.com/package/rc-slider

class ComponenteParent extends React.Component {
  constructor(props) {
    super(props);

    //definicion de estados y se asignan referencias a estos
    this.forma = React.createRef();
    this.color = React.createRef();
    this.opacidad = React.createRef();
    this.corte = React.createRef();
    this.size = React.createRef();
    this.precio = React.createRef();

    //un estado con json objetc
    this.state = {
      forma: [
        { name: "Redondo", ruta: "Forma/redondo" },
        { name: "Princesa", ruta: "Forma/princesa" },
        { name: "Esmeralda", ruta: "Forma/esmeralda" },
        { name: "Óvalo", ruta: "Forma/ovalo" },
        { name: "Marquesa", ruta: "Forma/marquesa" },
        { name: "Pera", ruta: "Forma/pera" },
        { name: "Asscher", ruta: "Forma/asscher" },
        { name: "Corazón", ruta: "Forma/corazon" },
        { name: "Cojín", ruta: "Forma/cojijn" },
        { name: "Baguette", ruta: "Forma/baguette" },
        { name: "Trillón", ruta: "Forma/trillon" },
        { name: "Radiante", ruta: "Forma/radiante" },
      ],
      color: [
        { name: "Transparente", ruta: "Color/incoloro" },
        { name: "Casi incoloro", ruta: "Color/casi-incoloro" },
        { name: "Ligeramente amarillo", ruta: "Color/ligeramente-amarillo" },
        { name: "Amarillo claro", ruta: "Color/amarillo-claro" },
      ],

      opacidad: [
        { name: "Perfecta", ruta: "Claridad/perfecta" },
        { name: "Imperfecciones no visibles", ruta: "Claridad/imperfecciones-no-visibles" },
        { name: "Imperfecciones visibles a 10x", ruta: "Claridad/imperfecciones-10x" },
        { name: "Imperfecciones visibles a simple vista", ruta: "Claridad/imperfecciones-simple-vista" },
      ],
      cortes: [
        { name: "Excellente (Máximo Brillo)", ruta: "Corte/excelente" },
        { name: "Muy Buena (Muy Brillante)", ruta: "Corte/muy-bueno" },
        { name: "Bueno (Brillante)", ruta: "Corte/bueno" },
        { name: "Regular (Poco Brillante)", ruta: "Corte/regular" },
      ],
    };
  }
//callback que se usa enlos childs y regresa a los apdres

  lanzarCallBackBuscar = () => {
    let filter = {
      forma:this.forma.current.getFiltro(),
      color:this.color.current.getFiltro(),
      opacidad:this.opacidad.current.getFiltro(),
      corte:this.corte.current.getFiltro(),
      size:this.size.current.getFiltro(),
      precio:this.precio.current.getFiltro(),
    }
    //lanzar el json de busqueda
    console.log(filter)
    alert(JSON.stringify(filter))

  }


  render() {
    return (
      <div >
        <h1>LDA W7 Axel Octavio Meinguer Estrada - A01653448</h1>
      <div className="body">
        <div className="mitad">
          <ButtonFilter ref={this.forma} valueParent={"testingA"} title="FORMA" buttons={this.state.forma} tooltip="..." size="col-6"  ></ButtonFilter>
          <ButtonFilter ref={this.color}  valueParent={"testingB"}  title="COLOR"  buttons={this.state.color} tooltip="..." size="col-4"  ></ButtonFilter>
          <ButtonFilter ref={this.opacidad}  valueParent={"testingC"}   title="CLARIDAD"  buttons={this.state.opacidad} tooltip="..."  size="col-4"  ></ButtonFilter>



        </div>
        <div className="mitad">
        <ButtonFilter ref={this.corte}  valueParent={"testingD"}  title="CORTO" buttons={this.state.cortes}  tooltip="..." size="col-4"  ></ButtonFilter>
        <RangeFilter ref={this.size}  valueParent={"testingE"}  title="QUILATAJE" tooltip="..." images="true" min="0" max="30" step="0.1"></RangeFilter>
        <RangeFilter ref={this.precio}  valueParent={"testingF"}  title="PRECIO" tooltip="..."  min="200" max="5000000" step="100"></RangeFilter>
        </div>
        <div className="submit" onClick={this.lanzarCallBackBuscar}>
          <Button label="buscar" color="fill"  ></Button>
        </div>
        <div className="submit" onClick={this.lanzarCallBackLimpiar}>
          <Button label="limpiar filtros" color="clear"></Button>
        </div>
      </div>
       </div>
    );
  }


  lanzarCallBackLimpiar = () => {
    this.forma.current.limpiarFiltros()
    this.color.current.limpiarFiltros()
    this.opacidad.current.limpiarFiltros()
    this.corte.current.limpiarFiltros()
    this.size.current.limpiarFiltros()
    this.precio.current.limpiarFiltros()
  }


}

export default ComponenteParent;
