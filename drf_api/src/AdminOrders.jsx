import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://car-selling-website-m2sn.onrender.com/orders/")
      .then((res) => {
        console.log("API Response:", res.data);

        // Pagination ho to results use karo
        if (res.data.results) {
          setOrders(res.data.results);
        } else {
          setOrders(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="admin-orders">
      <h2>All Orders</h2>

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Payment ID</th>
            <th>Order ID</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.payment_id}</td>
                <td>{order.order_id}</td>
                <td className="amount">₹{order.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Orders Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;