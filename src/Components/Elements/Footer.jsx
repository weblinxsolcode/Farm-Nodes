import React from 'react'
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <>
      <div>
        <div className='footer'>
          <div className='align-items-center justify-content-center d-flex'>
            <h5 className='text-white text-center Poppins fs-3 fw-bold'>
              Join our community
            </h5>
            <div className='d-flex  ms-5 gap-3'>
              <Link to="/"> <FaDiscord className='text-white fs-3' /></Link>
              <Link to="/"> <AiOutlineTwitter className='text-white fs-3' /></Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
