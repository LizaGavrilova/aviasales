import axios from 'axios';

const getId = async () => {
  const { data } = await axios.get(
    'https://aviasales-test-api.java-mentor.com/search'
  );
  return data;
};

const getTickets = async (searchId) => {
  const { data } = await axios.get(
    `https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`
  );
  return data;
}

export {
  getId,
  getTickets
};
