import { Discipline } from './discipline';

export class Data {

  static disciplines: Discipline[] = [
    {
      school: 'Martial',
      level: 1,
      name: 'Blade Works',
      sp: 0,
      description:
        'Exhaust: If you have 2 1-handed melee weapons equipped, make a melee attack.'
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
