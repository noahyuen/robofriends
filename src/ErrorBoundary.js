import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        // new method in React 16
        this.setState({ hasError: true })

    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooopps. That is not good</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundary;


