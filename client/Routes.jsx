const {Router, Route} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path="/" component={App}>
        {/* ... */}
      </Route>
    </Router>
  ), document.getElementById("app-container"));
});

//<Route path="/" component={HomePage} />
//<Route path="login" component={LoginPage} />
//<Route path="*" component={NotFoundPage} />
