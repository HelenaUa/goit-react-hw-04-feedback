import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';


export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <List>
            {options.map(optionItem => {
                return (
                    <li key={Object.keys(optionItem)}>
                        <Btn type="button" name={Object.keys(optionItem)} onClick={onLeaveFeedback}>{Object.keys(optionItem)}</Btn>
                    </li>
                )
            })}
        </List>
)
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onLeaveFeedback: PropTypes.func,
};