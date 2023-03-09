import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';


// export const FeedbackOptions = ({addGood, addNeutral, addBad}) => {
//     return (
//         <div>
//             <button type="button" onClick={addGood}>Good</button>
//             <button type="button" onClick={addNeutral}>Neutral</button>
//             <button type="button" onClick={addBad}>Bad</button>
//         </div>
//     )
// }

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <List>
            {options.map(option => {
                return (
                    <li key={option}>
                        <Btn type="button" onClick={onLeaveFeedback}>{option}</Btn>
                    </li>
                )
            })}
        </List>
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}