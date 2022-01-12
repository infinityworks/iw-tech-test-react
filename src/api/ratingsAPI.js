import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args, { headers: { "x-api-version": "2" } }).then((res) =>
    res.json()
  );

const getEstablishmentRatings = (pageNumber) => {
  const url = `https://api.ratings.food.gov.uk/Establishments/basic/${pageNumber}/10`;
  const { data, error } = useSWR(url, fetcher);

  return {
    establishments: data?.establishments,
    isError: error,
  };
}

export default getEstablishmentRatings;