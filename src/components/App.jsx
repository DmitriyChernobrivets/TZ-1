import React from "react";
import Home from "./Containers/Home";
import styled from "styled-components";
import PostPage from "./Containers/PostPage";
import ErrorHandler from "./presentational/Error";
import { Switch, Route, Link } from "react-router-dom";

const Nav = styled.header`
  display: flex;
  border-bottom: 1px solid grey;
  margin-bottom: 50px;
  justify-content: center;
  padding: 15px 0;
`;

const App = () => {
  return (
    <div className="App">
      <Nav>
        <Link to="/" style={{ padding: 10, fontSize: 25 }}>
          Home
        </Link>
      </Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:postId" component={PostPage} />
        <Route render={() => <ErrorHandler text="ERROR :(" />} />
      </Switch>
    </div>
  );
};

export default App;
