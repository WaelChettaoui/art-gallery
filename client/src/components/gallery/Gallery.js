import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Gallery = () => {
  
  const [paintings, setPaintings] = useState();

  useEffect(() => {
    const fetchPaintings = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/painting/`);
      const data = await res.json();
      setPaintings(data);
    };
    fetchPaintings();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/painting/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedPaintings = paintings.filter((painting) => painting._id !== id);
        setPaintings(updatedPaintings);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row">
      {paintings?.map((painting) => (
        <div className="col-md-3 card me-3 mt-2 p-0" key={painting._id}>
          <img src={painting.paintingImg} alt="" width={"100%"} height={200} />
          <div className="p-2">
            <h3>{painting.name}</h3>
            <h3>{painting.artist}</h3>
            <h3>{painting.year}</h3>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`${painting._id}`} style={{ textDecoration: "none" }}>
                Edit
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(painting._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
