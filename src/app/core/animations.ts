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
      color: '#222222',
    })
  ),
  state(
    'scrolled',
    style({
      background: '#e9e9e9', // Background color when scrolled
      color: '#527853',
    })
  ),
  transition('top => scrolled', animate('0.5s ease-in-out')), // Easy in transition
  transition('scrolled => top', animate('0.5s ease-in-out')), // Easy out transition
]);
