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
  const paramsCat = match.params.category;
  const navbarName = allCategories.map(item => item.name);
  const categoriesSrc = allCategories.map(item => item.src);
  const categoriesAlt = allCategories.map(item => item.alt);

  const item = allCategories.find(({name}) => name === match.params.category);

  console.log({match});
  {/*<ul>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`/topics/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
*/}

// {(navbarItemsName.includes(catCategory)) &&

  return(
    <div>
     <article className="menu_info">
     {paramsCat && (
       <h2>{`${paramsCat} Recipes`}</h2>
     )}
     {allCategories.map(({ src, alt }) => (
       <img className="food_image" src={ `${src} `} alt={`${alt}`}/>
     ))}
    </article>
    </div>
  );
}

export default MenuInfo
