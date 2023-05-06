import FeedbackOptions from "components/Feedback/Feedback"; 
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import PropTypes from 'prop-types';

const Section = ({data, feedbackHandler}) => {
    return (
        <>
            < FeedbackOptions feedbackHandler={feedbackHandler} />
            {data.good || data.neutral || data.bad ? (
            <Statistics good={data.good} neutral={data.neutral} bad={data.bad} total={data.total} positive={data.positive} />
            ) : (
            <Notification message="There is no feedback" />
            )}
        </>
    )
}
Section.propTypes = {
    data: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positive: PropTypes.number.isRequired
    }),
    feedbackHandler: PropTypes.func.isRequired
}
export default Section