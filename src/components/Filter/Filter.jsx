import PropTypes from 'prop-types';
import a from './Filter.module.css';

const Filter = ({ filter, changeFilterInput }) => (
  <label className={a}>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={changeFilterInput}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
