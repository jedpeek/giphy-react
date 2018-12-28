import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


class SearchForm extends Component {
  render() {
    const { handleChange, value, giphySearch, name } = this.props;
    return (
      <div className='search_form'>
        <form onSubmit={giphySearch}>
          <TextField
            label="SEARCH"
            value={value}
            onChange={handleChange}
            margin="normal"
            name={name}
            fullWidth
            style={{WebkitBoxShadow: '0 0 0 1000px transparent inset'}}
          />
        </form>
      </div>
      )
    }
  }

export default SearchForm;
