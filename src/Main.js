import React, { useRef, useState } from 'react';
// Import Swiper React components
import logo from "./Assets/logo.jpg";
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay} from 'swiper/modules';

import './App.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import rakhi1 from "./Assets/rakhi1.jpg";
import rakhi2 from "./Assets/rakhi2.jpg";
import rakhi3 from "./Assets/rakhi3.jpg";
import rakhi4 from "./Assets/rakhi4.jpg";
import rakhi5 from "./Assets/rakhi5.jpg";
import rakhi6 from "./Assets/rakhi6.jpg";
import rakhi7 from "./Assets/rakhi7.jpg";
import rakhi8 from "./Assets/rakhi8.jpg";
import rakhi9 from "./Assets/rakhi9.jpg";
import rakhi10 from "./Assets/rakhi10.jpg";
import rakhi11 from "./Assets/rakhi11.jpg";
import rakhi12 from "./Assets/rakhi12.jpg";

import hr1 from "./Assets/hr1.jpeg";

  
export default function Main() {
  const content = [
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi1 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi2 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi3 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi4 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi5 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi6 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi7 },
    { title: 'Second item', description: 'Lorem ipsum', image: rakhi8 },
           
  
  ];
  

   const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  return (
    <div className="w-100vw h-full mt-20 overflow-x-hidden ">
    
      

  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={hr1} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi1} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi2} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi3} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi4} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi5} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi6} ></img></SwiperSlide>
        <SwiperSlide><img src={rakhi7}></img></SwiperSlide>
        <SwiperSlide><img src={rakhi8} ></img></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>


       <div id='Products' className='mt-20 w-full h-10 overflow-hidden flex justify-center items-center text-2xl font-bold'><h1>PRODUCTS</h1></div>
     
      
        <div data-aos="fade-left" className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h-[80vh]">
        
        
              <Product title="Rakhi" description="The Gem Rakhi, a radiant and enchanting creation, sparkles with the brilliance of carefully selected gemstones. " image={rakhi12}></Product>
                <Product title="Designer Rakhi" description="
Designer rakhi is a perfect fusion of tradition and contemporary aesthetics, crafted with precision to add a touch of elegance." image={rakhi1}></Product>
        
        <Product title="Premium Rakhi" description="Premium rakhi, goes beyond the ordinary, elevating the celebration of Raksha Bandhan to a whole new level. " image={rakhi2}></Product>
                    <Product title="Ganesha Rakhi" description="
The Ganesha Rakhi, a divine and auspicious creation, beautifully blends tradition with spiritual symbolism" image={rakhi3}></Product>
        
                      <Product title="Textured Rakhi" description="The Textured Rakhi, a modern twist to tradition, captivates with its tactile allure and unique design. " image={rakhi4}></Product>
        <Product title="Pearl Rakhi" description="The Pearl Rakhi, a symbol of purity and elegance, transcends traditional boundaries with its timeless charm." image={rakhi5}></Product>
                          <Product title="Exclusive Rakhi" description="The Exclusive Rakhi, stands as a testament to the extraordinary bond shared between siblings." image={rakhi6}></Product>
                            <Product title="Gem Rakhi" description="The Gem Rakhi, a radiant and enchanting creation, sparkles with the brilliance of carefully selected gemstones. " image={rakhi7}></Product>
                         <Product title="RAKHI" description="RAKHI IS GREAT" image={rakhi8}></Product>
                                <Product title="RAKHI" description="RAKHI IS GREAT" image={rakhi9}></Product>
                                  <Product title="RAKHI" description="RAKHI IS GREAT" image={rakhi10}></Product>
                        
                                            <Product title="RAKHI" description="RAKHI IS GREAT" image={rakhi11}></Product>
            
            
      </div>
      

       <div id='About' className='mt-20 w-full h-10 overflow-hidden flex justify-center items-center text-2xl font-bold'><h1>ABOUT US</h1></div>
      
<section class="py-3 py-md-5 py-xl-8">
  <div data-aos="fade-right" class="container">
    <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div class="col-12 col-lg-6 col-xl-5">
        <img class="img-fluid rounded" loading="lazy" src={logo} alt=""></img>
      </div>
      <div class="col-12 col-lg-6 col-xl-7">
        <div class="row justify-content-xl-center">
          <div class="col-12 col-xl-11">
            <h2 class="h1 mb-3">Who Are We?</h2>
            <p class="lead fs-4 text-secondary mb-3">SA RAKHI,the premier Rakhi manufacturer in India, has established itself with over 25+ years of expertise, offering a diverse collection of meticulously crafted designs. Our tailored pricing accommodates various budgets, and we place a strong emphasis on customer feedback, fostering a widespread network of dealers and wholesalers across the country.</p>
            <p class="mb-5">
Discover the Essence of Sibling Love at our Rakhi Store in Surat! Unveil a world of exquisite rakhis that blend tradition with trend, available exclusively for you. From intricately designed designer rakhis to opulent premium ones, and from divine Ganesha rakhis to modern textured creations – our collection has something for every style and sentiment.</p>
            <div class="row gy-4 gy-md-0 gx-xxl-5X">
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-gear-fill" viewBox="0 0 16 16">
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Versatile Brand</h4>
                    <p class="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex">
                  <div class="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" class="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="mb-3">Digital Agency</h4>
                    <p class="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
      


      
      <footer class="footer-section" id='Contact'>
        <div data-aos="fade-up" class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1ST FLOOR HOLI CHAKLA NEAR MOTA MANDIR SURAT</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9712326876</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>chaitanyasethia@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src={logo} class="img-fluid" alt="logo"></img></a>
                            </div>
                            <div class="footer-text">
                                <p>Find the most prestigious collection of rakhi</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                  <a href="https://www.instagram.com/sethia_arts/"><i class="fab fa-instagram instagram-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 ">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Motive</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>At our Rakhi Store in Surat, our motive is to encapsulate the essence of sibling bonds through a curated collection of rakhis that blend tradition, artistry, and contemporary flair.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://github.com/panchalparth471">Parth</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
      
    </div>
  );
}
