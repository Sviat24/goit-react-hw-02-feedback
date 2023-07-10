import PropTypes from 'prop-types';
import { StyledOptionsButton } from '../FeedbackOptions/FeedbackOptions.styled';
import { StyledOptionsList } from '../FeedbackOptions/FeedbackOptions.styled';
import { StyledOptionsItem } from '../FeedbackOptions/FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledOptionsList>
      {options.map(option => {
        return (
          <StyledOptionsItem key={option}>
            <StyledOptionsButton
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </StyledOptionsButton>
          </StyledOptionsItem>
        );
      })}
    </StyledOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
