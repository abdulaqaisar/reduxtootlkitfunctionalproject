import React from "react";
import { useSelector} from "react-redux";
const Counter2 = () => {
  const name = useSelector((state) => state.counter.name);
  const email = useSelector((state) => state.counter.email);
  const phone = useSelector((state) => state.counter.phone);
  const profileimg = useSelector((state) => state.counter.profileimg);
  console.log();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "40%",
        height: "80vh",
        border: "5px solid gray",
        borderRadius:"10px",
        marginRight:"20px"
      }}
    >
      <div>
        <div style={{ position:"relative", border: "1px solid black",marginLeft:"35%", borderRadius:"50%", height: "150px", width: "150px" }}>
          {profileimg ? (
            <img style={{ position:"absolute",height: "150px", width: "150px",borderRadius:"50%" , objectFit:"cover"}} src={profileimg} alt="Profile" />
          ) : (
            <h3 style={{ position:"absolute", top:"50px" , left:"6px", color:"gray",fontSize:"18px" }}>No image selected</h3>
          )}
        </div>

        <h3 style={{ marginLeft: "40%" }}>User Details</h3>
        <br />
        <h3
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "80%",
            marginLeft: "30px",
          }}
        >
         Name: {name}
        </h3>
        <h3
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "80%",
            marginLeft: "30px",
          }}
        >
         Email: {email}
        </h3>
        <h3
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "80%",
            marginLeft: "30px",
          }}
        >
          Phone: {phone}
        </h3>
      </div>
    </div>
  );
};

export default Counter2;
