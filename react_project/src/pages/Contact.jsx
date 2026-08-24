import Navbar from "../components/Navbar";

function Contact() {
  const pageStyle = {
    minHeight: "calc(100vh - 70px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "42px",
    marginBottom: "30px",
  };

  const storeStyle = {
    fontSize: "30px",
    marginBottom: "30px",
  };

  const textStyle = {
    fontSize: "21px",
    margin: "18px 0",
  };

  const messageStyle = {
    fontSize: "20px",
    marginTop: "35px",
  };

  return (
    <>
      <Navbar />

      <div style={pageStyle}>
        <div>
          <h1 style={headingStyle}>Contact Us</h1>

          <h2 style={storeStyle}>MyStore</h2>

          <p style={textStyle}>
            <b>Email:</b> mystore@gmail.com
          </p>

          <p style={textStyle}>
            <b>Phone:</b> +91 98765 43210
          </p>

          <p style={textStyle}>
            <b>Address:</b> Rajkot, Gujarat, India
          </p>

          <p style={messageStyle}>
            If you have any questions, feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;