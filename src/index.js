/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faComments, faShare, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import { App } from './components/App';

library.add(faThumbsUp, faComments, faShare, faArrowCircleRight);

ReactDOM.render(<App />, document.getElementById('root'));
