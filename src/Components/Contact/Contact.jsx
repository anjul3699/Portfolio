import React, { useState } from 'react'
import { FaHome, FaPhoneVolume } from 'react-icons/fa'
import { MdArrowCircleRight, MdEmail } from 'react-icons/md'

const Contact = () =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async () => {

        if(!name || !email || !message){
            setStatus('Please fill all fields')
            return
        }

    const res = await fetch('https://formspree.io/f/mdavdnbv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  })
  if (res.ok){

   setStatus('Message sent successfully!')
    setName('')
    setEmail('')
    setMessage('')
}
  else {
    setStatus('Something went wrong. Try again.')
}
    }

return(
    <>
    <div>
        <h1 className='text-center text-3xl m-3 underline underline-offset-10 decoration-green-600'>Connect with me</h1>
    </div>
    <div className='flex flex-row gap-x-38'>
        <div className='m-26'>
            <h2 className='text-green-600 text-xl mb-15 underline decoration-amber-50 underline-offset-8 pl-8'>Contact Details</h2>
            <div className='flex flex-row gap-4'>
                <MdEmail className='text-2xl text-green-500' />
            <p>Email: anjulsam@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 mt-4'>
                <FaPhoneVolume className='text-2xl text-green-500' />
            <p>Phone: +49 176 72279 256</p>
            </div>

            <div className='flex flex-row gap-4 mt-4'>
                <FaHome className='text-2xl text-green-500' />
            <p>Address: Berlin, Germany</p>
            </div>

        </div>
        <div className='m-26'>
            <h3 className='text-green-600 text-xl mb-15 underline decoration-amber-50 underline-offset-8 pl-5'>Fill the form</h3>
            <div>
                <div className='flex flex-row gap-4'>
                    <MdArrowCircleRight className='text-2xl text-green-500'/>
                    <p className='w-18'>Name</p>
                    <input 
                    value={name}
                onChange={e => setName(e.target.value)}
                    
                    className='border rounded-md bg-none placeholder:text-gray-500 placeholder:text-sm' placeholder="  Enter your name...."></input>
                </div>

                <div className='flex flex-row gap-4 mt-4'>
                    <MdArrowCircleRight className='text-2xl text-green-500'/>
                    <p className='w-18'>Email</p>
                    <input 
                     value={email}
                onChange={e => setEmail(e.target.value)}
                    
                    className='border rounded-md bg-none placeholder:text-gray-500 placeholder:text-sm' placeholder="  Enter your email...."></input>
                </div>

                <div className='flex flex-row gap-4 mt-4'>
                    <MdArrowCircleRight className='text-2xl text-green-500'/>
                    <p className='w-18'>Message</p>
                    <input 
                    value={message}
                onChange={e => setMessage(e.target.value)}

                    className='w-52 h-28 border rounded-md bg-none placeholder:text-gray-500 placeholder:text-sm' placeholder="  Enter your message...."></input>
                </div>

                {/* Status feedback */}
            {status && (
              <p className={`text-sm text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}



                <div className='m-9 flex justify-center'>
                    <button className= ' bg-green-600 p-3 rounded-xl hover:bg-green-500 hover:ease-linear cursor-pointer' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
)

}
export default Contact

