import { Component } from "react";

class FeedbackOptions extends Component {
    render() {
        return(
        <div>
            <h1>Please leave feedback</h1>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
        </div>
        )
    };
};

export default FeedbackOptions;