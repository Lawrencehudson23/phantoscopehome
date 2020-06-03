import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginReg from "./pages/LoginReg/LoginReg";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = { currentUser: null };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
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
          <Route path="/login" component={LoginReg} />
        </Switch>
      </div>
    );
  }
}

export default App;
