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
    sprites: ISprites,
    stats: Array<IStats>,
    types: Array<ITypes>,
    weight: number
}

export interface ISprites {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    front_default: string,
    front_female: string,
    front_shiny_female: string,
    other: IOther,
    versions: IVersions,
}

export interface IVersions {
    "generation-i": IGenerationI,
    "generation-ii": IGenerationII,
    "generation-iii": IGenerationII,
    "generation-iv": IGenerationIV,
    "generation-v": IGenerationV,
    "generation-vi": IGenerationVI,
    "generation-vii": IGenerationVII,
    "generation-viii": IGenerationVIII,
}

export interface IGenerationI {
    "red-blue": IRedBlue,
    yellow: IYellow,
}

export interface IRedBlue {
    back_default: string,
    back_gray: string,
    back_transparent: string,
    front_default: string,
    front_gray: string,
    front_transparent: string
}

export interface IYellow {
    back_default: string,
    back_gray: string,
    back_transparent: string,
    front_default: string,
    front_gray: string,
    front_transparent: string
}

export interface IGenerationII {
    crystal: ICrystal,
    gold: IGold,
    silver: ISilver,
}

export interface ICrystal {
    back_default: string,
    back_shiny: string,
    back_shiny_transparent: string,
    back_transparent: string,
    front_default: string,
    front_shiny: string,
    front_shiny_transparent: string,
    front_transparent: string
}

export interface IGold {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
    front_transparent: string
}

export interface ISilver {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
    front_transparent: string
}

export interface IGenerationIII {
    emerald: IEmerald,
    "firered-leafgreen": IFireredLeafgreen,
    "ruby-sapphire": IRubySapphire,
}

export interface IEmerald {
    front_default: string,
    front_shiny: string
}

export interface IFireredLeafgreen {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string,
}

export interface IGenerationIV {
    "diamond-pearl": IDiamondPearl,
    "heartgold-soulsilver": IHeartgoldSoulsilver,
    platinum: IPlatinum,
}

export interface IDiamondPearl {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    back_transparent: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IHeartgoldSoulsilver {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    back_transparent: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IPlatinum {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    back_transparent: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IGenerationV {
    "black-white": IBlackWhite
}

export interface IBlackWhite {
    animated: IAnimate,
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    back_transparent: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IAnimate {
    back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: string,
    back_transparent: string,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IRubySapphire {
    back_default: string,
    back_shiny: string,
    front_default: string,
    front_shiny: string
}

export interface IGenerationVI {
    "omegaruby-alphasapphire": IOmegarubyAlphasapphire,
    "x-y": IXY
}

export interface IOmegarubyAlphasapphire {
    front_default: string,
    front_female: string,
    front_shiny: string
    front_shiny_female: string,
}

export interface IXY {
    front_default: string,
    front_female: string,
    front_shiny: string
    front_shiny_female: string,
}

export interface IGenerationVII {
    icons: IIcons,
    "ultra-sun-ultra-moon": IUltraSunUltraMoon
}

export interface IIcons {
    front_default: string,
    front_female: string
}

export interface IUltraSunUltraMoon {
    front_default: string,
    front_female: string,
    front_shiny: string
    front_shiny_female: string,
}

export interface IGenerationVIII {
    icons: IIcons
}

export interface IOther {
    dream_world: IDreamWorld,
    home: IHome,
    "official-artwork": IOfficialArtwork
}

export interface IDreamWorld {
    front_default: string,
    front_female: string
}

export interface IHome {
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}

export interface IOfficialArtwork {
    front_default: string
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