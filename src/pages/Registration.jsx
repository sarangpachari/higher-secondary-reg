import React, { useState } from "react";

const Registration = () => {
  const [myData, setMyData] = useState({
    fname: "",
    hname: "",
    place: "",
    district: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const getData = (e) => {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let hname = document.getElementById("hname").value;
    let place = document.getElementById("place").value;
    let district = document.getElementById("district").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value; 
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;

    setMyData({
      fname: fname,
      hname: hname,
      place: place,
      district: district,
      mobile: mobile,
      email: email,
      gender: gender,
      dob: dob,
      course: course,
    });

    alert(`Registration Successful ! \n
        Full Name : ${fname} \n
        Address : ${hname}, ${place}, ${district} \n
        Mobile No : ${mobile} \n
        Email : ${email} \n
        Gender : ${gender} \n
        Date of Birth : ${dob} \n
        Course : ${course}
    `);
    resetFields();

    
    
  };

  const resetFields = () => {
    setMyData({
      fname: "",
      hname: "",
      place: "",
      district: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });

    document.getElementById("fname").value = "";
    document.getElementById("hname").value = "";
    document.getElementById("place").value = "";
    document.getElementById("district").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("dob").value = "";
    document.getElementById("course").value = "";
  };

  const resetBtn = () => {
    resetFields();
  };
  return (
    <>
      <div className="h-lvh bg-rose-50 flex justify-center items-center">
        <div className="bg-rose-200 p-6 rounded-xl">
          <h1 className="text-3xl font-extralight text-slate-900 pb-5">
            Registration
          </h1>
          <div className="w-full">
            <form action="" className="flex flex-col gap-3">
              <input
                required
                name="fname"
                id="fname"
                type="text"
                placeholder="Full Name"
                className="px-2 py-2 rounded"
              />
              {/* ADDRESS */}
              <input
                required
                id="hname"
                type="text"
                placeholder="House Name"
                className="px-2 py-2 rounded"
              />
              <div className="flex md:flex-row flex-col gap-2">
                <input
                  required
                  type="text"
                  id="place"
                  placeholder="Place"
                  className="px-2 py-2 rounded"
                />
                <input
                  required
                  id="district"
                  type="text"
                  placeholder="District"
                  className="px-2 py-2 rounded"
                />
              </div>

              <input
                required
                id="mobile"
                type="tel"
                placeholder="Mobile"
                className="px-2 py-2 rounded"
              />
              <input
                required
                id="email"
                type="email"
                placeholder="Email Address"
                className="px-2 py-2 rounded"
              />
              {/* GENDER */}
              <div className=" flex flex-col mt-3 bg-rose-300 rounded-md gap-5 py-8 px-5 md:px-0">
                <div className="flex justify-center gap-2 bg-rose-300 rounded-md">
                  <label htmlFor="">Select Gender : </label>
                  <input
                    required
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="px-2 py-2 w-5"
                  />
                  <label htmlFor="male">Male</label>
                  <input
                    required
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="px-2 py-2 rounded w-5"
                  />
                  <label htmlFor="female">Female</label>
                </div>

                <div className="flex justify-center items-center gap-1">
                  <label htmlFor="dob">Date of Birth : </label>
                  <input
                    required
                    type="date"
                    id="dob"
                    name="dob"
                    className="rounded px-2 py-1"
                  />
                </div>

                <div className="flex justify-center gap-1 items-center">
                  <label htmlFor="course">Select Course : </label>
                  <select
                    required
                    name="course"
                    id="course"
                    className="rounded px-2 py-1"
                  >
                    <option value="">Default</option>
                    <option value="biology">Biology</option>
                    <option value="computer_science">Computer Science</option>
                    <option value="humanities">Humanities</option>
                    <option value="commerce">Commerce</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-5 mt-5 justify-center items-center">
                <input
                  type="reset"
                  onClick={resetBtn}
                  value="Cancel"
                  className="px-2 py-1 rounded bg-pink-50 w-full"
                />
                <input
                  id="reg-btn"
                  type="submit"
                  value="Register"
                  onClick={getData}
                  className="px-2 py-1 rounded bg-rose-500 text-white w-full"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
