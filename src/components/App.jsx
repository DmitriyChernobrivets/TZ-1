import React from "react";
import PostsContainer from "./Containers/PostsContainer";
import styled from "styled-components";
import InitialPostContainer from "./Containers/InitialPostContainer";
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
        <Link to="/" style={{ padding: 10 }}>
          Home
        </Link>
      </Nav>
      <Switch>
        <Route exact path="/" component={PostsContainer} />
        <Route path="/posts/:postId" component={InitialPostContainer} />
        <Route render={() => <div>WRONG WROTE</div>} />
      </Switch>
    </div>
  );
};

export default App;
