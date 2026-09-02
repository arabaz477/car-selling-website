import { useState, useEffect } from "react";
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

    <button>
        Proceed To Payment
    </button>
</div>
    </div>
  );
}

export default AddPage;