import React from "react";
import "./icono.css";

//import a from "../../../assets/Forma/";


//se guarda la ruta     del padre y se coloca
//ruta construida en el render parent
class ButtonImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      label: this.props.label,
    };
  }

  render() {

    

    return (
      <div>
        <img src={this.state.src} label={this.state.label}></img>
        <p>{this.state.label}</p>
      </div>
    );
  }
}

export default ButtonImg;
