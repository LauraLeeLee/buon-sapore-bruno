import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Home_page.js';
import AboutMe from './About_me.js';
import Category from './Category';
import Recipe from './Recipepage.js';
import NoMatch from './NoMatch.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Search from './Search.js';
import allCategories from '../data/allCategories.json';
// import Recipes from '../data/recipes.json';
import firebase from './Firebase/firebase.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      fbRecipes: [],
      allCategories: {},
      navCat: '',
      navImg: ''
    }
    // this.onNavigate = this.onNavigate.bind(this);
  }

  componentDidMount() {
    this.setState({
      allCategories: allCategories
    });

    const db = firebase.database();
    const dbRef = db.ref();

    let dbRecipes = [];
    dbRef.on('value', snapshot => {
      console.log(snapshot.val());
      dbRecipes = snapshot.val();
      this.setState({fbRecipes: dbRecipes});
    });
  }

  render() {
    const { view, fbRecipes, allCategories, navCat } = this.state;
    console.log({view});
    console.log({navCat});

    return (
      <Router>
          <div className="container" role="main">
          <Nav
            allCategories={allCategories}
            />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/About Me" component={AboutMe}/>
            <Route path="/Search" render={props => <Search {...props}
                                                       fbRecipes={fbRecipes}
                                                       />} />
            <Route path="/:category/:recipeId"
                  render={props => <Recipe {...props} fbRecipes={fbRecipes}/>}
            />
            <Route path="/:categoryId" render={props => <Category {...props}
                                                       fbRecipes={fbRecipes}
                                                       allCategories={allCategories} />} />

          {/* for a 404 page  */}
            <Route component={NoMatch} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
