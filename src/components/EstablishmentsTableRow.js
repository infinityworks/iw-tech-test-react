import React from "react";
import PropTypes from "prop-types";

export class EstablishmentsTableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.establishment.BusinessName}</td>
                <td>{this.props.establishment.RatingValue}</td>
            </tr>
        );
    }
}

EstablishmentsTableRow.propTypes = {
    establishment: PropTypes.object,
};