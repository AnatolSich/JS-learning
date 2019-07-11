// импорт one под именем item1, а two – под именем item2
/*import {one as item1, two as item2} from "./nums";

console.log( `${item1} and ${item2}` ); // 1 and 2

import {one, two} from "./nums";

console.log( `${one} and ${two}` ); // 1 and 2  */

import {one, two} from './nums';

document.write(`Сумма импортов: ${one + two}`);