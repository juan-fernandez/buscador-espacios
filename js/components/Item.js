import React from "react";


export default class Item extends React.Component {
   constructor(){
      super();
   }

   render() {
      const {search_type,search_where} = this.props;
      console.log("item search type:",search_type)
      console.log("item search where:",search_where)

      return(
         <div class="panel-group">
            <div class="panel panel-success">
               <div class="panel-heading">{search_where}</div>
               <div class="panel-body">{search_where}</div>
            </div>
         </div>
      )
   }
}
