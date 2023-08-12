import React from "react";

const CardContact = ({ contact }) => {
  const { full_name, email, address, phone } = contact;
  return (
    <div className="col-sm-6 col-md-3 my-2">
      <div className="card">
        <img
          src="https://picsum.photos/id/237/200/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{full_name}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">{address}</p>
          <p className="card-text">{phone}</p>
          <button className="btn btn-primary">X</button>
          <button className="btn btn-danger ms-2">X</button>
        </div>
      </div>
    </div>
  );
};

export default CardContact;