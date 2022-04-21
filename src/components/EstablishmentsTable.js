import React from "react";
import PropTypes from "prop-types";
import useSWR from "swr";

import { EstablishmentsTableRow } from "./EstablishmentsTableRow";
import { fetcher } from "../utils";

const headerStyle = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

export const EstablishmentsTable = ({ pageNumber }) => {
  const url = `https://api.ratings.food.gov.uk/Establishments/basic/${pageNumber}/10`;
  const { data, error } = useSWR(url, fetcher);
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
