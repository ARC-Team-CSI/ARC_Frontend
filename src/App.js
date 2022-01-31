import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="arc--logo"
          alt="ARC LOGO"
          src="https://res.cloudinary.com/andreahabib/image/upload/v1643591738/ARC_1_u8xqx9.svg"
        />
      </header>
      <svg
        className="svg--top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,117.3C672,107,768,149,864,149.3C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="home--text">
        <h2>Advisement Resource Center</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!
        </p>
      </div>
      <svg
        className="svg--bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,117.3C672,107,768,149,864,149.3C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
export default App;