import Card from "../Components/Display/Display";
import contacts from "../Components/Display/Contacts";
import { useState, useRef, useEffect } from "react";
import Maps from "../Components/Maps";
import emailjs from "emailjs-com";
import "./style/style.css";

function Contacts() {
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-css");
        } else {
          entry.target.classList.remove("show-css");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-css");
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_d3tqnvw";
    const templateId = "template_7jf7bnf";
    const userId = "7umn539j8MK0nPQXe";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: name,
          email: email,
          review: review,
        },
        userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);

        setName("");
        setEmail("");
        setReview("");
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div
      className={`flex flex-col items-center min-h-screen blur-bg1 ${
        showModal ? "fixed w-full h-full" : ""
      }`}
    >
      <br />
      <br />
      <br />

      <div className="hidden-css mt-8">
        <h1 className="text-5xl font-bold mt-8 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          <Card
            gambar={contacts[0].gambar}
            judul={contacts[0].judul}
            isi={contacts[0].isi}
            href={contacts[0].href}
          />
          <Card
            gambar={contacts[1].gambar}
            judul={contacts[1].judul}
            href={contacts[1].href}
            isi={contacts[1].isi}
            className="max-w-xs"
          />
          <Card
            gambar={contacts[2].gambar}
            judul={contacts[2].judul}
            href={contacts[2].href}
            isi={contacts[2].isi}
            className="max-w-xs"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id="maps" className="w-full md:w-600 px-4 py-6 md:px-8 md:py-10">
        <h1 className="mt-10 text-5xl font-bold text-center ">Location</h1>
        <br />

        <br />
        <Maps />
      </div>

      <div id="email" className="w-full md:w-600 px-4 py-6 md:px-8 md:py-10">
        <h1 className="mt-10 text-5xl font-bold text-center">Feedback</h1>
        <br />
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-gray-700 font-bold mb-2"
            >
              Review:
            </label>
            <textarea
              id="review"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Enter your review"
              value={review}
              onChange={handleReviewChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p>Your Review Has Been Submitted</p>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div id="phone"></div>
    </div>
  );
}

export default Contacts;
