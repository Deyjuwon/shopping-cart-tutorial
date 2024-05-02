import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
     
    async function getProductList() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
    }

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className="flex justify-center ">
            {loading ? <div className="mt-20"><ClipLoader size={100} color="blue"  /></div> : 
                <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 ">
                    {products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            }
        </div>
    );
}

export default Home;
