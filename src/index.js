import React from "react";
import { render } from "react-dom";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>
);

class Layout extends React.Component<{}, {}> {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <HeaderComponent />
        </div>
        <div className="row">
          <div className="col-sm-8">
            <NavComponent />
          </div>
          <div className="col-sm-12">
            <MainComponent />
          </div>
        </div>
      </div>
    );
  }
}

const Routes = () => (
  <Layout>
    <Route exact path="/" component={HomeComponent} />
  </Layout>
);

const MainComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/moldegaard" component={MoldegaardComponent} />
    </Switch>
  );
};

class MoldegaardComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>MoldegaardComponent</h4>
      </div>
    );
  }
}

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>HeaderComponent</h1>
      </div>
    );
  }
}

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <span className="nav-item">
          <Link to="/">Hjem</Link>
        </span>
        <span className="nav-item">
          <Link to="/moldegaard">Moldegaard</Link>
        </span>
      </nav>
    );
  }
}

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>HomeComponent</h4>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
