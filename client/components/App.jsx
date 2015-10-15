App = React.createClass({
  render: function() {
    return (
      <div id="landing-wrapper">

        <Nav />

        {this.props.children}

        <Footer />

      </div>
    );
  }
});
