import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./events.css";
import { UpcomingEventsData,PastEventsData } from "../data/events";

export const Events = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="cardss">
        <p class="mb-12 pb-4 text-center text-3xl font-bold">Upcoming Events</p>
        {UpcomingEventsData.map((value) => {
          return (
            <div className="card2">
              <div
                className="bgimg"
                style={{ backgroundImage: `url(${value.bgImage})` }}
              >
                <div class="content">
                  <b classname="para">Event :{value.title} </b>
                  <b className="para">Date : {value.date}</b>
                  <b className="para">Venue : {value.venue}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cardss">
        <p class="mb-12 pb-4 text-center text-3xl font-bold">Past Events</p>
        {PastEventsData.map((value) => {
          return (
            <div className="card2">
              <div
                className="bgimg"
                style={{ backgroundImage: `url(${value.bgImage})` }}
              >
                <div class="content">
                  <b classname="para">Event :{value.title} </b>
                  <b className="para">Date : {value.date}</b>
                  <b className="para">Venue : {value.venue}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Events;
