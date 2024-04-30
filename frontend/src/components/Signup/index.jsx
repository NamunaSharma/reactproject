// // import { useState } from "react";
// // import axios from "axios";
// // import { Link, useNavigate } from "react-router-dom";
// // import styles from "./styles.module.css";

// // const Signup = () => {
// //   const [data, setData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     phone: "",
// //     address: "",
// //   });
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleChange = ({ currentTarget: input }) => {
// //     setData({ ...data, [input.name]: input.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const url = "http://localhost:5555/api/users";
// //       const { data: res } = await axios.post(url, data);
// //       navigate("/");
// //       console.log(res.message);
// //     } catch (error) {
// //       if (
// //         error.response &&
// //         error.response.status >= 400 &&
// //         error.response.status <= 500
// //       ) {
// //         setError(error.response.data.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div className={styles.signup_container}>
// //       <div className={styles.signup_form_container}>
// //         <div className={styles.left}>
// //           <h1>Welcome Back</h1>
// //           <Link to="/">
// //             <button type="button" className={styles.white_btn}>
// //               Sign in
// //             </button>
// //           </Link>
// //         </div>
// //         <div className={styles.right}>
// //           <form className={styles.form_container} onSubmit={handleSubmit}>
// //             <h1>Create Account</h1>
// //             <input
// //               type="text"
// //               placeholder="First Name"
// //               name="firstName"
// //               onChange={handleChange}
// //               value={data.firstName}
// //               required
// //               className={styles.input}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Last Name"
// //               name="lastName"
// //               onChange={handleChange}
// //               value={data.lastName}
// //               required
// //               className={styles.input}
// //             />
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               name="email"
// //               onChange={handleChange}
// //               value={data.email}
// //               required
// //               className={styles.input}
// //             />
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               name="password"
// //               onChange={handleChange}
// //               value={data.password}
// //               required
// //               className={styles.input}
// //             />
// //             <input
// //               type="number"
// //               placeholder="Phone Number"
// //               name="phone"
// //               onChange={handleChange}
// //               value={data.phone}
// //               required
// //               className={styles.input}
// //             />
// //             <input
// //               type="text"
// //               placeholder="Address"
// //               name="address"
// //               onChange={handleChange}
// //               value={data.address}
// //               required
// //               className={styles.input}
// //             />

// //             {error && <div className={styles.error_msg}>{error}</div>}
// //             <button type="submit" className={styles.green_btn}>
// //               Sign Up
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Signup;
// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";
// import signupImage from "../Asset/signup.png"; // Import the signup image

// const Signup = () => {
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:5555/api/users";
//       const { data: res } = await axios.post(url, data);
//       navigate("/");
//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <div className={styles.signup_container}>
//       <div className={styles.signup_form_container}>
//         <div
//           className={styles.left}
//           style={{ backgroundImage: `url(${signupImage})` }}
//         ></div>
//         <div className={styles.right}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Create Account</h1>
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               onChange={handleChange}
//               value={data.firstName}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               onChange={handleChange}
//               value={data.lastName}
//               required
//               className={styles.input}
//             />
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
//             <input
//               type="number"
//               placeholder="Phone Number"
//               name="phone"
//               onChange={handleChange}
//               value={data.phone}
//               required
//               className={styles.input}
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               name="address"
//               onChange={handleChange}
//               value={data.address}
//               required
//               className={styles.input}
//             />

//             {error && <div className={styles.error_msg}>{error}</div>}
//             <button type="submit" className={styles.green_btn}>
//               Sign Up
//             </button>
//           </form>
//           <h1>Already Have an account</h1>
//           <Link to="/">
//             <button type="button" className={styles.white_btn}>
//               Sign in
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import signupImage from "../Asset/signup.png"; // Import the signup image

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5555/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <img src={signupImage} alt="Signup" className={styles.signup_image} />
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
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
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={data.address}
              required
              className={styles.input}
            />
            {/* Add other input fields similarly */}
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
          <div className={styles.signup_message}>
            <p>Already have an account?</p>
            <Link to="/">
              <button type="button" className={styles.signup_btn}>
                Sign In
              </button>
            </Link>
          </div>
          {/* <p>
            Already have an account?
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
             <Link to="/">Sign in</Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
