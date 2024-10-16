import { RotatingTriangles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Spinner;
