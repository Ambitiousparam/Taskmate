const ResourceHighlight = () => {
    return (
      <section className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="content is-medium">
              <h2 className="subtitle is-4">December 25, 2018</h2>
              <h1 className="title">Getting Started</h1>
              <p>
                This is a starter template for creating a beautiful, customizable blog with minimal
                effort. You'll only have to change a few settings and you're ready to go. As with all Jigsaw sites,
                configuration settings can be found in config.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container has-text-centered is-fluid">
              <div className="hero is-light">
                <div className="hero-body">
                  <h2 className="title is-4">Sign up for our newsletter</h2>
                  <div className="column is-6 is-offset-3">
                    <div className="field has-addons has-addons-centered">
                      <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Email address" />
                      </div>
                      <div className="control">
                        <a className="button is-info">
                          Subscribe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ResourceHighlight;
  