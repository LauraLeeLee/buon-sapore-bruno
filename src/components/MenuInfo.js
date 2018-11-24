import React, { Component } from 'react';
import PropTypes from 'prop-types';

function MenuInfo(props) {
  const {allCategories, match } = props;
  const paramsCat = match.params.categoryId;

  const item = Object.entries(allCategories).map((item) =>
    item.id === paramsCat)

const paramsCatArray = paramsCat.toLowerCase().split(" ");
// console.log({paramsCatArray});

// const item = allCategories.find(item =>
//   item.category.some(cat =>
//     paramsCatArray.includes(cat)));

// const currentCat = allCategories.id.includes(paramsCat);

  console.log({item});
  // console.log({paramsCat});
  if(item){console.log(item.name)}
  // console.log({match});

  return(
    <React.Fragment>
     <article className="menu_info">
  
     </article>
  </React.Fragment>
 );
}

export default MenuInfo
