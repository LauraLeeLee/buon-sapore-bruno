import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import NavMenuItem from './NavMenuItem.js';
// import Recipes from '../data/recipes.json';
// import  * as RecipeFiles from '../data/recipes.json';
import Recipes2 from '../data/recipes2.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      recipes: []
    }
    this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
    this.setState({
      recipes: Recipes2
    });
  }

  onNavigate = (navCat) => {
    console.log(navCat);

    switch(navCat) {
      case 'Home':
        this.setState({view: 'home'});
        break;
      case 'About Me':
        this.setState({view: 'about'});
        break;
      case 'Beef':
        this.setState({view: 'beef'});
        break;
      case 'Chicken':
        this.setState({view: 'chicken'});
        break;
      case 'Pasta':
        this.setState({view: 'pasta'});
        break;
      case 'Seafood':
        this.setState({view: 'seafood'});
        break;
      case 'SaladSoup':
        this.setState({view: 'saladsoup'});
        break;
      case 'Dessert':
        this.setState({view: 'dessert'});
        break;
      default: this.setState({view: 'home'});
    }
  }

  render() {
    const { view, recipes } = this.state;
    console.log({view});
    console.log(Recipes2[0].name);
    if (recipes.length > 0) {
      console.log(recipes[0].name);
    }

    return (
      <div className="container" role="main">
        { this.state.view === 'home' && (
          <div>
            <Nav
              view={ view }
              onNavigate={this.onNavigate}/>
            <HomePage
               view={ view }
               onNavigate={this.onNavigate}
          />
          <ul>
            {recipes.map((recipe) =>(
              <li key={recipe.name}>
                {recipe.name}
                </li>
            ))}
          </ul>
          <Footer />
        </div>
        )}

        {this.state.view === 'about' && (
          <div>
          <Nav view={ view }
               onNavigate={this.onNavigate}/>
          <AboutMe />
          <Footer />
          </div>
        )}

        {this.state.view === 'beef' && (
          <div>
            <Nav view={ view }
                 onNavigate={this.onNavigate}
                 />
            <NavMenuItem view={ view }/>
          </div>
        )}

      </div>
    );
  }
}

export default App;
