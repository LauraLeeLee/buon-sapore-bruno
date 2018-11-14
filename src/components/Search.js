import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SearchResult from './SearchResult.js';


class Search extends Component {
    static propTypes = {
      recipes: PropTypes.array.isRequired
    }

    constructor(props) {
     super(props);
     this.state = {
       query: '',
       recipesFound: [],
       noResults: false
     }
     this.handleInput = this.handleInput.bind(this);
     this.searchRecipes = this.searchRecipes.bind(this);
   }

   handleInput(query) {
     this.setState({query: this.search.value});
     if(this.state.query && this.state.query.length) {
       this.searchRecipes(query);
     } else {
       this.setState({recipesFound: [], noResults: false});
     }
   }

   searchRecipes(query) {
     const { recipes } = this.props;
     if(query !== '') {
       recipes.search(this.state.query)
        .then((response) => {
          response.length > 0 ? this.setState({recipesFound: response, noResults: false}) : this.setState({recipesFound: [], noResults: true});
          console.log(response);
        });
     } else {
       this.setState({recipesFound: [], noResults: false});
     }
     console.log(query);
     console.log(this.state);
   }

    render() {
      const { recipesFound, noResults, query } = this.state;
      const { recipes } = this.props;

      return(

          <input type="text"
                 placeholder="Seach category or ingredient"
                 ref={input => this.search = input }
                 onChange= {this.handleInput}
          />
      )
  }
}

export default Search
