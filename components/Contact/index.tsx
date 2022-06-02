import React from "react";

const Contact = () => {
  return (
    <div
      id="team"
      className="bg-secondary min-h-60 w-full px-5 py-10 border-t-4"
    >
      <div className="max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto">
        <h2 className="text-primary text-center text-xl font-bold uppercase mb-8 tracking-widest">
          CONTACT
        </h2>
        <div className="grid grid-cols-2 gap-4 text-primary">
          <div>
            <p>Tel: 123-456-7890</p>
            <p>Email: info@mysite.com</p>
          </div>
          <div>
            <p>500 Terry Francois Street</p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
