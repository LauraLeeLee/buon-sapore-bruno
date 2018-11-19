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

     console.log({paramsCatArray});
     console.log({paramsCat});
     console.log({match});

     const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            paramsCatArray.includes(cat)));
     console.log({filteredItems});

    if (prevState.data !== this.state.data) {
     this.setState({filteredList : filteredItems});

      }
   }

   // componentWillMount() {
   //    const { filteredList } = this.state;
   //    this.setState({filteredList : filteredItems});
   // }


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
