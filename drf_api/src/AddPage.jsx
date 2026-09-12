import { useState, useEffect } from "react";
import axios from "axios";
import "./Page.css";

function AddPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const cartData =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCars(cartData);
  }, []);

  const increaseQty = (id) => {
    const updatedCars = cars.map((car) =>
      car.id === id
        ? { ...car, quantity: car.quantity + 1 }
        : car
    );

    setCars(updatedCars);
    localStorage.setItem("cart", JSON.stringify(updatedCars));
  };

  const decreaseQty = (id) => {
    const updatedCars = cars.map((car) =>
      car.id === id && car.quantity > 1
        ? { ...car, quantity: car.quantity - 1 }
        : car
    );

    setCars(updatedCars);
    localStorage.setItem("cart", JSON.stringify(updatedCars));
  };

  const removeItem = (id) => {
    const updatedCars = cars.filter(
      (car) => car.id !== id
    );

    setCars(updatedCars);
    localStorage.setItem("cart", JSON.stringify(updatedCars));
  };

const grandTotal = cars.reduce(
  (total, item) => total + item.car_price * item.quantity,
  0
);

const handlePayment = async () => {
  try {

    const { data } = await axios.post(
      "https://car-selling-website-m2sn.onrender.com/orders/",
      {
        amount: grandTotal,
      }
    );

    console.log(data);

    const options = {
      key: "rzp_test_TXuzSLE4v1nSqc",

      amount: data.amount,
      currency: data.currency,
      order_id: data.id,

      name: "Car Selling Website",
      description: "Car Purchase",

      handler: async function (response) {

        await axios.post(
          "http://127.0.0.1:8000/payment-success/",
          {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            amount: grandTotal,
          }
        );

        localStorage.removeItem("cart");
        setCars([]);

        alert("Order Placed Successfully");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

  } catch (error) {
    console.log(error);
    alert("Payment Failed");
  }
};
  return (
    <div className="core">
      <h2>Cart Items</h2>

      {cars.map((car) => (
        <div className="core2" key={car.id}>
          <img src={car.car_images} alt={car.car_name} />

          <div>
            <h4>{car.car_name}</h4>
            <p>₹ {car.car_price}</p>
          </div>

          <div className="qty">
            <button onClick={() => decreaseQty(car.id)}>
              -
            </button>

            <span>{car.quantity}</span>

            <button onClick={() => increaseQty(car.id)}>
              +
            </button>
          </div>

          <div className="total">
            ₹ {car.car_price * car.quantity}
          </div>

          <button
            className="delete-btn"
            onClick={() => removeItem(car.id)}
          >
            🗑️
          </button>
        </div>

      ))}
    <div className="payment-box">
    <h2>Total Amount: ₹{grandTotal}</h2>

{/*     <button onClick={handlePayment}> */}
{/*         Proceed To Payment */}
{/*     </button> */}

<button onClick={handlePayment}>
 Proceed To Payment
</button>
</div>
    </div>
  );
}

export default AddPage;