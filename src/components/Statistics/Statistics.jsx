const Statistics = ({data}) => {
    return (
    <div>
        <h2>Statistics</h2>
        <span>Good: {data.good} </span>
        <span>Neutral: {data.neutral} </span>
        <span>Bad: {data.bad} </span>
        <span>Total: {data.total} </span>
        <span>Positive feedback: {data.positive}% </span>
    </div>
    )
};

export default Statistics; 