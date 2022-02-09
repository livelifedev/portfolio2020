import "../styles/globals.scss";

const lightThemeOn = true;

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${lightThemeOn ? "light" : "dark"}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
