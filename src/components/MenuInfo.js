import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MenuInfo(props) {
  const {allCategories, match } = props;
  const paramsCat = match.params.categoryId;

  // const item = allCategories.find((item) =>
  //   item.name === paramsCat)

const paramsCatArray = paramsCat.toLowerCase().split(" ");
// console.log({paramsCatArray});

const item = allCategories.find(item =>
  item.category.some(cat =>
    paramsCatArray.includes(cat)));

  console.log({item});
  // console.log({paramsCat});
  if(item){console.log(item.name)}
  // console.log({match});

  return(
    <React.Fragment>
     <article className="menu_info">
       { item && (
       <h2>{`${item.name} Recipes`}</h2>
      )}
      { item && (
        <img className="food_image"
             src={require(`../images/${item.src}`)}
             alt={`${item.alt}`}/>
      )}
     </article>
  </React.Fragment>
 );
}

export default MenuInfo
