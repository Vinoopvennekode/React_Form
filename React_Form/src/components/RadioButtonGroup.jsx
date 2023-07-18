
const RadioButtonGroup = ({ label, options, name, register, errors }) => {
    return (
      <div className="px-6 md:px-0 mb-5">
        <label className="block text-sm text-white mb-1">{label}</label>
        <div className="flex gap-3">
          {options.map((option) => (
            <label key={option.value} className="block text-white">
              <input
                type="radio"
                className="mr-2"
                value={option.value}
                {...register(name, { required: 'Select an option.' })}
              />
              {option.label}
            </label>
          ))}
        </div>
        {errors && <span className="text-red-500 text-xs">{errors.message}</span>}
      </div>
    );
  };


 export default RadioButtonGroup