import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.js';
import MenuInfo from './MenuInfo.js';

// main landing page for food category from Recipes nav selection
class Category extends Component {
  static propTypes = {
    // view: PropTypes.string.isRequired,
      navbarItems: PropTypes.array.isRequired,
      recipes: PropTypes.array.isRequired,
      navCat: PropTypes.string.isRequired,
    // navImg: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
    }
  }

  render(){
    const { match, location, history, recipes, navbarItems, navCat } = this.props
    console.log({match});
    console.log({recipes});
    const categoryCat = match.params.category;
    console.log({categoryCat});

    return(
      <div>
        <section className="beef_section">

        <MenuInfo  categoryCat={categoryCat}
                   navbarItems={navbarItems}
                   navCat={navCat}/>

          <RecipeList categoryCat={categoryCat}
                      recipes={recipes}/>
        </section>
      </div>
    );
  }
}

export default Category
