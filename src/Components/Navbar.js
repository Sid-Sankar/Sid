import "./Navbar.css";
const Navbar = () => {
  const handelClick = (event) => {
    const nav_tab = document.getElementsByName("tabs");
    console.log(event.currentTarget.id);
    nav_tab.forEach((link) => link.classList.remove("active"));
    event.target.classList.toggle("active");
  };
  return (
    <>
      <div class="Container">
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a href="#" class="navbar-brand">
              Brand<b>Name</b>
            </a>
            <button
              type="button"
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarCollapse"
              class="collapse navbar-collapse justify-content-start"
            >
              <div class="navbar-nav">
                <a
                  href="#Home"
                  id="nav-link0"
                  data-toggle="tab"
                  class="nav-link active"
                  name="tabs"
                  onClick={handelClick}
                >
                  Home
                </a>
                <a
                  href="#About"
                  id="nav-link1"
                  data-toggle="tab"
                  class="nav-link"
                  name="tabs"
                  onClick={handelClick}
                >
                  About
                </a>
                <a
                  href="#Portfolio"
                  id="nav-link2"
                  data-toggle="tab"
                  class="nav-link"
                  name="tabs"
                  onClick={handelClick}
                >
                  Portfolio
                </a>
                <a
                  href="#Contact"
                  id="nav-link3"
                  data-toggle="tab"
                  class="nav-link"
                  name="tabs"
                  onClick={handelClick}
                >
                  Contact
                </a>
                <a
                  href="#Login"
                  id="nav-link4"
                  data-toggle="tab"
                  class="nav-link"
                  onClick={handelClick}
                  name="tabs"
                >
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
