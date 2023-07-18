const InputField = ({ placeholder, id, type, errors, register }) => {
  return (
    <div className={`px-6 md:px-0 md:w-6/12 ${errors ? 'mb-0' : 'mb-5'}`}>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        className={`rounded-md p-2 w-full ${errors ? 'border-red-500' : 'border-none'}`}
        {...register}
      />
      {errors && <span className="text-red-500 text-xs">{errors.message}</span>}
    </div>
  );
};


export default InputField