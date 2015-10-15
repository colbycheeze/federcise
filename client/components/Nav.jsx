const {Link} = ReactRouter;

Nav = React.createClass({

  render: function() {
    return (
      <nav className="row">
        <ul className="nav col row grow-xs">
          <li><a className="btn" href="#">About</a></li>
          <li><a className="btn active" href="#">Getting Started</a></li>
          <li><Link to="/challenges" className="btn" activeState="active">Challenge Archive</Link></li>
          <li><a className="btn" href="#">Resources</a></li>
        </ul>

        <ul className="col xs3 end-xs">
          <li><a className="btn" href="#">Login with GitHub</a></li>
        </ul>
      </nav>
    );
  }

});
