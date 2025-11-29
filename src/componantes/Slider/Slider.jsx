import React from 'react'
import './Slider.css'
import banner1 from '../../img/banner_Hero1.jpg'
import banner2 from '../../img/banner_Hero2.jpg'
import banner3 from '../../img/banner_Hero3.jpg'

function Slider() {
    return (
        <>

            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner1} className="d-block w-100" alt="banner1"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>INTRODUCING THE NEW</h5>
                                    <h1>Microsoft Xbox 360 Controller</h1>
                                    <p>Windos xp/10/7/8 os3, Tv Box</p>
                                    <button type="button" className="btn btn-primary">Primary</button>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block w-100" alt="banner2"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>INTRODUCING THE NEW</h5>
                                    <h1>Microsoft Xbox 360 Controller</h1>
                                    <p>Windos xp/10/7/8 os3, Tv Box</p>
                                    <button type="button" className="btn btn-primary">Primary</button>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100" alt="banner3"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>INTRODUCING THE NEW</h5>
                                    <h1>Microsoft Xbox 360 Controller</h1>
                                    <p>Windos xp/10/7/8 os3, Tv Boxr</p>
                                    <button type="button" className="btn btn-primary">Primary</button>
                                </div>
                        </div>
                    </div>
                   
                </div>


            </div>


        </>
    )
}

export default Slider;