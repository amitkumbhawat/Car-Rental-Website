import { useState } from "react";

function BookCar() {
  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  return (
    <section id="booking-section" className="book-section">
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a car</h2>

            <form className="box-form">
              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                  Type <b>*</b>
                </label>
                <select value={carType} onChange={handleCar}>
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">
                    BMW 320 ModernLine
                  </option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                  <b>*</b>
                </label>
                <select value={pickUp} onChange={handlePick}>
                  <option>Select pick up location</option>
                  <option>New Delhi</option>
                  <option>Mumbai</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                  <option>Pune</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label>
                  <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                  <b>*</b>
                </label>
                <select value={dropOff} onChange={handleDrop}>
                  <option>Select drop off location</option>
                  <option>New Delhi</option>
                  <option>Mumbai</option>
                  <option>Noida</option>
                  <option>Faridabad</option>
                  <option>Pune</option>
                </select>
              </div>

              <div className="box-form__car-time">
                <label htmlFor="picktime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  Pick-up <b>*</b>
                </label>
                <input
                  id="picktime"
                  value={pickTime}
                  onChange={handlePickTime}
                  type="date"
                ></input>
              </div>

              <div className="box-form__car-time">
                <label htmlFor="droptime">
                  <i className="fa-regular fa-calendar-days "></i> &nbsp;
                  Drop-of <b>*</b>
                </label>
                <input
                  id="droptime"
                  value={dropTime}
                  onChange={handleDropTime}
                  type="date"
                ></input>
              </div>

              <button type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCar;
