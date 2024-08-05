"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_js_1 = require("./fetch.js");
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, fetch_js_1.fetchPokemon)();
    const details = yield (0, fetch_js_1.fetchDetails)();
    const ul = document.getElementById("items");
    data.forEach((pokemon) => {
        const li = document.createElement("li");
        const name = document.createElement("h4");
        const pokemonDetails = details.find((detail) => detail.name === pokemon.name);
        if (pokemonDetails) {
            const img = document.createElement("img");
            img.src = pokemonDetails.sprites.other["official-artwork"].front_default;
            img.alt = `${pokemon.name} image`;
            li.append(img);
        }
        name.innerText = `${pokemon.name}`;
        li.append(name);
        ul.appendChild(li);
    });
}));
