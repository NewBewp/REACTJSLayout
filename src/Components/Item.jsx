import React from "react";

const Item = () => {
  return (
    // <div className="col-lg-5 col-xxl-3 mb-4">
    //   <div className="card bg-light border-0 h-100">
    //     <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
    //       <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
    //         <i className="bi bi-collection" />
    //       </div>
    //       <h2 className="fs-4 fw-bold">Fresh new layout</h2>
    //       <p className="mb-0">
    //         With Bootstrap 5, we've created a fresh new layout for this
    //         template!
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="col mt-4">
      <div className="card">
        <img src="../src/Image/500x325.png" style={{ backgroundSize: 100 }} />
        <div className="card-body border-bottom">
          <h5>Card title</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="card-bottom p-2 bg-light">
          <button type="button" class="btn btn-primary">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
