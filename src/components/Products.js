import React, { useState } from 'react'
import CardList from "./CardList";

const Products = () => {

    const [products, setProducts] = useState([{id:1, productName:"Latte",price:25,imgPath:"https://www.coffeechefs.com/wp-content/uploads/2020/11/Ice-Latte.jpg"},
               {id:2, productName:"Cookie",price:25,imgPath:"https://lh3.googleusercontent.com/-olSeY4npHtY/XxVsvMWo0XI/AAAAAAAAD9k/xG1k7AD2FL8mGtAr1a0coCt2mc9YXf5bwCLcBGAsYHQ/s1600/1595239608130144-1.png"},
               {id:3, productName:"Water",price:25,imgPath:"https://negetireyim.com/wp-content/uploads/2020/04/ERIKLI-SU-1-LT-425.jpg"},
               {id:4, productName:"Cake",price:25,imgPath:"https://i.pinimg.com/originals/ba/46/12/ba4612afbdccbfb9cd89f3793bd8fd98.png"}])
    

    
    
        return (
            <main>
          <div className="container">
            <div className="align-items-center">
                <div className="d-flex justify-content-center">
                </div>
                <CardList products={products} />
              
            </div>
          </div>
        </main>
        )
    }


export default Products