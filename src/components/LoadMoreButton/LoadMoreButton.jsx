import PropTypes from "prop-types";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      LoadMore
    </button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
