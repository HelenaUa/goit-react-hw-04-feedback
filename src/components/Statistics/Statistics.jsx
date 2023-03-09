import { Notification } from "components/Notification/Notification";
import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2>Statistics</h2>
            {!total ? <Notification message="There is no feedback" /> :
            <Item>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span> 
            </Item>}
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}