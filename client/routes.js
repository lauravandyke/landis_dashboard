import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Clients from './components/Clients';
import SingleClient from './components/SingleClient';
import EditClient from './components/EditClient';
import CreateClient from './components/CreateClient';
import Analytics from './components/Analytics';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Clients} />
          <Route exact path="/clients" component={Clients} />
          <Route
            exact
            path="/clients/:id"
            render={(routeProps) => (
              <SingleClient id={routeProps.match.params.id} />
            )}
          />
          <Route
            path="/clients/:id/edit"
            render={(routeProps) => (
              <EditClient id={routeProps.match.params.id} />
            )}
          />
          <Route path="/new" component={CreateClient} />
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </div>
    );
  }
}
