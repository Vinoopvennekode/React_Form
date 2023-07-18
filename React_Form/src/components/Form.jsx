import React, { useState } from 'react';
import InputField from './Form2';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated()


const FormComponent = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];
    const {
        register,
        handleSubmit,
        formState: { errors }, watch, setValue,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setValue('selectField', selectedOption); // Update the form state manually
    };

    return (
        <div className="bg-gradient-to-r from-blue-950 from-20% via-slate-600 via-40% to-blue-950 to-90% h-screen">
            <div className='md:flex justify-evenly h-full  '>
                <div className='flex flex-col justify-center items-center md:w-4/12'>
                    <div>
                        <h1 className='text-pink-400 font-bold text-8xl'>Here's Your first step with us!</h1>
                    </div>
                </div>
                <form className='md:w-4/12 flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex justify-between gap-4'>
                        <InputField
                            placeholder="Name"
                            id="name"
                            type="text"
                            errors={errors.name}
                            register={register('name', { required: 'Name is required.' })}
                        />
                        <InputField
                            placeholder="Mobile"
                            id="mobile"
                            type="text"
                            errors={errors.mobile}
                            register={register('mobile', {
                                required: 'Mobile is required.',
                                pattern: {
                                    value: /^[0-9+\-]+$/,
                                    message: 'Mobile should contain only numbers, +, or -.',
                                },
                            })}
                        />
                    </div>
                    <div className='md:flex justify-between gap-4 '>
                        <InputField
                            placeholder="Password"
                            id="password"
                            type="password"
                            errors={errors.password}
                            register={register('password', {
                                required: 'Password is required.',
                                pattern: {
                                    value: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).*$/,
                                    message:
                                        'Password should contain at least 1 special character (@#$), 4 numbers, 2 capital case letters, and 2 small case letters.',
                                },
                            })}
                        />

                        <InputField
                            placeholder="ReEnter Password"
                            id="reenterPassword"
                            type="password"
                            errors={errors.reenterPassword}
                            register={register('reenterPassword', {
                                required: 'Re-enter Password is required.',
                                validate: (value) => value === watch('password') || 'Passwords do not match.',
                            })}
                        />
                    </div>
                    <div className={`px-6 md:px-0 ${errors.email ? 'mb-0' : 'mb-5'}`}>
                        <input
                            placeholder='Email'
                            id="email"
                            type="text"
                            className={` rounded-md p-2 w-full ${errors.email ? 'border-red-500' : 'border-none'
                                }`}
                            {...register('email', {
                                required: 'Email is required.',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                                    message: 'Valid email is required.',
                                },
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                    </div>
                    <div className="px-6 md:px-0 mb-5 ">
                        <label className='text-sm  text-white'>Select Field</label>
                        <Select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            options={options}
                        />
                        {errors.selectField && <span>This field is required</span>}
                    </div>
                    <div className="px-6 md:px-0 mb-5">
                        <label className="block text-sm  text-white">Favorites</label>
                        <div className='flex gap-3'>

                            <label className="block  text-white">
                                <input
                                    type="radio"
                                    className="mr-2"
                                    value="Frontend"
                                    {...register('radioField', { required: 'Select an option.' })}
                                />
                                Frontend
                            </label>
                            <label className="block  text-white">
                                <input
                                    type="radio"
                                    className="mr-2"
                                    value="Backend"
                                    {...register('radioField', { required: 'Select an option.' })}
                                />
                                Backend
                            </label>
                            <label className="block  text-white">
                                <input
                                    type="radio"
                                    className="mr-2"
                                    value="Full Stack"
                                    {...register('radioField', { required: 'Select an option.' })}
                                />
                                Full Stack
                            </label>
                        </div>
                        {errors.radioField && <span className="text-red-500 text-xs">{errors.radioField.message}</span>}
                    </div>


                    <div className=" mb-2">
                        <label className={`block text-white ${errors.checkboxField && 'text-red-700'}`}>
                            <input
                                type="checkbox"
                                className="mr-2"
                                {...register('checkboxField', { required: 'You must select this.' })}
                            />
                            Terms & Conditions Accepted
                        </label>
                    </div>

                    <div className='flex justify-center px-20'>
                        <button
                            type="submit"
                            className=" bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded w-full "
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default FormComponent;