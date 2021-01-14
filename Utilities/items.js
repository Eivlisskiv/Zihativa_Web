import { getAreaType } from "./area";


const types = [
    "Material",//0
    "Healing", "Consumable", //1,2
    "Usable", "Mysterybox", //3,4
    "Jewelry", "Helmet", "Trousers", "Mask", "Chestp", "Boots", //5-10
    "Weapon", //11
    "notfound", //12
    "Schematic", "BuildingBlueprint", //13, 14
    "RepairKit", "Rune", "EssenseVial"
]

export function getItemType(int){
    return types[int];
}