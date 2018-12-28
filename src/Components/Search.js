import React, {Component} from 'react';

class Search extends Component {
  render() {
    const { handleChange, value, name, searchSubmit } = this.props;
    return (
      <div className="search_form">
        <form onSubmit={searchSubmit}>
          <div className="form-group">
            <input type='text'
              placeholder="SEARCH"
              id="dynamic-label-input"
              onChange={handleChange}
              name={name}
              value={value}
            />
            <label htmlFor="dynamic-label-input">SEARCH</label>
          </div>
        </form>
      </div>
      )
    }
  }

export default Search;
