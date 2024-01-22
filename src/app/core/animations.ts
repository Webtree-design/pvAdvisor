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
      color: '#DADCE0',
    })
  ),
  state(
    'scrolled',
    style({
      background: '#303134', // Background color when scrolled
      color: '#DADCE0',
    })
  ),
  transition('top => scrolled', animate('0.5s ease-in-out')), // Easy in transition
  transition('scrolled => top', animate('0.5s ease-in-out')), // Easy out transition
]);
