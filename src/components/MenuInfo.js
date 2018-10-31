import React, { Component } from 'react';
import PropTypes from 'prop-types';
import allCategories from '../data/nav_items.js';
import recipes from '../data/recipes2.js';

{/*function Topics () {
return (
  <div>
    <h1>Topics</h1>
    <ul>
      {topics.map(({ name, id }) => (
        <li key={id}>
          <Link to={`/topics/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
}*/}

function MenuInfo(props) {
  const {allCategories, match} = props;
  console.log({match});

  return(
    <div>
     <article className="menu_info">
       <h2></h2>
       <img className="food_image" src='' alt=''/>
    </article>
    </div>
  );
}

// // first part of info for food category page selected from Recipes nav
// class MenuInfo extends Component {
//   static propTypes = {
//     // categoryCat: PropTypes.string.isRequired,
//     // navbarItems: PropTypes.array.isRequired,
//     // recipes: PropTypes.array.isRequired,
//     // navCat: PropTypes.string.isRequired,
//     // navImg: PropTypes.string.isRequired
//   }
//
//
//   render(){
//     return(
//       <div>
//       <article className="menu_info">
//           <h2>Category Recipe</h2>
//           <img className="food_image" src='' alt=''/>
//       </article>
//       </div>
//     );
//   }
// }

export default MenuInfo
