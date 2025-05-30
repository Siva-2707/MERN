import React from "react";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <>
      <section>
        <Header />
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <div className="text-center p-4 border rounded bg-white shadow-sm">
            <h2 className="mb-4">Contact Us</h2>
            <p className="mb-2">
              <strong>Address:</strong> 5612, Sout Street, Halifax NS B3H 1X5, Canada
            </p>
            <p className="mb-2">
              <strong>Email:</strong> hi@productmanager.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (902) 987-6543
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;