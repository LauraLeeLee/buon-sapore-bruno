import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import SearchResult from './SearchResult.js';

class Search extends Component {
    static propTypes = {
      recipes: PropTypes.array.isRequired
    }

    constructor(props) {
     super(props);
     let match = props.match;

     this.state = {
       query: '',
       recipesFound: [],
       noResults: false
     }
     this.handleInput = this.handleInput.bind(this);
     this.searchRecipes = this.searchRecipes.bind(this);
   }

   handleInput(query) {
     this.setState({query: this.search.value.toLowerCase()});
     if(this.state.query && this.state.query.length) {
       this.searchRecipes(query);
     } else {
       this.setState({recipesFound: [], noResults: false});
     }
     console.log(this.state);
   }

   searchRecipes(query) {
     const { recipes } = this.props;
     const recName = recipes.name;
     if(query !== '') {
       let results = recipes.filter(i => i.name.toLowerCase().includes(this.state.query.toLowerCase()))
       // recName.filter(this.state.query)
       console.log(results);
       if (results) {
        results.length > 0 ? this.setState({recipesFound: results, noResults: false}) : this.setState({recipesFound: [], noResults: true});
       }
       // recipes.filter(recipe => recipe.name.includes(this.state.query))
       //  .then((response) => {
       //    response.length > 0 ? this.setState({recipesFound: response, noResults: false}) : this.setState({recipesFound: [], noResults: true});
       //    console.log(response);
       //  });
     } else {
       this.setState({recipesFound: [], noResults: false});
     }

     console.log(query);
     console.log(this.state);
   }

    render() {
      const { recipesFound, noResults, query } = this.state;
      const { recipes, match } = this.props;
      console.log({recipes});
      return(
        <div>
        <div>
        <Debounce time="600" handler="onChange">
          <input type="text"
                 placeholder="Seach category or ingredient"
                 ref={input => this.search = input }
                 onChange= {this.handleInput}
          />
          </Debounce>
          </div>
          <div>

              <SearchResult recipes={recipes}
                            match={match}
                            recipesFound={recipesFound}/>
        
          </div>
        <div className="no-search-results">
        { noResults && (
          <div>
            <p className="no-results">Sorry, no results found <br/>
                                      Please try your search again.</p>
          </div>
        )}
        </div>
        </div>
      )
  }
}

export default Search
