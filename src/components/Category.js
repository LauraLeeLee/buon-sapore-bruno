import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.js';
import MenuInfo from './MenuInfo.js';

function Category (props) {
  const {allCategories, recipes, match} = props;
  const categoryCat = match.params.category;
  console.log({allCategories});
  console.log({match});
  console.log({categoryCat});
  return(
    <div>
     <section className="beef_section">
       <MenuInfo  allCategories={allCategories}
                  categoryCat={categoryCat}
                    match={match}/>
       <RecipeList />
     </section>
   </div>
  );
}

// main landing page for food category from Recipes nav selection
// class Category extends Component {
//   static propTypes = {
//     // view: PropTypes.string.isRequired,
//       // navbarItems: PropTypes.array.isRequired,
//       // recipes: PropTypes.array.isRequired,
//       // navCat: PropTypes.string.isRequired,
//     // navImg: PropTypes.string.isRequired
//   }
//
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     recipe: '',
//   //   }
//   // }
//
//   componentDidMount() {
//
//   }
//
//   render(){
//
//     return(
//       <div>
//         <section className="beef_section">
//
//           <MenuInfo  />
//           <RecipeList />
//         </section>
//       </div>
//     );
//   }
// }

export default Category
