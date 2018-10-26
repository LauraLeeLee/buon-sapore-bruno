import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.js';
import MenuInfo from './MenuInfo.js';

// main landing page for food category from Recipes nav selection
class NavMenuItem extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    navbarItems: PropTypes.array.isRequired,
    recipes: PropTypes.array.isRequired,
    navCat: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
    }
  }

  render(){
    const { view, navbarItems, recipes, navCat } = this.props;
    console.log(view);
    if(navbarItems.length>0){console.log({navbarItems});}

    return(
      <div>
        <section className="beef_section">
          <MenuInfo view={ view }
                    navbarItems={navbarItems}
                    recipes={recipes}
                    navCat={navCat}/>

          <RecipeList view={ view }
                      navbarItems={navbarItems}
                      recipes={recipes}
                      navCat={navCat}/>
        </section>
      </div>
    );
  }
}

export default NavMenuItem
