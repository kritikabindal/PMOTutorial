import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Dashboard from '../Dashboard/Dashboard';
import IAActualsGrid from '../IAActuals/IAActualsGrid';
import IAActualsEdit from '../IAActuals/IAActualsEdit';
import IAActualsDelete from '../IAActuals/IAActualsDelete';
import IAActuals from '../IAActuals/IAActuals';

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <Switch>
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/ia-actuals" component={IAActuals} />
                {/* <Route path="/ia-actuals" component={IAActualsGrid} /> */}
                <Route path="/edit/:id" component={IAActualsEdit} />
                <Route path="/delete/:id" component={IAActualsDelete} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };