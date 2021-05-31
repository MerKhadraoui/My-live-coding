function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        Hi, this is React App
      </h1>
<<<<<<< HEAD
      {console.log("Hi, i'm JS ")}
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img src="./img/tree.jpeg" alt="" />
=======
      {console.log("Hi")}
      <h2>this is a text</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img className="pic" src="./img/tree.jpeg" alt="big tree" />
>>>>>>> 2543910b2f2ec03b2e00e26987a9f61d089c89be
    </div>
  );
}

export default App;
