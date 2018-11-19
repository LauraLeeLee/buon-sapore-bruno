import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.js';


class RecipeFilter extends Component {
    static propTypes = {
      recipes: PropTypes.array.isRequired
    }

    constructor(props) {
     super(props);
     let match = props.match;

     this.state = {
       filteredList: [],
     }
     // this.filterRecipes = this.filterRecipes.bind(this);
   }

   componentDidMount(){
     // filterRecipes() {
     //
     // }

     const { match, recipes } = this.props;
     const { filteredList } = this.state;
     const paramsCat = match.params.categoryId;
     const paramsCatArray = paramsCat.toLowerCase().split(" ");
     console.log({paramsCatArray});

      const filteredItems= recipes.filter(item =>
         item.category.every(cat =>
           paramsCatArray.includes(cat)));

      this.setState({filteredList : filteredItems});

     console.log({filteredItems});
     console.log({paramsCat});
     console.log({match});
     console.log("filterRecipes fired");

   }




   render() {
     const {recipes, match, filterRecipes } = this.props;
     const {filteredList} = this.state;
     console.log({filteredList});
     const paramsCat = match.params.categoryId;
     console.log({paramsCat});

     return(
       <React.Fragment>

          <RecipeList filteredList={filteredList}
                      match={match}/>
       </React.Fragment>
     );
   }
}

export default RecipeFilter
