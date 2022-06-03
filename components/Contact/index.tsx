import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-secondary min-h-60 w-full px-5 py-10 border-t-4"
    >
      <div className="max-w-screen-md xxl:max-w-screen-xl xxxl:max-w-screen-xxl mx-auto">
        <h2 className="text-primary text-center text-xl font-bold uppercase mb-8 tracking-widest">
          CONTACT
        </h2>
        <div className="grid grid-cols-2 gap-4 text-primary">
          <div>
            <p>Tel: +48 600 631 820</p>
            <p>Email: info@astrolabestories.com</p>
          </div>
          <div>
            <p>Komorowska 11/2</p>
            <p>54-436 Wrocław</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
