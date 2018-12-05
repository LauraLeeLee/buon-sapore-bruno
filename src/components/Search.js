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
     // this.handleInput = this.handleInput.bind(this);
     this.searchRecipes = this.searchRecipes.bind(this);
   }

   // handleInput(query) {
   //   this.setState({query: this.search.value.toLowerCase()});
   //   if(this.state.query && this.state.query.length) {
   //     this.searchRecipes(query);
   //   } else {
   //     this.setState({recipesFound: [], noResults: false});
   //   }
   //   console.log(this.state);
   // }

   searchRecipes = (event) => {
     const {recipes} = this.props;
     const {recipesFound} = this.state;

     const query = event.target.value.toLowerCase();
     if(query) {
       this.setState({ query: query });
     }

     const filteredRecipes = recipes.filter(recipe => {
       const matches = recipe.name.toLowerCase().indexOf(query) > -1;
       return matches;
     });
     console.log({filteredRecipes});
    this.setState(
      {filteredList: filteredRecipes}
    );
    console.log("%csearchRecipes fired", "font-size: 12px; background-color: yellow; color:red;")
   }

    render() {
      const { filteredList, noResults, query } = this.state;
      const { recipes, match } = this.props;
      console.log({recipes});
      console.log({filteredList});

      return(
        <div>
        <div>
        <Debounce time="600" handler="onChange">
          <input type="text"
                 placeholder="Seach category or ingredient"
                 ref={input => this.search = input }
                 onChange= {this.searchRecipes}
          />
          </Debounce>
          </div>
          <div>

              <SearchResult recipes={recipes}
                            match={match}
                            filteredList={filteredList}/>

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
