import { useRouteError, Link } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            page not found
          </h1>
          <p>sorry, we coulnd find the page you are looking for</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="grid min-h-[100vh] place-items-center px-8">
        <h4 className="text-center font-bold text-4xl">
          there was an error...
        </h4>
      </main>
    </>
  );
};
export default Error;
