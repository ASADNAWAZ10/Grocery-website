import React, { useEffect, useState } from 'react'
import asset from '../assets/asset'
import toast from 'react-hot-toast'
import { useAppcontext } from '../context/AppContext'

//Input field component
const InputField = ({type, placeholder, name, handleChange, address})=>(
    <input className='w-full px-2 py-2.5 border border-gray-500/30 roundec outline-none 
    text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    name= {name}
    onChange={handleChange}
    value={address[name]}
    required
     />
)

const AddAddress = () => {
const {axios, user, navigate} = useAppcontext()

const [address, setAddress] = useState({
    firstName: '', 
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
})

const handleChange = (e) => {
    const {name, value} = e.target;
   setAddress((prevAddress)=>({
    ...prevAddress,
    [name] : value
   }))
}

const onSubmitHandler = async(e) => {
  e.preventDefault();
       try {
        const {data} = await axios.post('/api/address/add', {address})
        if(data.success){
            toast.success(data.message)
            navigate('/cart')
        }else{
            toast.error(data.message)
        }
       } catch (error) {
        toast.error(error.message)
       }
}

 useEffect(()=> {
    if(!user){
        navigate('/cart')
    }
 },[])


  return (
    <div className='mt-16 pb-16'>
        <p className='text-2xl md:text-3xl text-gray-500'>Add shipping 
            <span className='font-semibold text-primary'>Address</span>
            </p>

            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <div className='flex-1 max-w-md'>
                     <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} 
                            name='firstName' type='text' placeholder='enter name' /> 
                            <InputField  handleChange={handleChange} address={address} 
                            name='lastName' type='text' placeholder='enter last name' />
                        </div>

                         
                        <InputField  handleChange={handleChange} address={address} 
                            name='email' type='email' placeholder='enter email name' />
                             <InputField  handleChange={handleChange} address={address} 
                            name='street' type='text' placeholder='enter street name' />

                            <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} 
                            name='city' type='text' placeholder='enter city name' />
                             <InputField  handleChange={handleChange} address={address} 
                            name='state' type='text' placeholder='enter state name' />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                            <InputField  handleChange={handleChange} address={address} 
                            name='zipCode' type='number' placeholder='enter zipCode' />
                             <InputField  handleChange={handleChange} address={address} 
                            name='country' type='text' placeholder='enter country name' />
                            </div>

                            <InputField  handleChange={handleChange} address={address} 
                            name='phone' type='text' placeholder='enter phone Number' />

                            <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull 
                            transition cursor-pointer uppercase '>
                                save address
                                </button>
                     </form>
                </div>
                <img src={asset.addAddress} alt="AddAddress" className='md:mr-16 mb-16 md:mt-0'/>
            </div>
    </div>
  )
}

export default AddAddress