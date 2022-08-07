import { useLocation, Link } from "react-router-dom";

const AboutPage = (props:any) => {

  interface dataT{
    formId: string;
  }

  const location = useLocation();
  const state= location.state as string;
  console.log(state);

  return (
    <>
      <h1>This is About page</h1>
      {/* {state && ( */}
        <div>
          <h3>Passed data:</h3>
          <p>From: {state}</p>
          {/* <p>From: {state.from}</p>
          <p>Message: {state.message}</p>
          <p>Timestamp: {state.timestamp}</p> */}
        </div>
      {/* )} */}
      <hr />
      <Link to="/">Go Home</Link>
    </>
  );
};

export default AboutPage;