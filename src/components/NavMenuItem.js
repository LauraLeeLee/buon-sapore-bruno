import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeefCat from '../images/beefCategory.jpg';
import Recipes2 from '../data/recipes2.js';
import RecipeList from './RecipeList.js';
import MenuInfo from './MenuInfo.js';


class NavMenuItem extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
  }

  render(){
    const { view } = this.props;
    return(
      <div>
        <section className="beef_section">
          <MenuInfo view={ view }/>
          <RecipeList view={ view }/>
        </section>
      </div>
    );
  }
}

export default NavMenuItem
