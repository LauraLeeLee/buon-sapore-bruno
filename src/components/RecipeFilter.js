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
     const { match, recipes } = this.props;
     const { filteredList } = this.state;
     const paramsCat = match.params.categoryId;
     const paramsCatArray = paramsCat.toLowerCase().split(" ");

     console.log({paramsCatArray});
     console.log({paramsCat});
     console.log({match});

     const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            paramsCatArray.includes(cat)));
     console.log({filteredItems});

     this.setState({filteredList : filteredItems});
   }

   componentDidUpdate(prevProps, prevState){
     const { match, recipes } = this.props;
     const { filteredList } = this.state;
     const paramsCat = match.params.categoryId;
     const paramsCatArray = paramsCat.toLowerCase().split(" ");

     // console.log({paramsCatArray});
     // console.log({paramsCat});
     // console.log({match});

     let filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            paramsCatArray.includes(cat)));
      console.log(this.state);
     if ( filteredItems && filteredItems.length !== filteredList  && filteredList.length) {
       this.setState({filteredList : filteredItems});
       console.log("state was set");
     }
     // console.log({filteredItems});
     // console.log({prevState});
     // console.log({prevProps});
 }

   render() {
     const {recipes, match, filterRecipes } = this.props;
     const {filteredList} = this.state;
     console.log({filteredList});

     return(
       <React.Fragment>
          <RecipeList filteredList={filteredList}
                      match={match}/>
       </React.Fragment>
     );
   }
}

export default RecipeFilter
