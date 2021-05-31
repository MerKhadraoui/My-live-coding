function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        Hi, this is React App
      </h1>
      {console.log("Hi, i'm JS ")}
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img src="./img/tree.jpeg" alt="" />
    </div>
  );
}

export default App;
