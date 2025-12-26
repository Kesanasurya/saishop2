import productImage from "../image/image1.jpg";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Priyanjali Home Food</h1>
      <p>Best products at best prices</p>
      <h2>number:- 91xxxx1046</h2>
      <style>{`body { background-color: #ec6d6dff; }`}</style>
      <img
        src={productImage}
        alt="Product"
        style={{ width: "300px", marginTop: "90px" }}
      />
    </div>
  );
}

export default Home;
