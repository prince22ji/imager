import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios";
function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  // function t(pageNumber){
  //     var pageNumber;
  //     pageNumber=pageNumber+1;
  //     return pageNumber
  // }
  // cosnt v=setInterval(t,3000)

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(
        `photos/?client_id=kuNKOj83rk51RKOomonfSSCBRci5oSYNrXEKEPRHJYA`
      );

      setImages((prevImages) => {
        return prevImages.concat(request.data);
      });
      setLoading(false);
      console.log("executed full");
    }
    fetchData();
  }, [page]);

  const image = images.map((images) => (
    <img
      src={images.urls?.regular}
      alt={images?.alt_description}
      key={images?.id}
    />
  ));

  function con() {
    console.log("event fired");
  }

  return (
    <div className="photoDiv">
      <div className="photoGrid" onScroll={con}>
        {image}
      </div>

      {loading ? (
        <div>
          <p>Loading.....</p>
        </div>
      ) : null}
    </div>
  );
}

export default Gallery;
