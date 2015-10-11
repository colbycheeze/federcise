Main = React.createClass({

  render: function() {
    return (
      <main role="main" className="column">

        <section id="hero" className="column center">
          <div className="container center">
            <h1 className="jumbo">FEDercise</h1>
            <h2>Learn Front End Development by completing creative challenges and grading your peers</h2>
            <a className="btn" href="#">Log in with GitHub</a>
          </div>
        </section>

        <section id="weekly-challenge" className="column center">
          <div className="row center">

            <div className="challenge-img row center">
              <img src="img/sticky_nav_example.gif" alt="sticky nav example" />
              {/* <img src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif" alt="sticky nav example" /> */}
            </div>

            <div className="challenge-text">
              <h1>This Week's Challenge</h1>
              <h2>Create a sticky nav on scroll</h2>
              <p>
                There should be a div that sits below a Hero, and when the page is scrolled down the nav will stick to the top for the remainder of the content
              </p>
            </div>

          </div>
        </section>
      </main>
    );
  }

});
