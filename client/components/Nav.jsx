const {Link} = ReactRouter;

Nav = React.createClass({

render: function() {
  return (
    <nav className="row between container-fluid">
      <ul className="nav col fit row">
        <li><a className="btn" href="#">About</a></li>
        <li><a className="btn active" href="#">Getting Started</a></li>
        <li><Link to="/challenges" className="btn" activeState="active">Challenge Archive</Link></li>
        <li><a className="btn" href="#">Resources</a></li>
      </ul>

      <ul className="col fit">
        <li><a className="btn" href="#">Login with GitHub</a></li>
      </ul>
    </nav>

    // <nav className="row between container-fluid">
    //   <ul className="nav col fit row">
    //     <li><a className="btn" href="#">About</a></li>
    //     <li><a className="btn active" href="#">Getting Started</a></li>
    //     <li><Link to="/challenges" className="btn" activeState="active">Challenge Archive</Link></li>
    //     <li><a className="btn" href="#">Resources</a></li>
    //   </ul>
    //
    //   <ul className="col fit">
    //     <li><a className="btn" href="#">Login with GitHub</a></li>
    //   </ul>
    // </nav>
  );
}

});
