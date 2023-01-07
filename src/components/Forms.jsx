import { useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  const onSubmit = (datas) => {
    setData(datas);
    console.log(data);
  };

  return (
    <div>Forms</div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("FirstName")} />
    //   <input {...register("LastName")} />
    //   <input type="submit" />
    // </form>
  );
};

export default Forms;
