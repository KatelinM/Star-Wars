import React, {useEffect, useState} from "react";
import Loader from "../loader";
import ErrorBoundary from "../error-boundary";

const withData = (View, getData) => {
    return (props) => {
        const [data, setData] = useState([]);

        let updatePeople = () => {
            getData()
                .then((data) => {
                        setData(data)
                    }
                )
        };

        useEffect(() => {
            updatePeople();
        });

        if (!data.length) {
            return <Loader />
        }

        return (
            <ErrorBoundary>
                <View {...props} data = {data} />
            </ErrorBoundary>
        )
    }
};

export default withData;