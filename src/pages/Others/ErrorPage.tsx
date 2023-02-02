import React from "react";
import { useRouteError } from "react-router-dom";

interface ErrorInfo {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Whoops!</h1>
      <p>An unexpected error has occurred.</p>
      <p>
        <i>
          {error?.statusText || error?.message || "Please try again later."}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
