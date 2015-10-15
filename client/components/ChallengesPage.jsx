ChallengesPage = React.createClass({

  render: function() {
    return (
      <main role="main">
        <h1> Look at all of these great challenges!  </h1>
        {this.props.children || "Oh hai there"}
      </main>
    );
  }

});
