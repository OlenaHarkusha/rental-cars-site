import PropTypes from "prop-types";
import { LoadBtn } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadBtn type="button" onClick={onClick}>
      LoadMore
    </LoadBtn>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
