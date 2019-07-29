import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckOutPage from "./pages/checkout/checkout.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSigngUpPage from "./pages/sin-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfaleDocument } from "./firebase/firabase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfaleDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSigngUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispachToProps = dispach => ({
  setCurrentUser: user => dispach(setCurrentUser(user))
});

const mapThisStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapThisStateToProps,
  mapDispachToProps
)(App);
