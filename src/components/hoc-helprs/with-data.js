import React from "react";
import Loader from "../loader";
import ErrorBoundary from "../error-boundary";

const withData = (View, getData) => {
    return class extends React.Component {

        state = {
            data: [],
        };

        updatePeople = () => {
            getData()
                .then((data) => {
                        this.setState(
                            {
                                data,
                            }
                        )
                    }
                )
        };

        componentDidMount() {
            this.updatePeople();
        }

        render() {
            let { data } = this.state;
            if (!data.length){
                return <Loader />
            }
            return (
                <ErrorBoundary>
                    <View {...this.props} data = {data} />
                </ErrorBoundary>
                )
        }
    }
};

export default withData;