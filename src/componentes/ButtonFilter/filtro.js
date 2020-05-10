import React from "react";
import "./filtro.css";
import ButtonImg from "./icono/icono";

class ButtonFilter extends React.Component {
  constructor(props, ref) {
    super(props);

    this.ref="";

    this.state = {
      title: this.props.title,
      tooltip: this.props.tooltip,
      size: this.props.size,
      buttons: this.props.buttons,
      selected: this.props.selected,
    };
  }
//funcion al selecionar la imagen on click en el div
  setSelected(item){
    //console.log(item)
    this.setState({selected:item})
  }

  componentDidMount(){
    console.log(this.props.valueParent);
  }
  
//funcion que se llama al poner limpiar
//estado nulo
  limpiarFiltros(){
    this.setState({selected:""})
  }
//manda el state al parent
  getFiltro(){
    return this.state.selected
  }

  render() {

//tooltip show on hover

    return (
      <div className="filtro">
        <div className="title"> 
        <h2> {this.state.title}
            <span> ?<p className="tooltip">{this.state.tooltip}</p> </span>
          </h2>
        </div> {this.state.buttons.map((item, index) => (
          <div  key={index} className={`button ${this.state.size} ${item.name === this.state.selected ? "selected" : ""}`}
            onClick={(e) => this.setSelected(item.name, e)}>
            <ButtonImg  label={item.name} src={require("../../assets/" + item.ruta + ".png")}></ButtonImg>
          </div> ))}
      </div>
    );
  }
}

export default ButtonFilter;
