import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import axios from "axios";
import './CarDetails.css'

function CardDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/cars/${id}/`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

 if (!car) {
  return <h1>Loading...</h1>;
}
const addToCart = (car) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    ...car,
    quantity: 1,
  });

  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCard = (car) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(
    (item) => item.id === car.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...car,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartUpdated"));

  alert("Item Added To Cart");
};

  return (
      <>
  <div className="car-details">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src={car.car_images} alt="" className="slider-img" />
        </SwiperSlide>

       {car.car_images && (
  <SwiperSlide>
    <img src={car.car_images1} alt="" className="slider-img" />
  </SwiperSlide>
)}

{car.car_images2 && (
  <SwiperSlide>
    <img src={car.car_images2} alt="" className="slider-img" />
  </SwiperSlide>
)}
      </Swiper>

    <div className="car-info">
      <h1>{car.car_name}</h1>
      <h2>₹ {car.car_price}</h2>

      <div className="spec">
        <span>🚗 Model</span>
        <span>{car.car_model}</span>
      </div>

      <div className="spec">
        <span>🎨 Color</span>
        <span>{car.car_color}</span>
      </div>

      <div className="spec">
        <span>⚡ Speed</span>
        <span>{car.car_speed}</span>
      </div>

      <div className="spec">
        <span>🔖 Version</span>
        <span>{car.car_version}</span>
      </div>

      <p>{car.description}</p>

      <div className="btns">

<Link to={`/card/${car.id}/AddPage`}>
  <button onClick={() => addToCart(car)}>
    Add To Cart
  </button>
</Link>
        <button className="buy-btn">Buy Now</button>


      </div>

    </div>

  </div>

 <div className="description">
          <h1><b>description
              </b></h1>
              <p>For other uses, see Car (disambiguation).
The Ford Model T, produced from 1908 to 1927, is widely credited with being the first mass-affordable automobile, and it remains one of the best-selling cars of all time.
Classification	Vehicle
Industry	Various
Application	Transportation

A car, or an automobile, is a motor vehicle with wheels.
 Most definitions of cars state that they run primarily on roads,
 seat 1-8 people, have four wheels, and mainly transport people rather than cargo.[1][2] There are over 1.6 billion cars in use worldwide as of 2025.

The French inventor Nicolas-Joseph Cugnot built the
first steam-powered road vehicle in 1769, and the Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808. The modern car—a practical, marketable automobile for
 everyday use—was invented in 1886, when the German inventor Carl Benz patented his Benz Patent-</p>

          </div>
          </>

  );
}

export default CardDetails;