import React from 'react'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Footer() {
  return (
    <footer className=" bg-dark py-5 text-center">
 
    <div class = "container">
    <div class = "row text-white g-4 justify-content-center"  style={{ width: '100%'}}>
    <div class = "col-md-6 col-lg-3">
    <div class = "d-flex justify-content-start align-items-start my-2 text-muted">
    <span class = "me-3">
                        <i class = "fas fa-envelope"></i>
                    </span>
                    <span class = "fw-light">
                    help@moderite.com
                    </span>
                   
                </div>
  

    </div>
    <div class = "col-md-6 col-lg-3">
    <div class = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class = "me-3">
                        <i class = "fas fa-map-marked-alt"></i>
                    </span>
                    <span class = "fw-light">
                        Raypower Road, 1 Kolade, Alimosho, Lagos, Nigria
                    </span>
                </div>
    </div>
    <div class = "col-md-6 col-lg-3"><span class = "me-3">
                        <i class = "fas fa-phone-alt"></i>
                    </span>
                    <span class = "fw-light">
                        +2348144616094<br></br>
                        +123456789010
                    </span></div>
        
        <div class = "col-md-6 col-lg-3">

            
        <Button variant="light">
            Subscribe
          </Button>
        </div>
    </div>
    <hr />
        <div class = "row text-white g-4">
            <div class = "col-md-6 col-lg-3">
            <Link className="text-uppercase text-decoration-none brand text-white" to="/">
            About modrite
                    </Link>
                
                    <ul class = "list-unstyled">
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
          Contact Us
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
           About Us
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
            Careers
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
           Our Blog
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
          Forum
                    </Link>
                    </li>
                </ul>
                       </div>

            <div class = "col-md-6 col-lg-3">
            <Link className="text-uppercase text-decoration-none brand text-white" to="/">
            Payment
                    </Link>
                    <ul class = "list-unstyled">
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
         ModritePay
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
           Palpay
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
            MasterCard
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
           Swift
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
          Wallet
                    </Link>
                    </li>
                </ul>
            </div>

            <div class = "col-md-6 col-lg-3">
                <h5 class = "fw-light mb-3">Contact Us</h5>
                <div class = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class = "me-3">
                        <i class = "fas fa-map-marked-alt"></i>
                    </span>
                    <span class = "fw-light">
                        Raypower Road, 1 Kolade, Alimosho, Lagos, Nigria
                    </span>
                </div>
                <div class = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class = "me-3">
                        <i class = "fas fa-envelope"></i>
                    </span>
                    <span class = "fw-light">
                        modrite.support@gmail.com<br></br>
                        info@moderite.com
                    </span>
                </div>
                <div class = "d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class = "me-3">
                        <i class = "fas fa-phone-alt"></i>
                    </span>
                    <span class = "fw-light">
                        +2348144616094<br></br>
                        +123456789010
                    </span>
                </div>
            </div>

            <div class = "col-md-6 col-lg-3">
                <h5 class = "fw-light mb-3">More Info</h5>
                <div>
                <ul class = "list-unstyled">
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
          Digital Services
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
           Bulk Purchase
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
            Buyer Safety Centre
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
          Track My Order
                    </Link>
                    </li>
                    <li class = "my-3">
                    <Link className="text-white text-decoration-none text-muted" to="/">
         Authentic Items Policy
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
       
    </div>
    <div className='text-center' style={{color: 'white'}}>
    <p> <small>&copy; Copyright 2022, Technolar Corporation</small> </p>
   
    </div>
</footer>
  )
}

export default Footer