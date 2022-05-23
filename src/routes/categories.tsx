import React from 'react';
import { Route } from 'react-router-dom';

import Panier from '../common/components/Panier';

export default [
    <Route path='categories'>
        <Route path='asteroides' />
        <Route path='exoplanete' />
        <Route path='sattelites' />
        <Route path='packs' />
        <Route path='cometes' />
        <Route path='etoiles' />
     </Route>
];