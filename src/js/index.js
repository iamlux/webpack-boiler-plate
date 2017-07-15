'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/custom.css';
import {
    square,
    diag,
    lakshmi
} from './home/home';
lakshmi();
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
let esOne = word => word.split(" ");
const dumyText = "es6 is awesome";
console.log(esOne(dumyText));