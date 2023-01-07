import { useState, useEffect } from "react";
import Feauter from "../Feauters/Feauter";

const Features = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch("https://dummyjson.com/users/").then((res) =>
        res.json()
      );
      setUsers(res.users);
      // console.log(res.users);
    };
    FetchData();
  }, []);

  // id, firstName, lastName, age, email, university, image

  return (
    <div className="snap-mandatory snap-x">
      <div className="snap-center">Features</div>
    </div>
  );
};

export default Features;
