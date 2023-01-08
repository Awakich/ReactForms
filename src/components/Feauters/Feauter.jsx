const Feauter = ({ image, firstName, lastName, email, age, comment }) => {
  return (
    <div className="bg-[#222222] p-4 mx-auto rounded-lg w-full">
      <div className="flex items-center justify-center">
        <img src={image} className="w-1/3 rounded-full" alt="" />
        <p className="text-white text-sm tracking-widest">{comment}</p>
      </div>

      <div className="flex text-white gap-5 font-semibold items-center justify-center mt-4">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Feauter;
