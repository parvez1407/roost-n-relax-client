import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'

const BecomeHostForm = ({ handleSubmit }) => {
    return (
        <>
            <div className='flex justify-center mt-6'>
                <div className='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
                    <form
                        onSubmit={handleSubmit}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Location
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-indigo-300 focus:outline-indigo-500 rounded-md bg-indigo-50'
                                name='location'
                                id='location'
                                type='text'
                                placeholder='Location'
                                required
                            />
                        </div>

                        <p>Upload ID Document</p>

                        <div className='flex space-x-4 items-center'>
                            <label
                                htmlFor='image'
                                className='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-indigo-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-400 hover:border-white hover:text-white'
                            >
                                <input
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                            </label>
                        </div>

                        <div>
                            <label className='flex items-center'>
                                <input type='checkbox' className='form-checkbox' required />
                                <span className='block ml-2 text-xs font-medium text-gray-700 cursor-pointer'>
                                    Agree to Privacy Policy
                                </span>
                            </label>
                        </div>

                        <PrimaryButton
                            type='submit'
                            classes='block w-full p-3 text-center rounded-md font-medium text-white items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:text-gray-700 focus:shadow-outline focus:outline-none'
                        >
                            Submit Request
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BecomeHostForm