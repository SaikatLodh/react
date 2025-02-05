import React, { useEffect, useState } from 'react'
import {LazyLoadImage} from "react-lazy-load-image-component"
const AboutImage = () => {
        const [card,setCard] = useState([])
    
        useEffect(()=>{
            const getallproducts = async () => {
                try {
                  const response = await fetch(`https://dummyjson.com/products`);
                  const data = await response.json();
                  return data.products;
                } catch (error) {
                  alert(error);
                }
              };
    
              getallproducts().then((data)=> setCard(data)).catch((error)=> alert(error))
        },[])
  return (
    <div>
       <div>
        {
            card.map((product)=>{

                return (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 " key={product.id}>
                    {/* Product Image */}
                    <LazyLoadImage
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                
                   
                    
                  </div>
                )
            })
        }
     
    </div>
    </div>
  )
}

export default AboutImage
