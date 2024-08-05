export interface IPokeInterface {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  Details[];
}

export interface Details {
    abilities:                Ability[];
    base_experience:          number;
    cries:                    Cries;
    forms:                    Species[];
    id:                       number;
    location_area_encounters: string;
    name:                     string;
    order:                    number;
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Cries {
    latest: string;
    legacy: string;
}


export interface Other {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
    showdown:           Sprites;
}

export interface Sprites {
    back_default:       string;
    back_female:        string;
    back_shiny:         string;
    back_shiny_female:  null | string;
    front_default:      string;
    front_female:       string;
    front_shiny:        string;
    front_shiny_female: string;
    other?:             Other;
    animated?:          Sprites;
}



export interface OfficialArtwork {
    front_default: string;
    front_shiny:   string;
}

export interface Home {
    front_default:      string;
    front_female:       string;
    front_shiny:        string;
    front_shiny_female: string;
}

export interface GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export interface Type {
    slot: number;
    type: Species;
}