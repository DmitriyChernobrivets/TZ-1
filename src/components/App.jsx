import React from "react";
import PostsContainer from "./Containers/PostsContainer";
// import styled from "styled-components";
import Block from "./Block";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/" component={PostsContainer} />
        <Route path="/posts/:postId" component={Block} />
        <Route render={() => <div>WRONG WROTE</div>} />
      </Switch>
    </div>
  );
};

export default App;
