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
exports.fetchPokemon = exports.fetchDetails = void 0;
const fetchDetails = () => __awaiter(void 0, void 0, void 0, function* () {
    let listPokemon = [];
    for (let pokemon = 1; pokemon <= 20; pokemon++) {
        listPokemon.push(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    }
    console.log(listPokemon);
    const promises = listPokemon.map((url) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch(url);
        try {
            if (!response.ok) {
                throw new Error(`API call failed`);
            }
            const data = yield response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.error("Failed to fetch data", error);
        }
    }));
    const results = yield Promise.all(promises);
    return results.filter((data) => data !== undefined);
});
exports.fetchDetails = fetchDetails;
const fetchPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok) {
            throw new Error(`API call failed`);
        }
        const data = yield response.json();
        console.log(data.results);
        return data.results;
    }
    catch (error) {
        console.error("Failed to fetch data", error);
        return [];
    }
});
exports.fetchPokemon = fetchPokemon;
