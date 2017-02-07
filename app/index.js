import 'material-design-lite';

import m from 'mithril';

import {
  HomePage,
} from './pages';

m.route(document.getElementById('app'), '/', {
  '/': HomePage,
});
