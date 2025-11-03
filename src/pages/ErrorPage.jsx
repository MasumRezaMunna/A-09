import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-light text-center p-4">
      <h1 className="text-9xl font-bold text-green-primary">Oops!</h1>
      <p className="text-3xl font-serif mt-4">Something went wrong.</p>
      <p className="text-xl text-gray-text mt-2">
        {error.statusText || error.message}
      </p>
      <img
        src="https://i.ibb.co/b3qf6gN/potted-plant.png"
        alt="Sad Plant"
        className="w-64 h-64 my-8"
      />
      <Link to="/" className="btn btn-success bg-green-primary text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
