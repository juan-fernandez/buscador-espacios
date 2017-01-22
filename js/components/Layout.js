import React from "react"
import {connect} from "react-redux"
import Nav from "./Nav"
import SearchList from "./SearchList"

import {fetchSpaces,new_space_search} from "../actions/espaciosActions"

@connect((store)=>{
   return {
      espacios: store.espacios,
   }
})
export default class Layout extends React.Component{

   constructor(){
      super();
      this.state={
         event_where:"",
         event_type:"",
      }
   }

   componentDidMount(){
         /*  var provicias = [
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
             $( "#event_where" ).autocomplete({
               source: provicias
            });*/
   }
   fetchSpaces(){
      var new_event = {
         event_type: this.state.event_type,
         event_where: this.state.event_where
      }

      this.props.dispatch(new_space_search(new_event))

   }
   update_search_term(event){
      if(event.target.id == "event_type"){
         this.setState({
            event_type: event.target.value
         })
      }
      if(event.target.id == "event_where"){
         this.setState({
            event_where: event.target.value
         })
      }
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
                        <label for="event_type">¿Qué evento quieres organizar?</label>
                        <input onChange={this.update_search_term.bind(this)} value={this.state.event_type} type="text" class="form-control" id="event_type"></input>
                     </div>
                     <div class="form-group ui-widget col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <label for="event_where">¿Dónde?</label>
                        <input onChange={this.update_search_term.bind(this)} value={this.state.event_where} type="text" class="form-control" id="event_where"></input>
                     </div>
                     <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <button onClick={this.fetchSpaces.bind(this)} style={buttonStyle} type="button" class="btn btn-default">Buscar</button>
                     </div>
                  </div>

               </div>
               <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                     <SearchList content={espacios}></SearchList>
                  </div>
               </div>

            </div>
      );
   }
}
