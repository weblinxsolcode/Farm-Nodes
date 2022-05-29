import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'



export default function Header() {
    const history = useHistory();
    return (
        <>
            <div>
                <div className="wrapper">
                    <section className='section1 '>
                        <Navbar className="navbar2  mx-auto  " bg="transparent" variant='transparent' expand="lg">
                            <Container>
                                <Navbar.Brand className="d-block d-lg-none" ><img className="header-logo" src={process.env.PUBLIC_URL + "assets/img/logo.png"} alt="" onClick={() => history.push('/')} /></Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" className=' '>
                                    <Nav className="col d-flex  align-items-lg-center ">
                                        <div className='d-flex col justify-content-center flex-lg-row flex-column algn-items-lg-center align-items-center gap-lg-4 gap-2 '>
                                            <Navbar.Brand className="d-none d-lg-block" ><img className="header-logo" src={process.env.PUBLIC_URL + "assets/img/logo.png"} alt="" onClick={() => history.push('/')} /></Navbar.Brand>

                                            <li className="nav-item">
                                                <Link to="home" className="nav-link text-white" aria-current="page">Home</Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className="nav-link text-white " to="home#mission" tabIndex={-1} aria-disabled="true"><span>
                                                    Docs</span></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="team" className="nav-link text-white" >Manifesto</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="Article" className="nav-link text-white">Chart</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="home#contact" className="nav-link text-white" >Buy&nbsp;A&nbsp;Node</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="home#contact" className="nav-link text-white" >Roadmap</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="home#contact" className="nav-link text-white" >Community</Link>
                                            </li>
                                            <div className=' align-items-center d-flex  gap-3 text-center'>
                                                <button className="btn btn-warning border_radius text-white  GiHamburgerMenu ">Launch App</button>


                                            </div>
                                        </div>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <div className="container py-5 ">
                            <div className="d-flex justify-content-center">
                                <div className="img_1" data-aos="fade-up" data-aos-duration="3000">
                                    <img className='img-fluid' src="assets/img/section1.png" alt="" />
                                </div>

                            </div>
                            <h1 className='heading_1 text-center pt-3' data-aos="fade-left" data-aos-duration="3000">
                                The Next Gen of  <br /> Node Protocol on Polygon
                            </h1>
                            <h5 className='Poppins text-center ' data-aos="fade-right" data-aos-duration="3000"> Your favorite income</h5>
                            <div className='d-flex justify-content-center gap-3 pt-3'>
                                <div data-aos="fade-up" data-aos-duration="3000">
                                    <Link className='btn btn-warning text-white Poppins fs-7 px-3 py-2'>Whitepaper</Link>
                                </div>
                                <div data-aos="fade-down" data-aos-duration="3000">
                                    <Link className='btn btn_green_2 text-white Poppins fs-7 px-3 py-2'>Roadmap</Link>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className='leaf1_div d-none d-xl-block'>
                        <img className='img-fluid' src="assets/img/leaf-left.png" alt="" data-aos="fade-right" data-aos-duration="3000" />
                    </div>
                    <div className='leaf2_div d-none d-xl-block' data-aos="fade-left" data-aos-duration="3000">
                        <img className='img-fluid' src="assets/img/leaf-right.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
