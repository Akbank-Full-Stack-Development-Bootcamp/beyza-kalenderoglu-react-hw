import React from 'react'

const Card = (props) => {
    

      const{productName, imgPath, price} = props.product
        return (
            <div className="card shadow-sm">
            <img src={imgPath} alt={productName} height="300" width="300"/>

            <div className="card-body">
              <h5 className="card-title">{productName}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{price} TL</small>
              </div>
            </div>
          </div>
        )
    
}

export default Card