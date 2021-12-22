import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { act } from 'react-dom/test-utils';

it("renders without crashing", async () => {
  const mockResponse = { "establishments": [] };
  fetch.mockResponseOnce(JSON.stringify(mockResponse));
  const div = document.createElement("div");
  await act(async () => {
    ReactDOM.render(<App />, div);
  });
  expect(div.querySelector('h2').innerHTML).toBe('Food Hygiene Ratings');
  ReactDOM.unmountComponentAtNode(div);
});
