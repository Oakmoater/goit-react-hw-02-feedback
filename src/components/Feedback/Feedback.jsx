import PropTypes from 'prop-types';

const FeedbackOptions = ({ feedbackHandler }) => {
    return (
    <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={feedbackHandler}>Good</button>
        <button type="button" name="neutral" onClick={feedbackHandler}>Neutral</button>
        <button type="button" name="bad" onClick={feedbackHandler}>Bad</button>
    </div>
    )
};

FeedbackOptions.propTypes = {
    feedbackHandler: PropTypes.func.isRequired
}
export default FeedbackOptions;