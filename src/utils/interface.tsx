export interface IData {
    data: IItem
}

export interface IItem {
    name: string,
    url: string,
}

export interface IPoke {
    abilities: Array<IAbilities>,
    base_experience: number;
    forms: Array<IForm>,
    game_indices: Array<IGameIndices>,
    height: number,
    held_items: string[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: IMove,
    name: string,
    order: number,
    past_types: string[],
    species: ISpecies,
    sprites: any,
    stats: Array<IStats>,
    types: Array<ITypes>,
    weight: number
}

export interface IAbilities {
    ability: IAbility,
    is_hidden: boolean,
    slot: number
}

export interface IAbility {
    name: string,
    url: string,
}

export interface IForm {
    name: string,
    url: string,
}

export interface IGameIndices {
    game_index: number,
    version: IVersion,
}

export interface IVersion {
    name: string,
    url: string,
}

export interface IMove {
    move: string,
    version_group_details: string,
}


export interface IMove {
    name: string,
    url: Array<IVersionGroupDetails>,
}

export interface IVersionGroupDetails {
    level_learned_at: number,
    move_learn_method: IMoveLearnMethod,
    version_group: IVersionGroup
}

export interface IMoveLearnMethod {
    name: string,
    url: string,
}

export interface IVersionGroup {
    name: string,
    url: string,
}

export interface ISpecies {
    name: string,
    url: string,
}

export interface IStats {
    base_stat: number,
    effort: number,
    stat: IStat,
}

export interface IStat {
    name: string,
    url: string,
}

export interface ITypes {
    slot: number,
    type: IType,
}

export interface IType {
    name: string,
    url: string,
}