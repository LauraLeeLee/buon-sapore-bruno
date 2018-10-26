import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import NavMenuItem from './NavMenuItem.js';
import Recipes2 from '../data/recipes2.js';
import NavCategories from '../data/nav_items.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      recipes: [],
      navbarItems: [],
      navCat: ''
    }
    this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
    this.setState({
      recipes: Recipes2,
      navbarItems: NavCategories
    });
  }

  onNavigate = (navCat) => {
    console.log(navCat);
    this.setState({
      navCat: navCat
    });
    switch(navCat) {
      case 'Home':
        this.setState({view: 'home'});
        break;
      case 'About Me':
        this.setState({view: 'About Me'});
        break;
      case 'Recipes':
        this.setState({view: 'Recipes'});
        break;
      case 'Beef':
        this.setState({view: 'Beef'});
        break;
      case 'Chicken':
        this.setState({view: 'Chicken'});
        break;
      case 'Pasta Pizza & Sauce':
        this.setState({view: 'Pasta Pizza & Sauce'});
        break;
      case 'Seafood':
        this.setState({view: 'Seafood'});
        break;
      case 'Salad & Soup':
        this.setState({view: 'Salad & Soup'});
        break;
      case 'Dessert':
        this.setState({view: 'Dessert'});
        break;
        case 'Antipasti':
          this.setState({view: 'Antipasti'});
          break;
      default: this.setState({view: 'home'});
    }
  }

  render() {
    const { view, recipes, navbarItems, navCat } = this.state;
    console.log({view});
    console.log({navCat});

    return (
      <div className="container" role="main">
        <Nav
          view={ view }
          navbarItems={navbarItems}
          onNavigate={this.onNavigate}
          />

        { view === 'home' && (
          <div>
            <HomePage
               view={ view }
               onNavigate={this.onNavigate}
            />
        </div>
        )}

        {view === 'About Me' && (
          <div>
            <AboutMe view={ view }/>
          </div>
        )}

        {/*This section having trouble to render view dynamically
          based on which navCat is selected (as per switch statement above)
          Since Home and About are more hard coded views, those are straight forward
          but for the recipe category pages- depends on what is chosen.
          I could code out 8 conditionals for that, but the JSX will all be exactly the same
          Not sure how to refactor the switch statement.
          I can't eliminate Home and About as they will be values of navCat from
          whatever selection is made in the navigation bar.
          Bright side- I did get the recipe list to render dynamically as per
          the view. For now that is ok, hoping yes. Or can do something with
          navCat state to make comparision in those components. But view and navCat should
          be the same for those components.
          used the following conditional..for now. */}
        {(view === 'Beef' || view === 'Chicken' || view === 'Seafood' || view === 'Pasta Pizza & Sauce' || view === 'Antipasti' || view === 'Salad & Soup' || view === 'Dessert')  && (
          <div>
            <NavMenuItem view={ view }
                         navbarItems={navbarItems}
                         recipes={recipes}
                         navCat={navCat}
             />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
