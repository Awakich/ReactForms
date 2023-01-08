import { useState, useEffect } from "react";
import Feauter from "../Feauters/Feauter";

const Features = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch(
        "https://dummyjson.com/users?skip=0&limit=8"
      ).then((res) => res.json());
      setUsers(res.users);
    };
    FetchData();
  }, []);

  // id, firstName, lastName, age, email, image

  return (
    <div className="py-16 px-12">
      <h2 className="text-center text-[#30519F] font-bold text-5xl mb-12">
        Our Features
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {users.map(
          ({
            id,
            firstName,
            lastName,
            age,
            email,
            image,
            company: { title, department },
          }) => (
            <Feauter
              key={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              image={image}
              age={age}
              comment={title + " " + department}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Features;
