// import React, { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import "./MainApp.css";

// export default function MainLogin() {
//   const navigation = useNavigate();
//   const [form, setForm] = useState({});

//   const handleChange = ({ target: { name, value } }) => {
//     setForm((p) => ({
//       ...p,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <center>
//         <div className="_form">
//           <h2>Login</h2>

//           <input
//             className="_input"
//             type="email"
//             placeholder="Your Email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <input
//             className="_input"
//             type="password"
//             placeholder="Your Password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//           />
//           <a
//             onClick={() => navigation("/img-upload")}
//             type="button"
//             className="anchor"
//           >
//             Sign in
//           </a>
//           <p
//             style={{ cursor: "pointer" }}
//             onClick={() => navigation("/sign-up")}
//           >
//             New user? Sign up
//           </p>

//           <div className="socials">
//             <img
//               src="https://i.pinimg.com/originals/b3/da/ac/b3daac6815ebf1516a545db6c3e40a36.jpg"
//               alt=""
//               className="login_img "
//             />
//             <img
//               src="https://icones.pro/wp-content/uploads/2021/02/facebook-icone-orange.png"
//               alt=""
//               className="login_img"
//             />
//             <img
//               src="https://i.pinimg.com/originals/ac/cf/1d/accf1d80314304e11e2bcf9537e13304.jpg"
//               alt=""
//               className="login_img"
//             />
//           </div>
//         </div>
//       </center>

//       <div className="_circle"></div>
//       <div className="_circle-1"></div>
//       <div className="_circle-2"></div>
//       <div className="_circle-3"></div>
//     </>
//   );
// }
import React from "react";

export default function MainLogin() {
  return (
    <div className="_body">
      <div className="_container">
        <form className="_login form">
          <svg
            width={32}
            className="svg-icon signup__trigger signup__trigger--fixed "
            viewBox="0 0 20 20"
            style={{ cursor: "pointer" }}
          >
            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
          </svg>
          <h2 className="_login__title">log in to Modiste</h2>
          <div className="_login__row">
            <label className="_login__label" for="lg-em">
              e-mail
            </label>
            <input
              className="_login__input"
              id="lg-em"
              type="email"
              placeholder="example@email.com"
            />
          </div>
          <div className="_login__row">
            <label className="_login__label" for="lg-ps">
              password
            </label>
            <input
              className="_login__input"
              id="lg-ps"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="_login__row">
            <button className="_login__button" type="submit">
              sign in
            </button>
          </div>
          <div className="_login__row">
            <a className="_login__link">forgot your password?</a>
          </div>
          _
        </form>
      </div>
    </div>
  );
}
