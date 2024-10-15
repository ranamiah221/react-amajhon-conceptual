import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div className="flex justify-center items-center h-screen text-center" id="error-page">
      <div>
        <h1 className="text-6xl font-semibold text-red-500 mb-4">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-2xl font-medium text-red-500 mt-2">
          <i>{error.statusText || error.message}</i>
        </p>
       <Link to='/'>
              <button className="btn text-white bg-green-500 hover:bg-green-400 mt-2">Go Back Home </button>
       </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
