import React from 'react'
import Section3 from './Section3';



export default function Section2() {
    return (
        <div>
            <section className='section2'>
                <div className="container">
                    <div className="row justify-content-center align-items-center g-0">
                        <div className="col-lg-6 col-12">
                            <div className='d-flex justify-content-lg-center ps-lg-5 ms-lg-5 justify-content-center' data-aos="fade-up" data-aos-duration="3000">
                                <img className='ice_island' src="assets/img/ice_island.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12" data-aos="fade-left" data-aos-duration="3000">
                            <div className='d-flex  justify-content-lg-start justify-content-center align-items-center gap-3 gap-lg-2 '>
                                <div className='d-flex justify-content-lg-start justify-content-end'>
                                    <img className='w-75' src="assets/img/easter-straight.png" alt="" />
                                </div>
                                <div>
                                    <h1 className='mission_head Nunito pe-4 pe-lg-0'>Our Mission</h1>
                                </div>

                            </div>
                            <div className=' pt-xl-5 pt-3  pe-xxl-5 me-xxl-5'>
                                <div className=' pe-xxl-2'>
                                    <h5 className='Poppins  pe-xxl-5 me-xxl-5 fs-4-2'>
                                        Our mission is to provide rewards <br className='d-none d-lg-block' /> system
                                        that allows you to earn <br className='d-none d-lg-block' /> passive income stream through the <br className='d-none d-lg-block' />concepts of node systems and NFTs.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Section3 />

        </div>
    )
}
