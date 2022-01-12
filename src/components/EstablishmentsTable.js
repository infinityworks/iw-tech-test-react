import React from "react";
import PropTypes from "prop-types";

import getEstablishmentRatings from "../api/ratingsAPI";
import { EstablishmentsTableRow } from "./EstablishmentsTableRow";

const headerStyle = {
  paddingBottom: "10px",
  textAlign: "left",
  fontSize: "20px",
};

export const EstablishmentsTable = ({ pageNumber }) => {
  const { establishments, isError } =
    getEstablishmentRatings(pageNumber);

  if (isError) return <div>Error: {isError}</div>;
  return (
    <table>
      <tbody>
        <tr>
          <th style={headerStyle}>Business Name</th>
          <th style={headerStyle}>Rating Value</th>
        </tr>
        {establishments && establishments?.map((establishment, index) => (
          <EstablishmentsTableRow key={index} establishment={establishment} />
        ))}
      </tbody>
    </table>
  );
};

EstablishmentsTable.propTypes = {
  pageNumber: PropTypes.number,
};
