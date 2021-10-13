import axios from "axios";

const getFlightsInfo = async () => {
  try {
    const { data } = await axios.get("/flights.json");

    return data;
  } catch (err) {
    console.log(err);
  }
};

export default getFlightsInfo;
