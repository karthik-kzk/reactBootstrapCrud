



function Navbar(props:any) {
    return (
  <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="#">
                          Student CRUD
                      </a>
                  </nav>
               {props.body}
              </div>
    );
  }

  export default Navbar;

  