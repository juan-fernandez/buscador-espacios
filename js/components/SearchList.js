import React from "react";
import Item from "./Item"

export default class SearchList extends React.Component {
   constructor(){
      super();
   }

   render() {
      const {content} = this.props;


      if(content.fetched){

         const searchList = content.searches[0].search_history.map((search,index)=>{
            console.log("search item:",search)
            return <Item key={index} search_type={search.search_term.event_type} search_where={search.search_term.event_where}></Item>
         })
         return (
            <div>
               <h3>Resultados</h3>
               {searchList}
            </div>
         )

      }

      return (
         <div>
            {content.fetching ? "Fetching...":""}
         </div>
      )
   }
}
