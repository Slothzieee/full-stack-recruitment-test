import { useState, useEffect } from "react";

import getFlightsInfo from "../../functions/getFlightsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DepartureInfo from "../DepartureInfo/DepartureInfo";

import STYLES from "./FlightCards.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const FlightCard = () => {
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);

  const sanitizeTime = new RegExp(/(.*)(?<=t)/gi);

  useEffect(() => {
    const hasNoLegs = !legs.length;
    if (hasNoLegs) {
      (async () => {
        const flightsInfo = await getFlightsInfo();
        setItineraries(flightsInfo.itineraries);
        setLegs(flightsInfo.legs);
      })();
    }
  }),
    [legs.length];

  const journeyInfo = itineraries.map((itinerary, i) => {
    const tripInfo = itinerary.legs.map((trip, i) => {
      const matchingTrip = legs.find((leg) => leg.id === trip);

      if (matchingTrip) {
        const hasStops =
          matchingTrip.stops > 0 ? (
            <p style={{ color: "red" }}>{matchingTrip.stops} Stop</p>
          ) : (
            <p style={{ color: "#09a598" }}>Direct</p>
          );

        const hours = Math.round(matchingTrip.duration_mins / 60);
        const min = matchingTrip.duration_mins % 60;
        const flightDuration = `${hours}h ${min}`;
        const sanitizedDepartureTime = matchingTrip.departure_time.replace(
          sanitizeTime,
          ""
        );
        const sanitizedArrivalTime = matchingTrip.arrival_time.replace(
          sanitizeTime,
          ""
        );
        const departureAirport = matchingTrip.departure_airport;
        const arrivallAirport = matchingTrip.arrival_airport;

        return (
          <div className={getClassName("trip__info__container")} key={i}>
            <div className={getClassName("trip__departure-info")}>
              <DepartureInfo
                time={sanitizedDepartureTime}
                airport={departureAirport}
              />
              <FontAwesomeIcon
                className={getClassName("trip__arrow-icon")}
                icon={faArrowRight}
              />
              <DepartureInfo
                time={sanitizedArrivalTime}
                airport={arrivallAirport}
              />
            </div>
            <div className={getClassName("trip__flight-details")}>
              <p>{flightDuration}</p>
              {hasStops}
            </div>
          </div>
        );
      }
    });

    return (
      <div className={getClassName("trip__container")} key={i}>
        {tripInfo}
        <div
          className={
            (getClassName("trip__info__container"),
            getClassName("trip__info__container--price"))
          }
        >
          <div>
            <h2>{itinerary.price}</h2>
            <p>{itinerary.agent}</p>
          </div>
          <button>Select</button>
        </div>
      </div>
    );
  });

  return <div className="trip">{journeyInfo}</div>;
};

export default FlightCard;
