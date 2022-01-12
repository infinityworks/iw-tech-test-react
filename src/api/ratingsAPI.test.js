import "@testing-library/jest-dom/extend-expect";
import useSWR from 'swr';

import getEstablishmentRatings from '../api/ratingsAPI';

const fetcher = (...args) =>
  fetch(...args, { headers: { "x-api-version": "2" } }).then((res) =>
    res.json()
  );

jest.mock('swr', () => jest.fn(() => ({ data: null, error: null })));
describe("Ratings API", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("call the ratings api with the provided page number and returns the data", async () => {
    const data = { data: { establishments: [] } };
    const error = null
    useSWR.mockImplementation(() => ({ data, error }));

    let pageNumber = 1;

    getEstablishmentRatings(pageNumber);


    const url = `https://api.ratings.food.gov.uk/Establishments/basic/${pageNumber}/10`;
    expect(useSWR).toHaveBeenCalledWith(
      expect.objectContaining({ url, fetcher }),
    )
  });
});
