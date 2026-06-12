import React, { useState } from 'react'
import { FaHome, FaPhoneVolume } from 'react-icons/fa'
import { MdArrowCircleRight, MdEmail } from 'react-icons/md'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      setStatus('Please fill all fields')
      return
    }

    const res = await fetch('https://formspree.io/f/mdavdnbv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    })

    if (res.ok) {
      setStatus('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('Something went wrong. Try again.')
    }
  }

  return (
    <>
      <div>
        <h1 className='text-center text-2xl md:text-3xl m-3 underline underline-offset-10 decoration-green-600'>
          Connect with me
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-y-12 md:gap-x-38 px-4'>

        {/* Contact Details */}
        <div className='m-4 md:m-26'>
          <h2 className='text-green-600 text-lg md:text-xl mb-6 md:mb-15 underline decoration-amber-50 underline-offset-8 pl-4 md:pl-8'>
            Contact Details
          </h2>

          <div className='flex flex-row gap-4'>
            <MdEmail className='text-2xl text-green-500 flex-shrink-0' />
            <p className='text-sm md:text-base break-all'>Email: anjulsam@gmail.com</p>
          </div>

          <div className='flex flex-row gap-4 mt-4'>
            <FaPhoneVolume className='text-2xl text-green-500 flex-shrink-0' />
            <p className='text-sm md:text-base'>Phone: +49 176 72279 256</p>
          </div>

          <div className='flex flex-row gap-4 mt-4'>
            <FaHome className='text-2xl text-green-500 flex-shrink-0' />
            <p className='text-sm md:text-base'>Address: Berlin, Germany</p>
          </div>
        </div>

        {/* Form */}
        <div className='m-4 md:m-26'>
          <h3 className='text-green-600 text-lg md:text-xl mb-6 md:mb-15 underline decoration-amber-50 underline-offset-8 pl-4 md:pl-5'>
            Fill the form
          </h3>

          <div className='flex flex-col gap-4'>

            <div className='flex flex-row items-center gap-2 md:gap-4 w-full'>
              <MdArrowCircleRight className='text-2xl text-green-500 flex-shrink-0' />
              <p className='w-12 md:w-15 text-sm md:text-base flex-shrink-0'>Name</p>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className='flex-1 min-w-0 border rounded-md bg-transparent px-3 py-2 placeholder:text-gray-500 placeholder:text-sm'
                placeholder="Enter your name..."
              />
            </div>

            <div className='flex flex-row items-center gap-2 md:gap-4 w-full'>
              <MdArrowCircleRight className='text-2xl text-green-500 flex-shrink-0' />
              <p className='w-12 md:w-15 text-sm md:text-base flex-shrink-0'>Email</p>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='flex-1 min-w-0 border rounded-md bg-transparent px-3 py-2 placeholder:text-gray-500 placeholder:text-sm'
                placeholder="Enter your email..."
              />
            </div>

            <div className='flex flex-row items-start gap-4'>
              <MdArrowCircleRight className='text-2xl text-green-500 flex-shrink-0 mt-2' />
              <p className='w-18 text-sm md:text-base mt-2'>Message</p>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                className='flex-1 h-28 border rounded-md bg-transparent px-3 py-2 placeholder:text-gray-500 placeholder:text-sm resize-none'
                placeholder="Enter your message..."
              />
            </div>

            {/* Status feedback */}
            {status && (
              <p className={`text-sm text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}

            <div className='m-4 md:m-9 flex justify-center'>
              <button
                className='bg-green-600 px-6 py-3 rounded-xl hover:bg-green-500 cursor-pointer'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact