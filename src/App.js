import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSigngUpPage from "./pages/sin-in-and-sign-up/sin-in-and-sign-up.component";
import { auth, createUserProfaleDocument } from "./firebase/firabase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfaleDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSigngUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
