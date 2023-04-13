import { promise } from "./modules/promise.js";
import { prosmiseAll } from "./modules/promiseAll.js";
import { domManipulation } from "./modules/domManipulation.js";
import {
  ascending,
  descending,
  getProduct,
} from "./modules/request/product.js";

// promise()
// prosmiseAll()
domManipulation();
getProduct();
ascending();
descending();
