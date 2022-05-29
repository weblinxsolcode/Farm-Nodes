import React from 'react'

export default function Section4() {
    return (
        <div>
            <div className="wrapper3">
                <section className='section4'>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-1 col-lg-1 col-md-0 col-0"></div>

                            <div className="col-xxl-4 col-xl-5  col-lg-5" data-aos="fade-right" data-aos-duration="3000">
                                <h1 className='text-white1 text-lg-start text-center Nunito'>The  </h1>
                                <h1 className='text-success text-success1 text-lg-start text-center Nunito'>Farm Nodes</h1>
                                <h1 className='text-orange text-orange1 text-lg-start text-center Nunito'>Reward System</h1>
                                <p className='text-white text-white Poppins pt-3'>
                                    The rewards have been voted by the <br className='d-none d-lg-block' /> community.
                                    To assure the sustainability <br className='d-none d-lg-block' /> of the project, we invest part of the <br className='d-none d-lg-block' /> treasury in low-risk defi protocol.
                                </p>
                            </div>
                            <div className="col-xxl-4 col-xl-5 col-lg-5 ms-xxl-2 ms-xl-4 " data-aos="fade-left" data-aos-duration="3000">
                                <div>
                                    <img className='img-fluid' src="assets/img/cow.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <div className='elipse1div d-none d-xl-block'>
                    <img className='w-50' src="assets/img/Ellipse1.png" alt="" />
                </div>
                <div className='elipse2div d-none d-xl-block'>
                    <img className='w-50' src="assets/img/Ellipse2.png" alt="" />

                </div>
            </div>
        </div>
    )
}
