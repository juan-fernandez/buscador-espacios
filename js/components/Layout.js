import React from "react"
import {connect} from "react-redux"
import Nav from "./Nav"

import {fetchSpaces} from "../actions/espaciosActions"

@connect((store)=>{
   return {
      espacios: store.espacios,
   }
})
export default class Layout extends React.Component{

   constructor(){
      super();
      this.state={

      }
   }

   componentDidMount(){
           var provicias = [
               "Albacete",
               "Alicante/Alacant",
               "Almería",
               "Araba/Álava",
               "Asturias",
               "Ávila",
               "Badajoz",
               "Balears, Illes",
               "Barcelona",
               "Bizkaia",
               "Burgos",
               "Cáceres",
               "Cádiz",
               "Cantabria",
               "Castellón/Castelló",
               "Ciudad Real",
               "Córdoba",
               "Coruña, A",
               "Cuenca",
               "Gipuzkoa",
               "Girona",
               "Granada",
               "Guadalajara",
               "Huelva",
               "Huesca",
               "Jaén",
               "León",
               "Lleida",
               "Lugo",
               "Madrid",
               "Málaga",
               "Murcia",
               "Navarra",
               "Ourense",
               "Palencia",
               "Palmas, Las",
               "Pontevedra",
               "Rioja, La",
               "Salamanca",
               "Santa Cruz de Tenerife",
               "Segovia",
               "Sevilla",
               "Soria",
               "Tarragona",
               "Teruel",
               "Toledo",
               "Valencia/València",
               "Valladolid",
               "Zamora",
               "Zaragoza",
               "Ceuta",
               "Melilla"
             ];
             $( "#donde" ).autocomplete({
               source: provicias
             });
   }
   fetchSpaces(){
      this.props.dispatch(fetchSpaces())
   }
   render(){
      const textCenter={
         textAlign : 'center'
      }
      const buttonStyle={
         marginTop: '26px',
         width: '100%'
      }
      const {espacios} = this.props;
      var Message;
      if (typeof espacios !== 'undefined') {
         if(typeof espacios.spaces !== 'undefined'){
            if(espacios.spaces.length != 0){
               Message = espacios.spaces[0].message;
            }
         }
      }
      console.log("spaces", espacios)


      return (
            <div class="container">
               <Nav></Nav>
               <div style={textCenter} class="well">
                  <div class="row">
                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h3> Busca tu espacio </h3>
                     </div>
                  </div>
                  <div class="row">
                     <div class="form-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label for="evento">¿Qué evento quieres organizar?</label>
                        <input type="text" class="form-control" id="evento"></input>
                     </div>
                     <div class="form-group ui-widget col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label for="donde">¿Dónde?</label>
                        <input type="text" class="form-control" id="donde"></input>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <button onClick={this.fetchSpaces.bind(this)} style={buttonStyle} type="button" class="btn btn-default">Buscar</button>
                     </div>
                  </div>
               </div>
               {Message}

            </div>
      );
   }
}
