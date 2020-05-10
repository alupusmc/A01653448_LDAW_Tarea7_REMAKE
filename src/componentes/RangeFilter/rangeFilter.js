import React from "../../../node_modules/react";
import "./rangeFilter.css";
import  { Range } from "../../../node_modules/rc-slider";
import "../../../node_modules/rc-slider/assets/index.css";

import refB from "../../assets/Quilataje/grande.png"
import refA from "../../assets/Quilataje/pequeno.png"

class RangeFilter extends React.Component {
  constructor(props) {
    super(props);
    //props de state para el child del slider propio de npm
    this.state = {
      title: this.props.title,
      tooltip: this.props.tooltip,
      images: this.props.images,
      min: parseInt(this.props.min),
      max: parseInt(this.props.max),
      step: parseFloat(this.props.step),
      value: [this.props.min, this.props.max],
    };
  }

  
  componentDidMount(){
    console.log(this.props.valueParent);
  }
  
//callback del componnete de slider
  onSliderChange = (value) => {
   // console.log(value);
    this.setState({
      value,
    });
  };
//llamada funcion de limpieza
  limpiarFiltros(){
    this.setState({value:[this.state.min, this.state.max]})
  }

  getFiltro(){
    return this.state.value
  }
  onAfterChange = (value) => {
   // console.log(value); 
  };

  //callback a parent
  reset = () => {
    this.setState({ value: null });
  };

  render() {
    return (
      <div className="filtro">
        <div className="title">
          <h2>{this.state.title}<span>
              ?<p className="tooltip">{this.state.tooltip}</p></span>
          </h2>
        </div>{this.state.images ? (
          <div className="quilataje">
            <img className="size min"src={refA}></img>
            <img className="size max" src={refB}></img>
          </div> ) : (null)}
        <div className="slider">
          <Range
            value={this.state.value} onChange={this.onSliderChange} onAfterChange={this.onAfterChange} max={this.state.max}
            min={this.state.min} step={this.state.step}></Range>
          <input step="0.01" type="number" className="min" disabled value={this.state.value[0]}></input>
          <input step="0.01" type="number" className="max" disabled value={this.state.value[1]}></input>
        </div>
      </div>
    );
  }
}

export default RangeFilter;
