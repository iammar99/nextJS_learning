"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <main className="h-screen bg-zinc-800 flex items-center">
            <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://picsum.photos/id/1015/800/400"
                            alt="Nature landscape"
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://picsum.photos/id/1025/800/400"
                            alt="Dog photo"
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://picsum.photos/id/1043/800/400"
                            alt="Forest scenery"
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>

                    <div>
                        <img
                            src="https://picsum.photos/id/1056/800/400"
                            alt="Mountain view"
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </div>
                </Slider>
            </div>
        </main>
    );
}
