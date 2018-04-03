import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from 'containers/LandingPage/Loadable';
import LibraryPage from 'containers/LibraryPage/Loadable';
import AlbumPage from 'containers/AlbumPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation/Navigation';

import { NavigationLinks } from './navigation-links';

const App = () => (
  <React.Fragment>
    <Helmet titleTemplate="%s - Bloc Jams" defaultTitle="Bloc Jams">
      <meta name="description" content="A clone of the Spotify application" />
    </Helmet>

    <header>
      <Navigation items={NavigationLinks} />
      <h1>Bloc Jams</h1>
    </header>

    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/library" component={LibraryPage} />
      <Route path="/album" component={AlbumPage} />
      <Route path="/404" exact component={NotFoundPage} />
      <Redirect from="*" to="/404" />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
