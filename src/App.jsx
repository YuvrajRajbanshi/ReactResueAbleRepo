import { useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-wrap">
        {/* <Card userName={"Thanushree"} usn={"1AJ22CS188"} dob={"28/06"} /> */}
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Manindar Singh"} usn={"Bhaiya"} dob={"15 Jan"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        <Card userName={"Yuvraj Singh"} usn={"1AJ22CS188"} dob={"08 July"} />
        {/* <Card userName={"Vijetha"} /> */}
      </div>
    </>
  );
}

export default App;
