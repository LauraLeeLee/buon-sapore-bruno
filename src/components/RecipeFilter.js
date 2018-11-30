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
     const { match, recipes, allCategories } = this.props;
     const { filteredList } = this.state;
     const currentCat = match.params.categoryId;
     const currentCatArray = currentCat.toLowerCase().split("-");
     console.log({currentCatArray});
     console.log({currentCat});
     console.log({match});

    const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            currentCatArray.includes(cat)));
     console.log({filteredItems});

    this.setState({filteredList : filteredItems});
   }

   componentDidUpdate(prevProps, prevState){
     const { match, recipes, allCategories } = this.props;
     const { filteredList } = this.state;
     const currentCat = match.params.categoryId;
     const currentCatArray = currentCat.toLowerCase().split("-");
     console.log({currentCatArray});
     console.log({currentCat});
     console.log({match});

     const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            currentCatArray.includes(cat)));

            console.log({filteredItems});

     if ( filteredItems && filteredItems.length !== filteredList && filteredList.length) {
       this.setState({filteredList : filteredItems});
       console.log("state was set");
     } else {
       console.log("state not set");
     }
 }

   render() {
     const {recipes, match } = this.props;
     const {filteredList} = this.state;
     // console.log({filteredList});

     return(
       <React.Fragment>
          <RecipeList filteredList={filteredList}
                      match={match}/>
       </React.Fragment>
     );
   }
}

export default RecipeFilter
