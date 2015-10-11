Nav = React.createClass({

  render: function() {
    return (
      <nav className="column center">
        <div className="container row space-between">
          <ul className="nav row">
            <li><a className="btn" href="#">About</a></li>
            <li><a className="btn" href="#">Getting Started</a></li>
            <li><a className="btn" href="#">Weekly Challenge</a></li>
            <li><a className="btn" href="#">Categories</a></li>
            <li><a className="btn" href="#">Tags</a></li>
          </ul>

          <ul>
            <li><a className="btn" href="#">Login with GitHub</a></li>
          </ul>
          </div>
      </nav>
    );
  }

});
