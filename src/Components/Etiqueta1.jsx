import React from "react";
import ComponenteLista from './ComponenteLista.jsx';

export default function Etiqueta1(props){
  //React.createElement("h1",null,"hola");
  return <div>{props.nombre}
              {props.titulo}
            <ul>
              <ComponenteLista item="Listado1"/>
              <ComponenteLista item="Listado2"/>
              <ComponenteLista item="Listado3"/>
            </ul>
          </div>;
}
