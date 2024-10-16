import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  const {
    title,
    description,
    rating,
    price,
    category,
    brand,
    thumbnail,
  } = product;

  return (
    <>
        <div className="card card-side bg-base-100 shadow-xl mt-5 mb-10 shadow-blue-200 border-2 border-gray-500 ">
        <figure>
          <img className=""
            src={thumbnail}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary opacity-50">Add To Cart</button>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default ProductDetails;
