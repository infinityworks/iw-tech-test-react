import React from "react";
import {EstablishmentsTable} from "./EstablishmentsTable";
import {EstablishmentsTableNavigation} from "./EstablishmentsTableNavigation";
import {getEstablishmentRatings} from "../api/ratingsAPI";

const tableStyle = {
    background: "rgba(51, 51, 51, 0.9)",
    padding: "10px",
    width: "max-content",
    marginLeft: "50px",
    color: "white"
};

export class PaginatedEstablishmentsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            establishments: [],
            pageNum: 1,
            pageCount: 100,
        };
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    componentDidMount() {
        getEstablishmentRatings(this.state.pageNum)
            .then(
                (result) => {
                    this.setState({
                        establishments: result.establishments,
                    });
                },
                (error) => {
                    this.setState({
                        error,
                    });
                }
            )
    }

    async handlePreviousPage() {
        await this.setState((state) => (
            (this.state.pageNum > 1) && {
                pageNum: state.pageNum - 1,
            }
        ));
        getEstablishmentRatings(this.state.pageNum)
            .then(
                (result) => {
                    this.setState({
                        establishments: result.establishments,
                    });
                },
                (error) => {
                    this.setState({
                        error,
                    });
                }
            )
    }

    async handleNextPage() {
        await this.setState((state) => (
            (this.state.pageNum < this.state.pageCount) && {
                pageNum: state.pageNum + 1,
            }
        ));
        getEstablishmentRatings(this.state.pageNum)
            .then(
                (result) => {
                    this.setState({
                        establishments: result.establishments,
                    });
                },
                (error) => {
                    this.setState({
                        error,
                    });
                }
            )
    }

    render() {
        const { error, establishments } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div style={tableStyle}>
                    <h2>Food Hygiene Ratings</h2>
                    <EstablishmentsTable establishments={establishments}/>
                    <EstablishmentsTableNavigation
                        pageNum={this.state.pageNum}
                        pageCount={this.state.pageCount}
                        onPreviousPage={this.handlePreviousPage}
                        onNextPage={this.handleNextPage}/>
                </div>
            );
        }
    }
}