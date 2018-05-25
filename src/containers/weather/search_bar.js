import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index'


class SearchBar extends Component {

  constructor(props){
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  state = {
    term: ''
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' })
  }

  render() {
    const { term } = this.state
    return (
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}
        >
        <input
          placeholder="Get a 5 day forecast in your favorite cities!"
          className="form-control"
          value={term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)