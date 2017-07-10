import m from 'mithril';

export default {
  view() {
    return <div>
      <style>{`
        #welcome-screen {
          height: 100vh;
        }
        #welcome-screen > .mdl-cell {
          margin: 0 auto;
        }
      `}</style>
      <section id="welcome-screen" class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--middle mdl-cell--3-col-phone">
          <h4>Welcome!</h4>
          <p>
            Build with <a href="http://mithril.js.org">Mithril</a> (v1), <a href="https://getmdl.io">Material Design Lite</a> and <a href="http://brunch.io">Brunch</a>.
          </p>
        </div>
      </section>
    </div>;
  },
};
