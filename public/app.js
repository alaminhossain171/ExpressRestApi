function App() {
  const [data, setData] = React.useState([]);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
  });
  React.useEffect(() => {
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

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.name || form.price){
        return
    }
   fetch('/api/products',{
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify(form)
   }).then(res=>res.json())
   .then(data=>{
       console.log(data);
   })
  };
  const handleForm=(e,field)=>{
      if(field==='name'){
          setForm({
              ...form,
              name:e.target.value
          })
      }
      else if(field==='price'){
          setForm({
              ...form,
              price:e.target.value
          })
      }
  }
  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-body">
          <form onClick={handleSubmit}>
            <input
              value={form.name}
              onChange={()=>updateForm(event,'name')}
              type="text"
              className="form-control"
              placeholder="Product Name"
            />
            <input
              value={form.price}
              onChange={()=>updateForm(event,'price')}
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
