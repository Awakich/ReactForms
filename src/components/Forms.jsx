import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";

const Forms = () => {
  const { register, handleSubmit, reset } = useForm({});
  const [data, setData] = useState("");

  const onSubmit = (datas) => {
    setData(JSON.stringify(datas));
    console.log(data);
    reset();
  };

  const Notifications = () => {
    toast.success("Thanks for your contact", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    })
  };

  return (
    <div className="px-12 flex flex-col items-center justify-center gap-12">
      <h2 className="text-[#30519F] font-bold text-5xl">Contact with us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
        <input
          className="bg-gray-200 rounded-md py-3 pl-3"
          {...register("FirstName", { required: true, maxLength: 20 })}
          type="text"
          placeholder="First Name"
        />
        <input
          className="py-3 bg-gray-200 rounded-md pl-3"
          {...register("LastName", { required: true, maxLengt: 20 })}
          type="text"
          placeholder="Last Name"
        />
        <input
          className="py-3 bg-gray-200 rounded-md pl-3"
          {...register("Email", { required: true })}
          type="email"
          placeholder="Email"
        />
        <button
          className="bg-[#30519F] text-white rounded-full px-36 py-4 font-semibold text-3xl hover:bg-[#30519F]/90 hover:cursor-pointer"
          type="submit"
          onClick={Notifications}
        >
          Send request
        </button>
        {data && (
          <div className="font-bold text-2xl text-center">
            Thank you for your attention!
          </div>
        )}
      </form>
    </div>
  );
};

export default Forms;
