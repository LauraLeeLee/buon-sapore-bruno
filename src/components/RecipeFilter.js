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
   }

   componentDidMount(){
     const { match, recipes, allCategories } = this.props;
     const { filteredList } = this.state;
     const currentCat = match.params.categoryId;
     const currentCatArray = currentCat.toLowerCase().split("-");
     console.log("%ccomponentDidMount", "font-size: 12px; background-color: yellow; color:red;");
     console.log({currentCat});
     console.log({currentCatArray});
     console.log({match});

    const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            currentCatArray.includes(cat)));
     console.log({filteredItems});

     if(filteredItems){
    this.setState({filteredList : filteredItems});
   }

 }

   componentDidUpdate(prevProps, prevState){
     const { match, recipes, allCategories } = this.props;
     const { filteredList } = this.state;
     const currentCat = match.params.categoryId;
     const currentCatArray = currentCat.toLowerCase().split("-");
     console.log("%ccomponentDidUpdate", "font-size: 12px; background-color: yellow; color:red;");
     console.log({currentCat});
     console.log({currentCatArray});
     console.log({match});

     const filteredItems= recipes.filter(item =>
          item.category.every(cat =>
            currentCatArray.includes(cat)));

            console.log({filteredItems});

     if ( filteredItems && filteredItems.length !== filteredList && filteredList.length) {
       this.setState({filteredList : filteredItems});
       console.log("%cstate was set", "font-size: 12px; color: white; background-color: green; padding: 5px;");
     } else {
       console.log("%cstate not set", "font-size: 12px; color: white; background-color: red; padding: 5px;");
     }
     console.log({filteredList});
 }

   render() {
     const {recipes, match } = this.props;
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
