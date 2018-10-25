import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipes2 from '../data/recipes2.js';
import BeefCat from '../images/beefCategory.jpg';
import NavCategories from '../data/nav_items.js';


// first part of info for food category page selected from Recipes nav
class MenuInfo extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      navbarItems: []
    }
  }

  componentDidMount() {
    const navNames = NavCategories.map((item) =>
       item.name);
    this.setState({
      navbarItems: navNames
    });
  }

  render(){
    const { view } = this.props;
    console.log(view);
    return(
      <div>
      <article className="menu_info">
      {view === 'beef' && (
        <div>
          <h2>{`Beef Recipes`}</h2>
          <img className="food_image" src={ BeefCat } alt="image of beef"/>
          </div>
        )}

      </article>
      </div>
    );
  }
}

export default MenuInfo
