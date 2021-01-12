
const areaTypes = [ 
    "Unknown", "Dungeon", "Stronghold", "Arena", "Tavern", "Town",
    "Mines", "Ruins", "Caves",
    "Wilderness",
    "Arena Lobby",
    "Beast Master Shop",
    "Nest", "Shrine" 
];
export function getAreaType(i = 0){
    return areaTypes[i] || "Unkown Area";
}