function App() {
  const [data, setData] = React.useState([]);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
  });
  
  const url = "api/products";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const handleForm = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) {
      console.log("pai nai");
    } else {
      fetch("api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          price: form.price,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          fetchData(result)
          setForm({
            name:'',
            id:'',
            price:''
          })
        })
        .catch((err) => console.log(err));
    }
   
  
  };

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-body">
          <form onClick={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleForm}
              type="text"
              className="form-control"
              placeholder="Product Name"
            />
            <input
              name="price"
              value={form.price}
              onChange={handleForm}
              type="text"
              className="form-control my-2"
              placeholder="Product Price"
            />
            <div className="text-center my-2">
              <button className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <div className="d-flex justify-content-between my-2">
                <h5>{item.name}</h5>
                <button className="btn btn-danger">Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
