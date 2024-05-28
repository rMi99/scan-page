import {React} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './i18n';
import ErrorBoundary from "./components/errorBoundary";
import ShowAlert from "./components/alert";
// import Loading from "./components/loader";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const AppComp = lazy(()=>import('./App'));

root.render(
  // <React.StrictMode>
    <ErrorBoundary fallBackComponent={ShowAlert}>
      {/* <Suspense fallback={<Loading/>}> */}
        {/* <AppComp /> */}
      {/* </Suspense> */}
      <App/>
    </ErrorBoundary>
  // </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


