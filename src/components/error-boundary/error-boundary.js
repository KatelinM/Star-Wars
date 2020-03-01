import React from 'react';

import './error-boundary.css';
import Error from "../error-indicator";

export default class ErrorBoundary extends React.Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <Error />
        }
        return this.props.children;
    }
}
