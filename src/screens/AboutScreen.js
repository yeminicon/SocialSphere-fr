import React from 'react';
import { Helmet } from 'react-helmet-async';

import '../index.css';

export default function AboutScreen() {
  

  return (
    <div>
     <div className='box'></div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>About Us</h1>
      <section id = "about" class = "py-5">
        <div class = "container">
            <div class = "row gy-lg-5 align-items-center">
                <div class = "col-lg-6 order-lg-1 text-center text-lg-start">
                    <div class = "title pt-3 pb-5">
                        <h2 class = "position-relative d-inline-block ms-4">About Us</h2>
                    </div>
                    <p class = "lead text-muted">Moderite is an online shop in Nigeria ✓ Modrite builds a digital Africa, connecting Africans with each other .</p>
                    <p>Modrite is a Pan-African technology company that is built around a marketplace, logistics service and payment service. The logistics service enables the delivery of packages through a network of local partners while the payment services facilitate the payments of online transactions within Moderite’s ecosystem.</p>
                </div>
                <div class = "col-lg-6 order-lg-0">
                    <img src = "../assets/about_us.jpg" alt = "" class = "img-fluid" />
                </div>
            </div>
        </div>
    </section>
    <section id = "newsletter" class = "py-5">
        <div class = "container">
            <div class = "d-flex flex-column align-items-center justify-content-center">
                <div class = "title text-center pt-3 pb-5">
                    <h2 class = "position-relative d-inline-block ms-4">Newsletter Subscription</h2>
                </div>

                <p class = "text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem officia accusantium maiores quisquam dolorum?</p>
                <div class = "input-group mb-3 mt-3">
                    <input type = "text" class = "form-control" placeholder="Enter Your Email ..." />
                    <button class = "btn btn-primary" type = "submit">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
   
    </div>
  );
}
