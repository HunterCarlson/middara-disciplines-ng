import { Discipline } from './discipline';

export class Data {

  static disciplines: Discipline[] = [
    // Assemblage //
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
        'Exhaust: Spend 1 Summon token to chose an Exalted Esper and use its Ability within SOI. Passive: At the s tart of each Encounter, gain 1 Summon token.'
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
        'Passive: When you use the Discipline ""Summoning"", gain 1 additional Summon token. Loyal Espers you summon gain + X Health where X is equal to your highest level Assemblage discipline.'
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

    // Cruor //

    // Sanctus //

    // Martial //
    {
      school: 'Martial',
      level: 1,
      name: 'Blade Works',
      sp: 0,
      description: 'Exhaust: If you have 2 1-handed melee weapons equipped, make a melee attack.'
    },

    // Subterfuge //
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
      name: 'Quick Blow',
      sp: 1,
      description:
        'During the Follow Up step of your Attack other than your Attack made with Quick Blow, make another melee or ranged attack. You may choose a new target for this Attack.'
    },
    {
      school: 'Subterfuge',
      level: 2,
      name: 'False Idol',
      sp: 0,
      description: 'Exhaust: Make a melee attack.'
    }
  ];
}
