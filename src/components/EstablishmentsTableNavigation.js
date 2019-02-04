import React from "react";
import PropTypes from "prop-types";

const buttonStyle = {
    margin: "0 5px"
};

export class EstablishmentsTableNavigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                {<button type="button" style={buttonStyle} disabled={this.props.pageNum <= 1} onClick={this.props.onPreviousPage}>-</button>}
                {this.props.pageNum}
                {<button type="button" style={buttonStyle} disabled={this.props.pageNum >= this.props.pageCount} onClick={this.props.onNextPage}>+</button>}
            </nav>
        );
    }
}

EstablishmentsTableNavigation.propTypes = {
    pageNum: PropTypes.number,
    pageCount: PropTypes.number,
    onPreviousPage: PropTypes.func,
    onNextPage: PropTypes.func,
};