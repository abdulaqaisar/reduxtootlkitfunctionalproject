import React from "react";
import { useDispatch } from "react-redux";
import {
  Name,
  Email,
  Phone,
  Profile,
  Submit,
  Remove,
} from "../redux/Slices/CounterSlice";
import storage from "redux-persist/lib/storage";
export function Counter() {
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(Profile(reader.result));
      };
      reader.readAsDataURL(file);
    }
  };

  const handelRemove = () => {
    dispatch(Remove())
   };
  const handelSubmit = () => {
    dispatch(Submit());
  };

  return (
    <div style={{marginLeft:"20px", width: "40%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: "1",
          alignItems: "center",
          justifyContent: "center",
          border: "5px solid red",
          height: " 60vh",
        }}
      >
        <h3>Personal Info</h3>
        <input
          type="file"
          placeholder="Profile Picture"
          onChange={handleFileChange}
          style={{
            border: "1px solid black",
            width: "50%",
            padding: "10px",
            marginBottom: "20px",
          }}
        />
        <input
          type="text"
          placeholder="Please Enter Name:"
          id="name"
          onChange={(e) => {
            dispatch(Name(e.target.value));
          }}
          style={{ width: "50%", padding: "10px" }}
        />
        <input
          style={{ marginTop: "20px", width: "50%", padding: "10px" }}
          type="email"
          placeholder="Please Enter Email:"
          id="email"
          onChange={(e) => {
            dispatch(Email(e.target.value));
          }}
        />
        <input
          type="phone"
          placeholder="Please Enter Phone#:"
          id="email"
          onChange={(e) => {
            dispatch(Phone(e.target.value));
          }}
          style={{ margin: "20px", width: "50%", padding: "10px" }}
        />
        <div style={{  display :"flex", justifyContent:"space-evenly", width:"100%"}}>
          <button
          onClick={handelSubmit}
            style={{
              color: "white",
              background: "red",
              outline: "none",
              border: "none",
              padding: "5px 20px",
            }}
          >
            Submit
          </button>
          <button
            style={{
              color: "white",
              background: "red",
              outline: "none",
              border: "none",
              padding: "5px 20px",
            }}
            onClick={handelRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
