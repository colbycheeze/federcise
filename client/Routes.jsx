const {Router, Route, IndexRoute} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Router path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="challenges" component={ChallengesPage} />
        <Route path="/challenges/:id" component={ChallengeView} />
        <Route path="*" component={NotFoundPage} />
        </Router>
    </Router>
  ), document.getElementById("app-container"));
});

