import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import search_style from '../Material_Styles'

class SearchForm extends Component {
  render() {
    const { classes, handleChange, value, giphySearch, name } = this.props;
    return (
      <div className='search_form'>
        <form onSubmit={giphySearch}>
          <TextField
            label="SEARCH"
            className={classes.textField}
            value={value}
            onChange={handleChange}
            margin="normal"
            name={name}
            fullWidth
          />
        </form>
      </div>
      )
    }
  }

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(search_style)(SearchForm);
