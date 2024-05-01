/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {
  return (
    <div className="">
        <div className="p-3 min-h-72 mt-10 w-44 flex flex-col justify-between gap-4 border rounded-lg bg-blue-200">
          <div className="flex flex-col gap-2">
            <img className=" w-full m-auto rounded-lg object-cover h-36" src={product?.image} alt={product?.name} />
            <p className="text-xs ">{product?.title}</p>
          </div>
            
            <div className="flex justify-between text-xs">
              <p>${product?.price}</p>
              <button>Add to cart</button>

            </div>
            

        </div>
      
    </div>
  )
}

export default ProductCard
