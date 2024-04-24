import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [full_name, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    console.warn(full_name, password, phone, email);
  };
  // const [formData, setFormData] = useState({
  //   full_name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //munna
  // });

  // const onSubmit = (data) => {
  //   // event.preventDefault();
  //   fetch("https://api.infin.alpha.logidots.com/api/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // handle success
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // handle error
  //     });
  // };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="flex flex-col p-6 gap-12 sm:gap-16 lg:ml-[35%] lg:p-10 lg:border lg:border-neutral-100 lg:w-[500px] lg:py-12 lg:shadow-lg lg:rounded-lg justify-center items-center align-middle">
      <div className="grid sm:grid-cols-2 justify-center items-center grid-flow-row">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium">Sign up</h1>
        </div>
        <img
          src="	https://cdn3d.iconscout.com/3d/premium/thumb/burger-5863026-4897345.png"
          className="hidden sm:flex sm:w-24 rounded-full"
        />
      </div>

      <div>
        <form
          className="flex flex-col gap-4 lg:w-96"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            // id="full_name"
            // name="full_name"
            placeholder="Full Name"
            value={full_name}
             // onChange={handleChange}
          />

          <input
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            // id="email"
            // name="email"
            placeholder="Email"
            value={email}
            // onChange={handleChange}
          />

          <input
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            // id="phone"
            // name="phone"
            placeholder="Phone Number"
            value={phone}
            // onChange={handleChange}
          />

          <input
            className="border p-4 border-gray-100 shadow-sm rounded-md outline-none"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            // id="password"
            // name="password"
            placeholder="Password"
            value={password}
            // onChange={handleChange}
          />

          <button
            onClick={handleClick}
            className="bg-[#FC8019] p-4 text-white font-medium text-xl rounded-md"
          >
            Sign Up
          </button>
        </form>
        <p className="font-normal text-[#808080] text-xs text-center mt-6">
          Already have an account? Please{" "}
          <span className="text-[#FC8019] font-medium cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Signup;
