import React from "react";
import Card from "./Card";

const CardList = (props) => {
  
    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">

        {
          props.products.map(function(product){
            return(
              <div className="col" key={product.id}>
                  <Card product={product}/>
              </div>
            )
          })
        }
        
      </div>
    );
  
}

export default CardList;