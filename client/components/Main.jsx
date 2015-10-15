const {Link} = ReactRouter;

Main = React.createClass({

  render: function() {
    return (
      <main role="main" className="">

        <section id="hero" className="row middle-xs">
          <div className="col grow-xs center-xs">
            <h1 className="jumbo">FEDercise</h1>
            <h2>Learn Front End Development by completing creative challenges and grading your peers</h2>
            <a className="btn" href="#"><i className="fa fa-github fa-lg"></i>Log in with GitHub</a>
          </div>
        </section>

        <section id="weekly-challenge" className="row section middle-xs">

          <div className="challenge-img col xs5">
            <img src="img/sticky_nav_example.gif" alt="sticky nav example" />
          </div>

          <div className="challenge-text col grow-xs">
            <h1> <Link to="/challenges">This Week's Challenge</Link></h1>
            <h2>Create a sticky nav on scroll</h2>
            <p className="flow-text">
              There should be a div that sits below a Hero, and when the page is scrolled down the nav will stick to the top for the remainder of the content
            </p>
            {/* <a className="btn right" href="#">Submit a solution</a> */}
          </div>

        </section>
      </main>
    );
  }

});
