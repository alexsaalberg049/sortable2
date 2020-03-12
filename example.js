
//import * as Sortable from "./Sortable.min.js";
//import * as Sortable from "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js";
import Sortable from 'sortablejs';

// global export
window.Sortable = Sortable;

Sortable.create(document.getElementById("section-palette"), {
    group: 'shared',/* options */ });
Sortable.create(document.getElementById("section-palette"), {
    group: 'shared',/* options */ });
