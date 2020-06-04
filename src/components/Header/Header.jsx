import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/original.svg";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Log Out
        </div>
      ) : (
        <Link className="option" to="/login">
          Login
        </Link>
      )}
    </div>
  </div>
);
//NOTE: this naming can be anything but mapStateToProps is standard with redux codebases
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
//connect is a higher component
export default connect(mapStateToProps)(Header);
