import qrcode from "./image-qr-code.png";

function App() {
  return (
    <article className="card">
      <img src={qrcode} alt="qr code" />
      <div className="card-details">
        <h2>Improve your front-end skills by building projects</h2>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </article>
  );
}

export default App;
