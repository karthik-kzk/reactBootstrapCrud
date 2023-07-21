import { useState } from "react";

function LoginPage () {
  const [inputs,setInputs]=useState({username:"",password:""});
  const [error, setError] = useState<any>({ username: true, password: true });

  function handleChange(e:any){
     const name = e.target.name;
     const value = e.target.value;
     if (name === "username") {
       console.log(/\S+@\S+\.\S+/.test(value));
       if (!/\S+@\S+\.\S+/.test(value)) {
         setError({ ...error, username: true });
       } else {
         setError({ ...error, username: false });
       }
     } else if (name === "password") {
       if (value.length < 4) {
         setError({ ...error, password: true });
       } else {
         setError({ ...error, password: false });
       }
     }

     console.log(error, "error");

     setInputs({ ...inputs, [name]: value });
  }
  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
   alert(inputs.username+" "+inputs.password)
  }
  return (
    <div>
      <form className="w-25 mx-auto my-5">
        <div className="form-group">
          <label htmlFor="staticEmail2" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="email@example.com"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className=" form-group">
          <label htmlFor="inputPassword2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary w-100  mt-3 btn-block"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

