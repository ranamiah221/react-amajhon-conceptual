import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product/Product";


const Products = () => {
    const {products} =useLoaderData();
    return (
        <>
                <div className="grid grid-cols-3 gap-10 my-5">
                      {
                         products.map(product => <Product key={product.id} product={product}></Product>)
                      }
                </div>
           
        </>
    );
};

export default Products;