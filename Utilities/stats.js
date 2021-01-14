

export const itemStats = {
    base: [
    { key: 'healthBuff', name: 'Health' },
    { key: 'staminaBuff', name: 'Stamina' },
    { key: 'durability', name: 'Durability' },
    { key: 'agility', name: 'Agility' },
    { key: 'critChance', name: 'Critical Chance' },
    { key: 'critMult', name: 'Critical Damage' },
    ],
}

export const charStats = {
    base: [
    { key: 'maxhealth', name: 'Health' },
    { key: 'stamina', name: 'Stamina' },
    { key: 'agility', name: 'Agility' },
    { key: 'critChance', name: 'Critical Chance' },
    { key: 'critMult', name: 'Critical Damage' },
    ],
    main: [
        { key: 'endurance', name: 'Endurance' },
        { key: 'intelligence', name: 'Intelligence' },
        { key: 'strength', name: 'Strength' },
        { key: 'charisma', name: 'Charisma' },
        { key: 'dexterity', name: 'Dexterity' },
        { key: 'perception', name: 'Perception' },
    ]
}

const dmgTypes = [
    "Physical", "Blaze", "Cold", "Toxic", "Electric"
]

export function getDamageType(i){
    return dmgTypes[i];
}