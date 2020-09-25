import React from "react";
import swal from "sweetalert2";


const Login = () => {
  const testAlert = (e) => {
    e.preventDefault();
    swal.fire("Great", "Login Successful", "success");
  };
  return (
    <div className="Login">
      <h3>Login</h3>
      <br />
      <form>
        <table>
          
          <tr>
            <td>
              <label for="username">Username: </label>
            </td>
            <td>
              <input
                name="username"
                type="text"
                placeholder="Enter your username"
              />
            </td>
          </tr>

          <tr>
            <td>
              <label for="password">Password: </label>
            </td>
            <td>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
              />
            </td>
          </tr>
         
         
          <tr>
            <td></td>
            <td>
              <button
                onClick={(e) => {
                  testAlert(e);
                }}
              >
                Submit
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Login;
