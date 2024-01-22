import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const flipAnimation = trigger('flipState', [
  state(
    'active',
    style({
      transform: 'rotateY(180deg)',
    })
  ),
  state(
    'inactive',
    style({
      transform: 'rotateY(0)',
    })
  ),
  transition('active => inactive', animate('500ms ease-out')),
  transition('inactive => active', animate('500ms ease-in')),
]);
