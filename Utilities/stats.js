

export const stats = {
    base: [
    { key: 'healthBuff', name: 'Health' },
    { key: 'staminaBuff', name: 'Stamina' },
    { key: 'durability', name: 'Durability' },
    { key: 'agility', name: 'Agility' },
    { key: 'critChance', name: 'Critical Chance' },
    { key: 'critMult', name: 'Critical Damage' },
    ],
}

const dmgTypes = [
    "Physical", "Blaze", "Cold", "Toxic", "Electric"
]

export function getDamageType(i){
    return dmgTypes[i];
}