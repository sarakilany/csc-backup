import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { handleHasLoged } from "../../redux/action";
import { Button } from 'reactstrap';
import "./Footer.css";

function Footer() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const OnLogOut =()=>{
        dispatch(handleHasLoged(null));
        navigate("/")
        window.scrollTo(0, 0);
    }

  return (
    <div className='my-footer green-bg py-3'>
        <div className="container mx-auto row">
            <div className='col-lg-3 col-md-6 my-4'>
                <div className='d-flex'>
                    <img src="" alt="" />
                    <h4 className='fs-5 mt-1'>CSC</h4>
                </div>
                <p className=' footer-text text-white'>&copy; Community Scrap Collector 2022</p>
            </div>
            <div className='col-lg-3 col-md-6 my-4'>
                <div>
                    <h4 className='fs-5 mt-1'>Company</h4>
                    <Link className=' footer-text text-white d-block text-decoration-none mb-2' to="/about">About Us</Link>
                    <Link className=' footer-text text-white d-block text-decoration-none mb-2' to="/contactUs">Contact Us</Link>
                    <Link className=' footer-text text-white d-block text-decoration-none mb-2' to="/privacy">Privacy & Policy</Link>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 my-4'>
                <div>
                    <h4 className='fs-5 mt-1'>Our Media</h4>
                    <a target="_blank" rel='noreferrer' href="https://www.facebook.com/Community-Scrap-Collector-105916102216652/" className='footer-i overflow-hidden mb-2 white-text p-1 d-block rounded-circle d-flex justify-content-center align-items-center text-decoration-none'><i class="fa-brands fa-facebook-f"></i></a>
                    <a target="_blank" rel='noreferrer' href="https://www.twiter.com" className='footer-i overflow-hidden mb-2 white-text p-1 d-block rounded-circle d-flex justify-content-center align-items-center text-decoration-none'><i class="fa-brands fa-twitter"></i></a>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com" className='footer-i overflow-hidden mb-2 white-text p-1 d-block rounded-circle d-flex justify-content-center align-items-center text-decoration-none'><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 my-4 d-flex flex-column align-items-stretch justify-content-center'>
                {
                    state.has_loged === null ?
                    (<>
                        <Button
                          onClick={()=> navigate('/login')}
                          variant="primary"
                          className="nav-btn mx-md-1 d-block my-2 white-bg green-text fw-semibold border-0 shadow-none"
                        >
                          Log In
                        </Button>
                        <Button
                          onClick={()=> navigate('/register')}
                          variant="primary"
                          className="nav-btn mx-md-1 d-block my-2 white-bg green-text fw-semibold border-0 shadow-none"
                        >
                            Sign Up
                        </Button>
                    </>)
                    :
                    (<>
                    <Button
                          onClick={OnLogOut}
                          variant="primary"
                          className="nav-btn mx-md-1 d-block my-2 white-bg green-text fw-semibold border-0 shadow-none"
                        >
                            Log Out
                        </Button>
                    </>)
                }
            </div>
        </div>
    </div>
  )
}

export default Footer