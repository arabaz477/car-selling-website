import { useEffect, useState } from "react";
import axios from "axios";
import "./Img.css"

function ImageUpload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios
      .get("http://127.0.0.1:8000/api/images/")
      .then((res) => {
        setImages(res.data.results); // pagination ke liye
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/images/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Image Uploaded Successfully");
      setTitle("");
      setImage(null);

      fetchImages(); // upload ke baad refresh
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="container mt-4">

  <h1 className="heading">🚗 Old Car Selling</h1>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Enter Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <input
      type="file"
      className="form-control mb-3"
      onChange={(e) => setImage(e.target.files[0])}
    />

    <button className="btn btn-primary w-100">
      Upload Car
    </button>
  </form>

  <hr />

  <div className="row">
    {images.map((item) => (
      <div className="col-md-4 mb-4" key={item.id}>
        <div className="card">

          <div className="logo-badge">
            🚘 Old Car Selling
          </div>

          <img
            src={item.image}
            className="card-img-top"
            alt={item.title}
          />

          <div className="card-body">
            <h5>{item.title}</h5>
          </div>

        </div>
      </div>
    ))}
  </div>

</div>
  );
}

export default ImageUpload;