import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export const toolbarAnimation = trigger('toolbar', [
  state(
    'top',
    style({
      background: 'transparent', // Initial background color when at the top
      color: '#FFFFFF',
    })
  ),
  state(
    'scrolled',
    style({
      background: '#000000', // Background color when scrolled
      color: '#FFFFFF',
    })
  ),
  transition('top => scrolled', animate('0.5s ease-in-out')), // Easy in transition
  transition('scrolled => top', animate('0.5s ease-in-out')), // Easy out transition
]);
