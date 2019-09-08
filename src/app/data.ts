import { Discipline } from './discipline';

export class Data {

  static disciplines: Discipline[] = [

    ////////////////
    // Assemblage //
    ////////////////
    {
      school: 'Assemblage',
      level: 1,
      name: 'Banished Knowledge',
      sp: 2,
      description:
        'Exhaust: An ally within SOI gains Haste. Reduce the SP cost of this Discipline by 1 if the target is an ally other than yourself.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Last Laugh',
      sp: 0,
      description:
        'Passive: When you or an Esper you control is dealt Damage by an opponent, the source of that Damage is dealt 1 Irreducible Damage. When you or an Esper you control is dealt Damage equal to their remaining HP, the source of that Damage is dealt their 2 Conviction Dice worth of Magic Damage.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Familiar',
      sp: 0,
      description:
        'Passive: After learning this Discipline, choose a Familiar and place it face up next to your Adventurer card. Your familiar cannot be changed.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Forebode',
      sp: 0,
      description:
        'Exhaust: At any time, re-roll any dice (except the Black Die) that you rolled or that were rolled against you.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Perfect Love',
      sp: 0,
      description:
        'Exhaust: When an ally within SOI would be dealt Damage, you or a Loyal Esper you control are dealt that much Irreducible Damage instead.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Euthanasia',
      sp: 2,
      description:
        'Cast a Spell 6. Inflict Wilt. If the target is already inflicted with Wilt, deal them 6 Magic Damage and inflict Condemn. If the target is already inflicted with Condemn, roll the Black Die. If [Skull] is rolled, the target is defeated.'
    },
    {
      school: 'Assemblage',
      level: 1,
      name: 'Sanctuary',
      sp: 0,
      description: 'Exhaust: At any time, an ally within SOI may Dodge.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'BFF',
      sp: 0,
      description:
        'Exhaust: You and Loyal Espers you summon gain the following until the end of the current Action or Ability: "Passive: [Burst] FU: You may Move 3 spaces or make a ranged or melee attack.You may choose a new target for this attack."'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Imposed Paradigm',
      sp: 2,
      description:
        'Cast a Spell 6. Swap places with the target. Allies may choose to fail the Conviction Check associated with this spell.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Possession',
      sp: 0,
      description:
        'Exhaust: A Loyal Esper within SOI makes a ranged or melee attack or you may spend 1 SP and another ally within SOI makes a ranged or melee attack instead.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Ruination',
      sp: 2,
      description:
        'Cast a Spell 6 against up to 2 different opponents within SOI. Deal Magic Damage equal to the result of a roll made with your Casting die.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Fortune Telling',
      sp: 0,
      description:
        'Once per Encounter: After a figure within your SOI has rolled for any reason, choose the result of a single die.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Summoning',
      sp: 0,
      description:
        'Flip: Gain Summon tokens equal to your highest level Assemblage Discipline. Spend a number of these tokens equal to a Loyal Espers Cost to Spawn them within your SOI. The Esper\'s level may not exceed you highest level Assemblage Discipline.'
    },
    {
      school: 'Assemblage',
      level: 2,
      name: 'Conduit Summoning',
      sp: 1,
      description:
        'Passive: Any time an opponent is defeated within SOI, earn their Conduit card. Exhaust: Replace your Adventurer card with a Conduit card that you have earned, or replace your current Conduit card with your Adventurer card.'
    },
    {
      school: 'Assemblage',
      level: 3,
      name: 'Exalted Summoning',
      sp: 0,
      description:
        'Exhaust: Spend 1 Summon token to chose an Exalted Esper and use its Ability within SOI. Passive: At the start of each Encounter, gain 1 Summon token.'
    },
    {
      school: 'Assemblage',
      level: 3,
      name: 'The Pessimist',
      sp: 0,
      description: 'Passive: When an opponent within SOI fails a Conviction Check by 3 or more, inflict Condemn.'
    },
    {
      school: 'Assemblage',
      level: 3,
      name: 'Helping Hands',
      sp: 0,
      description: 'Passive: You may carry one additional Consumable and Relic.'
    },
    {
      school: 'Assemblage',
      level: 3,
      name: 'Resonance',
      sp: 0,
      description:
        'Exhaust: "[Burst] FU: Use an un-flipped Discipline you control that costs 1-3 SP. Any Conditions excluding SP cost still apply. This Discipline may target a different figure."'
    },
    {
      school: 'Assemblage',
      level: 3,
      name: 'Friends with Benefits',
      sp: 0,
      description:
        'Passive: When you use the Discipline "Summoning", gain 1 additional Summon token. Loyal Espers you summon gain + X Health where X is equal to your highest level Assemblage discipline.'
    },
    {
      school: 'Assemblage',
      level: 4,
      name: 'Felled Afterlife',
      sp: 0,
      description:
        'Exhaust: When you defeat an opponent, this card gains 1 Energy token (Limit 2). Once per Encounter: Discard all Energy tokens from this card and spawn a Loyal Esper "Enslaved Spirit" for each token discarded.'
    },
    {
      school: 'Assemblage',
      level: 4,
      name: 'The Tower Reversed',
      sp: 1,
      description:
        'Exhaust: Cast a Spell 6. Deal 3 Magic Damage for each Effect the target has. Then, inflict Darkness, Disease, and Paralyze.'
    },
    {
      school: 'Assemblage',
      level: 4,
      name: 'Soul Bond',
      sp: 0,
      description:
        'Passive: When you use the Discipline "Summoning", gain 1 additional Summon token. Whenever a Loyal Esper you summoned spends SP on any Action or Ability, they may spend SP that you have available instead of their own. If either you or your Loyal Espers ever gain or lose a positive effect, the other also gains or loses that effect.'
    },

    ///////////
    // Cruor //
    ///////////
    {
      school: 'Cruor',
      level: 1,
      name: 'Wretched Tether',
      sp: 0,
      description: 'Exhaust: Cast a Spell 6. The target gains the Tether Special Effect token.'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'Crumbling Time',
      sp: 1,
      description: 'Exhaust: Cast a Spell 6. Your target is inflicted with Wilt'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'Imbued Fear',
      sp: 0,
      description:
        'Exhaust: When making an attack, the attack gains +2 Physical Damage and "FU: Inflict Darkness.Force X + Difference Hit where X is 6 plus the level of your highest Cruor Discipline"'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'Gore Shot',
      sp: 0,
      description:
        'Exhaust: Cast a Spell 6. Deal 2 Magic Damage. You may take 2 Irreducible Damage to deal additional Magic Damage equal to 2x your highest level Cruor Discipline.'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'Oxygen Syphon',
      sp: 2,
      description: 'Cast a Spell 6 against all opponents within SOI. Inflict Disease.'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'Corrosive Ideal',
      sp: 1,
      description: 'Exhaust: Cast a Spell 6. Your target is inflicted with Poison.'
    },
    {
      school: 'Cruor',
      level: 1,
      name: 'To Faust',
      sp: 0,
      description: 'Passive: Any time you are dealt 2 or more Damage from a single source, gain a Vow token.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Bring the Shadows',
      sp: 2,
      description:
        'Make a move action. During this movement, you do not provoke Break Attacks and you may move through opponents with no penalty. You may not increase this movement by spending additional SP. After moving, cast a Spell 6 against each figure moved through, ignoring SOI and Line of Sight. Deal your Spellcasting Die worth of Magic Damage and inflict Darkness.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Blood Pact',
      sp: 0,
      description:
        'Passive: When determining Damage, you may deal yourself Irreducible Damage up to your remaining HP to add the same amount of Physical Damage to your Attack.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Blood Toll',
      sp: 0,
      description: 'Exhaust: Deal yourself 2 Irreducible Damage and gain +2 SP.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Root the Mind',
      sp: 1,
      description: 'Exhaust: Cast a Spell 6. Your target is inflicted with Paralyze.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'In Dreams',
      sp: 0,
      description: 'Exhaust: When you hit with an attack, gain a Vow token.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Soul Steal',
      sp: 2,
      description:
        'Passive: At the start of your turn, you and an ally within SOI may redistribute any Damage tokens you have between each other. Exhaust: Cast a Spell 6. Deal Magic Damage equal to half your current total Damage.'
    },
    {
      school: 'Cruor',
      level: 2,
      name: 'Organic Liquefy',
      sp: 1,
      description:
        'Exhaust: Cast a Spell 6. Deal Magic Damage equal to the number rolled on one of the target\'s Conviction Dice. You may take 2 Irreducible Damage to deal additional Magic Damage equal to 2x your highest level Cruor Discipline.'
    },
    {
      school: 'Cruor',
      level: 3,
      name: 'Life Tithe',
      sp: 0,
      description:
        'Exhaust: An opponent within your SOI is dealt Magic Damage equal to your highest level Cruor Discipline.'
    },
    {
      school: 'Cruor',
      level: 3,
      name: 'In Secret',
      sp: 0,
      description:
        'Passive: Any time you gain a Vow token, another ally within SOI may also gain a Vow token. Any time an ally is Defeated within SOI, gain a Vow token.'
    },
    {
      school: 'Cruor',
      level: 3,
      name: 'Life Grasp',
      sp: 1,
      description:
        'Exhaust: Cast a Spell 6 against up to 3 opponents within SOI. Deal Magic Damage equal to the difference rolled on their failed Conviction Check. After rolling to determine the force of this spell, you may deal yourself 2 Irreducible Damage to add + 2 to your roll.'
    },
    {
      school: 'Cruor',
      level: 3,
      name: 'Sinful Privilege',
      sp: 0,
      description:
        'Exhaust: When choosing the target of an attack or spell, you may target an opponent that is adjacent to an Ally with no penalty regardless of Line of Sight or Range.'
    },
    {
      school: 'Cruor',
      level: 3,
      name: 'Soul Pact',
      sp: 0,
      description:
        'Passive: While you are Defeated, if the opponent that Defeated you is also Defeated, you may Flip this card to immediately place your figure on the board anywhere within an ally\'s SOI then Heal equal to half your Maximum HP'
    },
    {
      school: 'Cruor',
      level: 4,
      name: 'He Watches',
      sp: 0,
      description:
        'Passive: 2SP: Make a move action. During this movement, you have Flight. Exhaust: Deal yourself 2 Irreducible Damage and gain a Vow token.'
    },
    {
      school: 'Cruor',
      level: 4,
      name: 'Ineptitude',
      sp: 0,
      description:
        'Exhaust: When an opponent within SOI rolls for any reason, that roll fails or misses by 1. You may only use this ability on a target that is lower on the initiative track than you.'
    },
    {
      school: 'Cruor',
      level: 4,
      name: 'Abbadon\'s Subtlety',
      sp: 1,
      description:
        'Exhaust: After resolving an attack or spell you made, cast a Spell 6. Deal Magic Damage equal to the amount of Damage the target was dealt by the previous attack or spell.'
    },

    /////////////
    // Sanctus //
    /////////////
    {
      school: 'Sanctus',
      level: 1,
      name: 'Nirvana\'s Mark',
      sp: 0,
      description: 'Passive: +2 Maximum Health. Status: Heal 1'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Intervention',
      sp: 1,
      description:
        'Exhaust: An ally within SOI gains an Intervention token. Reduce the SP cost of this Discipline by 1 if the target is an ally other than yourself.'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Guardian Angel',
      sp: 0,
      description: 'Once per Encounter: At any time, you Heal equal to half your Maximum Health.'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Aspect',
      sp: 0,
      description: 'Passive: +1 Movement. Your movement point costs are not increased by terrain or allies.'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Magic Armor',
      sp: 1,
      description:
        'Exhaust: An ally within SOI gains Barrier. Reduce the SP cost of this Discipline by 1 if the target is an ally other than yourself.'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Courage Stifle',
      sp: 1,
      description:
        'Cast a Spell 6. Deal Magic Damage equal to the Armor granted to you by a single item, including its upgrades. You may spend 1 SP to deal additional Magic Damage equal to your total armor value.'
    },
    {
      school: 'Sanctus',
      level: 1,
      name: 'Mend',
      sp: 0,
      description:
        'Once per Encounter: Gain 2 Heal tokens. When these tokens are spent to Heal an ally other than yourself, gain +1 SP.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Paradigm Assault',
      sp: 0,
      description: 'Exhaust: When you hit with an attack, an ally within SOI gains Haste, Barrier, or Courage.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'From the Grave',
      sp: 0,
      description:
        'Once per Encounter: At any time, place a Defeated ally within SOI, then they Heal equal to half their Maximum HP.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Soul Clear',
      sp: 2,
      description:
        'Exhaust: Remove one Effect from a figure within SOI. Reduce the SP cost of this Discipline by 1 if the target is an ally other than yourself.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Ascension',
      sp: 2,
      description:
        'Passive: You may spend Intervention tokens as if they were SP. Increase the amount of Intervention tokens you can have by + 1. Exhaust: Make a Move Action.You have Flight for the duration of this movement.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Proof of Divinity',
      sp: 0,
      description:
        'Exhaust: An ally within SOI gains Courage. Passive: The first time each round an ally with Courage deals Damage, gain + 1 SP.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Fervor',
      sp: 2,
      description:
        'Cast a Spell 6. Deal Magic Damage equal to your total armor value. Heal another figure within SOI for half of the amount of damage dealt. If the target of the Heal is not damaged, they gain Barrier instead.'
    },
    {
      school: 'Sanctus',
      level: 2,
      name: 'Salvation',
      sp: 0,
      description:
        'Passive: At the start of an Encounter, pick an Effect and place its token on this card. For the duration of this Encounter, you are immune to this Effect.'
    },
    {
      school: 'Sanctus',
      level: 3,
      name: 'Greater Existence',
      sp: 0,
      description:
        'Passive: When dodging, you may roll your Dodge twice and use either result. Exhaust: At any time, another ally within SOI may Dodge.'
    },
    {
      school: 'Sanctus',
      level: 3,
      name: 'Font of Renewal',
      sp: 0,
      description:
        'When setting up an encounter, place the "Font of Renewal" token on normal spaces on any tile not adjacent to the starting location. Each adventurer, while adjacent to the Font, may do one of the following Encounter Actions once per encounter: * Heal half their current damage * Remove any of their Effects * Gain an Intervention Token'
    },
    {
      school: 'Sanctus',
      level: 3,
      name: 'Wings Manifest',
      sp: 1,
      description:
        'Exhaust: Move an ally within SOI up to 4 spaces. This ally has Flight for the duration of this movement.'
    },
    {
      school: 'Sanctus',
      level: 3,
      name: 'Invincibility',
      sp: 0,
      description:
        'Exhaust: When another ally within SOI would be Defeated by an opponent, they are not Defeated. Instead, they Heal 2 Purple Dice and you are dealt Irreducible Damage equal to the amount healed.'
    },
    {
      school: 'Sanctus',
      level: 3,
      name: 'Zealous Reprisal',
      sp: 3,
      description:
        'Exhaust: Cast a Spell 6. Deal Magic Damage equal to 2x your total armor value. For every space away the target is, reduce this damage by 1. Then, Push 3 or Pull 3. Reduce the SP cost of this spell by 2 if you\'ve dealt that target damage this turn.'
    },
    {
      school: 'Sanctus',
      level: 4,
      name: 'Inspiration',
      sp: 0,
      description: 'Passive: When an ally within SOI ends their turn with 0 SP, they immediately gain +1 SP'
    },
    {
      school: 'Sanctus',
      level: 4,
      name: 'Dimension Shift',
      sp: 1,
      description:
        'Exhaust: Cast a Spell 6. Deal magic damage equal to the result of a roll made with one of your combat dice. If this does damage equal to or greater than half of the target\'s current HP, they are Defeated. Then place your figure on the space they occupied and gain Barrier and + 1 SP.'
    },
    {
      school: 'Sanctus',
      level: 4,
      name: 'The Only Truth',
      sp: 4,
      description:
        'Passive: Increase the amount of Intervention tokens you can have by +1. Exhaust: All allies within SOI gain an Intervention token.'
    },

    /////////////
    // Martial //
    /////////////
    {
      school: 'Martial',
      level: 1,
      name: 'Anticipated Attack',
      sp: 0,
      description: 'Passive: During your Dodge roll, gain "[Book][Book]: +1 to Dodge"'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Blade Works',
      sp: 0,
      description: 'Exhaust: If you have 2 1-handed melee weapons equipped, make a melee attack.'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Chains of Command',
      sp: 0,
      description:
        'Exhaust: When making a melee attack, this attack gains Reach 2 and "[Burst] FU: Push or Pull the target up to 3 spaces, Force X + Difference Hit where X equals 6 plus the level of your highest Martial Discipline."'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Critical Defense',
      sp: 0,
      description: 'Passive: [Burst] FU: Gain a Dodge token. At the start of every encounter, gain 1 Dodge token.'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Hammer Helm',
      sp: 0,
      description:
        'Passive: Your attacks gain +1 Physical Damage. Exhaust: When making a melee attack, if you have a 2-handed weapon equipped, you may re- roll any dice in your Combat Dice Pool.'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Fortuitous Homicide',
      sp: 0,
      description: 'Exhaust: Counter.'
    },
    {
      school: 'Martial',
      level: 1,
      name: 'Living Bulwark',
      sp: 0,
      description:
        'Passive: As long as you have a shield equipped, you gain: * [Shield]: + 1 Physical Damage * [Burst]: +2 Physical Damage * Once per Encounter: At any time, gain Resistance: Physical Damage until the end of your next turn'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Blood Rage',
      sp: 0,
      description:
        'Passive: While you have Damage equal to at least half your Maximum Health, gain an additional SP during your SP recovery phase.'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Onslaught',
      sp: 3,
      description:
        'Make a melee attack. This attack has "FU: Make a melee attack." This second attack has "FU: Make a melee attack"'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Gigas Grip',
      sp: 0,
      description:
        'Passive: This Discipline does not work with Ranged Weapons, but does work with Melee/Ranged weapons. You may equip 2-handed Melee Weapons as if they were 1-handed but they still count as 2-handed Weapons. When Attacking, choose the Symbols, Upgrades, and Combat Dice on 1 of your equipped Weapons.'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Mage Breaker',
      sp: 1,
      description:
        'Exhaust: When determining Damage, roll the opponent\'s Casting die and add the number rolled as Physical Damage.'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Physically Perfected',
      sp: 0,
      description:
        'Passive: Gain +X Maximum Health where X is equal to your highest level Martial Discipline. Exhaust: [Burst] FU: Gain + 1 SP'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Promise',
      sp: 0,
      description:
        'Passive: FU: If your target has 3 or fewer HP remaining, they are Defeated. Exhaust: When making an attack, gain + X to your attack roll where X equals the number of times you\'ve attacked that target this turn.'
    },
    {
      school: 'Martial',
      level: 2,
      name: 'Whirlwind',
      sp: 2,
      description:
        'Make a separate melee attack against each figure currently adjacent to you. If your weapon has Reach, you may spend 1 additional SP to attack each figure currently within the Reach of your weapon instead.'
    },
    {
      school: 'Martial',
      level: 3,
      name: 'Morbid Envy',
      sp: 0,
      description: 'Exhaust: When making an attack, gain "[Burst] Add a Purple Die of Physical Damage"'
    },
    {
      school: 'Martial',
      level: 3,
      name: 'Bring the Wrath',
      sp: 0,
      description:
        'Passive: When you defeat an opponent, you may immediately end the current Action. Then, Move up to 3 spaces and make a melee or ranged attack.'
    },
    {
      school: 'Martial',
      level: 3,
      name: 'Nemesis Enforcement',
      sp: 1,
      description: 'Exhaust: An opponent within SOI gains the Nemesis Special Effect token.'
    },
    {
      school: 'Martial',
      level: 3,
      name: 'Dead End',
      sp: 1,
      description:
        'Exhaust: Before making a melee attack, if you have a 2-handed weapon equipped, you gain +X [Shield] where X equals your highest level Martial Discipline'
    },
    {
      school: 'Martial',
      level: 3,
      name: 'Relentless Feign',
      sp: 0,
      description:
        'Exhaust: When an attack targeting you misses, end the current Action. Then, you may spend 1 SP to make up to 2 melee or ranged attacks against your attacker. When you spend this initial SP, you may also spend additional SP to make additional melee or ranged attacks equal to the amount of additional SP spent.'
    },
    {
      school: 'Martial',
      level: 4,
      name: 'Challenge Supreme',
      sp: 0,
      description:
        'Passive: Before making an attack, add +1 to the attack roll for each additional SP you spend. Exhaust: During an attack, add + 1 to the attack roll.'
    },
    {
      school: 'Martial',
      level: 4,
      name: 'Master of the Vessel',
      sp: 0,
      description: 'Exhaust: At any time, gain +1 [Burst] during any of your rolls.'
    },
    {
      school: 'Martial',
      level: 4,
      name: 'Will to Live',
      sp: 0,
      description:
        'Passive: +4 Maximum Health. When you receive Damage equal to your remaining HP, instead of being Defeated, remain in play and gain Immunity: Damage. At the end of your next turn, you are Defeated.'
    },

    ////////////////
    // Subterfuge //
    ////////////////
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Trick Shot',
      sp: 0,
      description:
        'Exhaust: If you have two 1-handed ranged weapons equipped, make a ranged attack. Before rolling, you may choose to gain - 1 to the Attack Roll and + 3 Physical Damage.'
    },
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Follow Through',
      sp: 0,
      description:
        'Passive: When determining Damage of your attack, you may spend SP. For each SP spent this way, add +2 Physical Damage. If you have two Light weapons equipped, while Flanking your attacks ignore Armor.'
    },
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Kill the Messenger',
      sp: 1,
      description:
        'Exhaust: If you have a 2-handed ranged weapon equipped when making an Attack, if you roll the lowest result on a Combat Die, you may change a single die to the highest result instead.'
    },
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Like the Shadows',
      sp: 0,
      description: 'Exhaust: Move up to 2 spaces. This movement does not provoke Break Attacks.'
    }, {
      school: 'Subterfuge',
      level: 1,
      name: 'Precise Strike',
      sp: 0,
      description: 'Passive: Your ranged attacks gain: * +1 Physical Damage * Exhaust: Empower'
    },
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Quick Blow',
      sp: 1,
      description:
        'During the Follow Up step of your Attack other than your Attack made with Quick Blow, make another melee or ranged attack. You may choose a new target for this Attack.'
    },
    {
      school: 'Subterfuge',
      level: 1,
      name: 'Speed Injustice',
      sp: 0,
      description: 'Exhaust: Dodge. You may re-roll this Dodge roll.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'Blade Distortion',
      sp: 0,
      description:
        'Exhaust: [Burst] FU: Deal a Purple Die of Physical Damage to your target and all opponents adjacent to the target.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'False Idol',
      sp: 0,
      description: 'Exhaust: Make a melee attack.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'Shame of the Otaku',
      sp: 0,
      description:
        'Once per Encounter: When you are the target of an Attack, after determining if the Attack hit but before determining damage, that Attack misses. Then, Warp to any unoccupied space within SOI and Counter.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'Concoction Shot',
      sp: 0,
      description:
        'Exhaust: FU: Inflict a single random Negative Effect that your target doesn\'t already have, Force X + Difference Hit where X is equal to 6 plus the level of your highest Subterfuge Discipline.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'Friend over Foe',
      sp: 0,
      description:
        'Exhaust: Dodge. Exhaust: Another ally may make a melee or ranged attack against an opponent you attacked this turn.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'Down the Masses',
      sp: 2,
      description: 'Exhaust: Make up to two ranged attacks against different targets.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'C.Q.C',
      sp: 0,
      description:
        'Exhaust: When making an attack with two 1-handed ranged weapons, the attack gains: * +4 Physical Damage if the attack is made at range 1 * +3 Physical Damage if the attack is made at range 2 * +2 Physical Damage if the attack is made at range 3 * +1 Physical Damage if the attack is made at range 4 The attack also gains "FU: Move up to 2 spaces.This movement does not provoke Break Attacks"'
    },
    {
      school: 'Subterfuge',
      level: 3,
      name: 'Murder Circus',
      sp: 0,
      description:
        'Once per Encounter: Throw X Purple Dice. You may assign these dice to up to X targets. X is the level of your highest Subterfuge Discipline. All dice assigned to a single target this way count as a single source of Damage and are rolled together.'
    },
    {
      school: 'Subterfuge',
      level: 3,
      name: 'Profound Intuition',
      sp: 0,
      description:
        'Exhaust: When you Dodge and the Attack misses, end all current Actions. Then, move up to 3 spaces and make a melee or ranged attack. This movement does not provoke Break Attacks.'
    },
    {
      school: 'Subterfuge',
      level: 3,
      name: 'Rapid Reload',
      sp: 0,
      description:
        'Exhaust: When making an Attack with two 1-handed ranged weapons, the attack gains "FU: Add 1 Energy token to this card (Limit 2)" Energy tokens on this card may be spent as though they were SP but they do not count against your SP maximum.'
    },
    {
      school: 'Subterfuge',
      level: 3,
      name: 'Jack of all Blades',
      sp: 0,
      description:
        'Passive: 1-handed melee weapons you have equipped gain the Light tag. You tread Obstructing terrain and edges of Tiles as an ally for the purposes of Flanking.'
    },
    {
      school: 'Subterfuge',
      level: 3,
      name: 'Ninjutsu',
      sp: 0,
      description: 'Passive: +1 Defense. Exhaust: Dodge'
    },
    {
      school: 'Subterfuge',
      level: 4,
      name: 'Fist of Polaris',
      sp: 0,
      description:
        'Exhaust: If an opponent is adjacent to you, move to any space adjacent to that opponent. This movement does not provoke Break Attacks. Then make a melee attack against an opponent you have not attacked this turn. Passive: You may pay 1 SP to un- exhaust this card.'
    },
    {
      school: 'Subterfuge',
      level: 4,
      name: 'Brutal Slaughter',
      sp: 0,
      description: 'Exhaust: When making the third Attack of a turn, gain +6 Physical Damage.'
    },
    {
      school: 'Subterfuge',
      level: 4,
      name: 'Blot Out the Sun',
      sp: 4,
      description:
        'Make a ranged attack. After resolving this attack, make a separate ranged attack against each figure within 2 spaces of the target of the initial attack, ignoring Range and Line of Sight.'
    }
  ];
}
