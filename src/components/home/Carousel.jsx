import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.css';


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
    };
    return (
      <div className="Carousel">
        <Slider {...settings}>
					{/* Carousel-1 */}
          <div>
            <div className="rounded-md grid grid-cols-5 gap-4 bg-top bg-gradient-to-r from-teal-800 to-gray-700">
              <div className="paragraph col-span-2 text-white">
                <p className="text-3xl pt-10">Data Realtime</p>
                <ul className="float pl-5 text-xl text-left pt-10 list-none">
                  <li className="pb-4">
									Menampilkan informasi secara tepat waktu, akurat, dan relevan sesuai dengan yang dibutuhkan oleh pengambil keputusan
                  </li>
                </ul>
              </div>
              <div className="image col-span-3 object-cover rounded-r-md gradient-mask-l-0 ">
                <img
                  src={process.env.PUBLIC_URL + "images/carousel_01.jpg"}
                  alt="carousel1"
                />
              </div>
            </div>
          </div>

					{/* Carousel-2 */}
          <div>
            <div className="rounded-md grid grid-cols-5 gap-4 bg-top bg-gradient-to-r from-teal-800 to-gray-700">
              <div className="paragraph col-span-2 text-white">
                <p className="text-3xl pt-10">Trend Saat Ini</p>
                <ul className="float pl-5 text-xl text-left pt-10 list-none">
                  <li className="pb-4">
									Informasi pendapatan Rumah Sakit, fluktuasi kunjungan harian dan demografi diagnosa dapat dilihat dengan cepat, mudah, dan akurat
                  </li>
                </ul>
              </div>
              <div className="image col-span-3 object-cover rounded-r-md gradient-mask-l-0 ">
                <img
                  src={process.env.PUBLIC_URL + "images/carousel_02.jpg"}
                  alt="carousel1"
                />
              </div>
            </div>
          </div>

					{/* Carousel-3 */}
					<div>
            <div className="rounded-md grid grid-cols-5 gap-4 bg-top bg-gradient-to-r from-teal-800 to-gray-700">
              <div className="paragraph col-span-2 text-white">
                <p className="text-3xl pt-10">Kemudahan Akses Laporan</p>
                <ul className="float pl-5 text-lg text-left pt-8 list-none">
                  <li className="pb-3">
                    Laporan informasi kunjungan dalam bentuk grafik dan tabel
                  </li>
                  <li className="pb-3">
                    Laporan pendapatan Rumah Sakit dalam bentuk grafik
                  </li>
                  <li className="pb-3">
                    Laporan informasi buku Register Unit Pelayanan
                  </li>
                </ul>
              </div>
              <div className="image col-span-3 object-cover rounded-r-md gradient-mask-l-0 ">
                <img
                  src={process.env.PUBLIC_URL + "images/carousel_03.jpg"}
                  alt="carousel1"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

// export default Carousel;

// return (
// <div className="Carousel">
// 	<div className="rounded-md grid grid-cols-5 gap-4 bg-top bg-gradient-to-r from-teal-800 to-gray-700">
// 		<div className="paragraph col-span-2 text-white">
// 			<p className="text-3xl pt-10">Kemudahan Akses Laporan</p>
// 			<ul className="float pl-5 text-xl text-left pt-10 list-none">
// 				<li className="pb-4">
// 					Laporan informasi kunjungan dalam bentuk grafik dan tabel
// 				</li>
// 				<li className="pb-4">
// 					Laporan pendapatan Rumah Sakit dalam bentuk grafik
// 				</li>
// 				<li className="pb-4">
// 					Laporan informasi buku Register Unit Pelayanan
// 				</li>
// 			</ul>
// 		</div>
// 		<div className="image col-span-3 object-cover rounded-r-md gradient-mask-l-0 ">
// 			<img
// 				src={process.env.PUBLIC_URL + "images/carousel_01.jpg"}
// 				alt="carousel1"
// 			/>
// 		</div>
// 	</div>
// </div>
// );
