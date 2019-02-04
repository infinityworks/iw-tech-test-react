import React from "react";
import {EstablishmentsTableRow} from "./EstablishmentsTableRow";
import PropTypes from "prop-types";

const headerStyle = {
    paddingBottom: "10px",
    textAlign: "left",
    fontSize: "20px"
};

export class EstablishmentsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th style={headerStyle}>Business Name</th>
                        <th style={headerStyle}>Rating Value</th>
                    </tr>
                    {this.props.establishments.map(establishment => (
                        <EstablishmentsTableRow establishment={establishment}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

EstablishmentsTable.propTypes = {
    establishments: PropTypes.array
};