import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [User_Name, setUser_Name] = useState("");
  const [NewEmail, setNewEmail] = useState("");
  const [New_Password, setNew_Password] = useState("");
  const [Retype_Password, setRetype_Password] = useState("");
  const handelClick = (event) => {
    const nav_tab = document.getElementsByName("tabs");
    console.log(nav_tab);
    console.log(event.currentTarget.id);
    nav_tab.forEach((link) => link.classList.remove("active"));
    event.target.classList.toggle("active");

    const tab_pannel = document.getElementsByName("tabpanel");
    console.log(tab_pannel);
    tab_pannel.forEach((link) => {
      switch (event.currentTarget.id) {
        case "nav-link0":
          link.classList.remove("active");
          tab_pannel[0].classList.add("active");
          break;
        case "nav-link1":
          link.classList.remove("active");
          tab_pannel[1].classList.add("active");
          break;
        default:
          break;
      }
    });
  };

  const Login_Validate = (event) => {
    event.preventDefault();
    console.log(Email);
    console.log(password);
  };
  const Signin_Validate = (event) => {
    event.preventDefault();
    console.log(User_Name);
    console.log(NewEmail);
    console.log(New_Password);
    console.log(Retype_Password);
  };
  return (
    <div class="container">
      <h1>Login Here</h1>
      <div class="card-header">
        <ul class="nav nav-justified d-flex flex-nowrap" id="scrollable-list">
          <li class="nav-item">
            <a
              id="nav-link0"
              data-toggle="tab"
              class="nav-link active"
              name="tabs"
              onClick={handelClick}
            >
              Log-In
            </a>
          </li>
          <li class="nav-item">
            <a
              id="nav-link1"
              data-toggle="tab"
              class="nav-link"
              name="tabs"
              onClick={handelClick}
            >
              Sign-In
            </a>
          </li>
        </ul>
      </div>
      <div class="card-header">
        <div class="tab-content">
          <div
            class="tab-pane active"
            id="tab-eg7-0"
            data-toggle="tab"
            name="tabpanel"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-4 mx-auto">
                  <div class="myform form ">
                    <form action="" name="login" id="Login_Form">
                      {/* <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control my-input"
                          id="name"
                          placeholder="Name"
                        />
                      </div> */}
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control my-input"
                          id="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          min="0"
                          name="password"
                          id="password"
                          class="form-control my-input"
                          placeholder="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <div class="text-center " id="Login_Btn">
                          <button
                            type="submit"
                            class=" btn btn-block send-button tx-tfm"
                            onClick={Login_Validate}
                          >
                            Log In
                          </button>
                        </div>
                      </div>
                      {/* <div class="col-md-12 ">
                        <div class="text-center ">
                          <div class="login-or">
                            <hr class="hr-or" />
                            <span class="span-or">or</span>
                          </div>
                        </div>
                      </div> */}
                      {/* <div class="form-group">
                        <div class="text-center " id="G_login">
                          <a class="btn btn-block g-button" href="#">
                            <i class="fa fa-google"></i> Sign up with Google
                          </a>
                        </div>
                      </div> */}
                      {/* <div class="text-center ">
                        <p class="small mt-3">
                          By signing up, you are indicating that you have read
                          and agree to the{" "}
                          <a href="#" class="ps-hero__content__link">
                            Terms of Use
                          </a>{" "}
                          and <a href="#">Privacy Policy</a>.
                        </p>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="tab-eg7-1"
            data-toggle="tab"
            name="tabpanel"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-4 mx-auto">
                  <div class="myform form ">
                    <form action="" name="login" id="Login_Form">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control my-input"
                          id="name"
                          placeholder="Name"
                          onChange={(e) => setUser_Name(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control my-input"
                          id="email"
                          placeholder="Email"
                          onChange={(e) => setNewEmail(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          min="0"
                          name="Newpassword"
                          id="Newpassword"
                          class="form-control my-input"
                          placeholder="New password"
                          onChange={(e) => setNew_Password(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          min="0"
                          name="Re_password"
                          id="Re_password"
                          class="form-control my-input"
                          placeholder="Retype your password"
                          onChange={(e) => setRetype_Password(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <div class="text-center " id="Login_Btn">
                          <button
                            type="submit"
                            class=" btn btn-block send-button tx-tfm"
                            onClick={Signin_Validate}
                          >
                            Create an Account
                          </button>
                        </div>
                      </div>
                      <div class="col-md-12 ">
                        <div class="text-center ">
                          <div class="login-or">
                            <hr class="hr-or" />
                            <span class="span-or">or</span>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="text-center " id="G_login">
                          <a class="btn btn-block g-button" href="#">
                            <i class="fa fa-google"></i> Sign up with Google
                          </a>
                        </div>
                      </div>
                      <div class="text-center ">
                        <p class="small mt-3">
                          By signing up, you are indicating that you have read
                          and agree to the{" "}
                          <a href="#" class="ps-hero__content__link">
                            Terms of Use
                          </a>{" "}
                          and <a href="#">Privacy Policy</a>.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
