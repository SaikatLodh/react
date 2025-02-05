import React, { useEffect, useState } from 'react'

const LoadingAbout = () => {
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
        {
            card.map((product)=>{
                
    const discountPrice = (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2);

                return (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 " key={product.id}>
                    {/* Product Image */}
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
              
                      <div className="mt-4">
                        {/* Price and Discount */}
                        <p className="text-gray-800">
                          <span className="text-xl font-bold">${discountPrice}</span>{" "}
                          <span className="line-through text-sm text-gray-500">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-green-600 ml-2">
                            (-{product.discountPercentage}%)
                          </span>
                        </p>
                      </div>
              
                      {/* Stock Status */}
                      <p
                        className={`mt-2 text-sm ${
                          product.stock > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.availabilityStatus}
                      </p>
              
                      {/* Rating */}
                      <div className="mt-2 flex items-center">
                        <span className="text-yellow-500 text-sm font-bold">
                          {product.rating} ★
                        </span>
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews.length} reviews)
                        </span>
                      </div>
              
                      {/* Actions */}
                      <div className="mt-4 flex justify-between items-center">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                          disabled={product.stock <= 0}
                        >
                          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => alert(`Viewing details for ${product.title}`)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    
                  </div>
                )
            })
        }
     
    </div>
  )
}

export default LoadingAbout
