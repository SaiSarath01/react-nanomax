import { Link, useRouteError } from "react-router-dom";

export default function Development() {
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>The feature is still in development mode</p>
      <Link to={'/latest'}>
        Homepage
      </Link>
    </div>
  );
}