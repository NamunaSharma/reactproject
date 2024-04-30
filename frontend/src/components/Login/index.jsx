// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (data.email == "namunasharma@gmail.com" || data.password == "12345!nN") {
//       navigate("/adminhome");
//     } else {
//       try {
//         const url = "http://localhost:5555/api/auth";
//         const { data: responseData } = await axios.post(url, data);

//         // Fetch user details to get user ID
//         const userRes = await axios.get("http://localhost:5555/api/users", {
//           headers: {
//             Authorization: `Bearer ${responseData.data.token}`,
//           },
//         });

//         // Log the user response data and user ID
//         console.log("User response data:", userRes.data);
//         console.log("User ID:", responseData.data.userId);

//         // Store the token and user ID in local storage
//         localStorage.setItem("token", responseData.data.token);
//         localStorage.setItem("userId", responseData.data.userId);

//         // Redirect to the homepage after a delay
//         setTimeout(() => {
//           window.location = "/homepage";
//         }, 2000);

//         console.log("Login successful");
//       } catch (error) {
//         if (
//           error.response &&
//           error.response.status >= 400 &&
//           error.response.status <= 500
//         ) {
//           setError(error.response.data.message);
//         }
//       }
//     }
//   };

//   return (
//     <div className={styles.login_container}>
//       <div className={styles.login_form_container}>
//         <div className={styles.left}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Login to Your Account</h1>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             {error && <div className={styles.error_msg}>{error}</div>}
//             <button type="submit" className={styles.green_btn}>
//               Sign In
//             </button>
//           </form>
//         </div>
//         <div className={styles.right}>
//           <h1>New Here ?</h1>
//           <Link to="/signup">
//             <button type="button" className={styles.white_btn}>
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.css";
import loginImage from "../Asset/loginimage.jpg";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      data.email === "namunasharma@gmail.com" &&
      data.password === "12345!nN"
    ) {
      navigate("/admin");
    } else {
      try {
        const url = "http://localhost:5555/api/auth";
        const { data: responseData } = await axios.post(url, data);

        // Fetch user details to get user ID
        const userRes = await axios.get("http://localhost:5555/api/users", {
          headers: {
            Authorization: `Bearer ${responseData.data.token}`,
          },
        });

        // Log the user response data and user ID
        console.log("User response data:", userRes.data);
        console.log("User ID:", responseData.data.userId);

        // Store the token and user ID in local storage
        localStorage.setItem("token", responseData.data.token);
        localStorage.setItem("userId", responseData.data.userId);

        // Redirect to the homepage after a delay
        navigate("/homepage");

        console.log("Login successful");
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
          <div className={styles.signup_message}>
            <p>Don't have an account?</p>
            <Link to="/signup">
              <button type="button" className={styles.signup_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <img src={loginImage} alt="Login" className={styles.login_image} />
        </div>
      </div>
    </div>
  );
};

export default Login;
