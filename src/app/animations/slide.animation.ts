import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => slide', [
      query(':enter', style({ position: 'fixed', width: '100%' }), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('.7s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true })
      ])
    ])]);
