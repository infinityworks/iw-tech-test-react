import React, {useState} from "react";
import PropTypes from "prop-types";

import { EstablishmentsTableRow } from "./EstablishmentsTableRow";

const headerStyle = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

export const EstablishmentsTable = ({ pageNumber }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const url = `https://api.ratings.food.gov.uk/Establishments/basic/${pageNumber}/10`;
  
  fetch(url, { headers: { "x-api-version": "2" } })
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => setError(err))
  
  const { establishments } = data || {};

  if (error) return <div>Error: {error}</div>;
  return (
    <table>
      <thead>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
      </thead>
      <tbody>
        {establishments?.map((establishment, index) => (
          <EstablishmentsTableRow key={index} establishment={establishment} />
        ))}
      </tbody>
    </table>
  );
};

EstablishmentsTable.propTypes = {
  pageNumber: PropTypes.number,
};
