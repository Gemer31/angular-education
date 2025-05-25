import { Directive, Host, Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class EmojiService {

}

@Directive({
  selector: '[appParent]',
  standalone: true,
  // providers: [{provide: EmojiService, useValue: '🍉'}],
})
export class ParentDirective {
  constructor(@Optional() @Host() public emoji: EmojiService) {
    console.log(emoji);
  }
}

@Directive({
  selector: '[appChild]',
  standalone: true,
  // providers: [{provide: EmojiService, useValue: '🍌'}],
})
export class ChildDirective {
  constructor(@Optional() @Host() public emoji: EmojiService) {
    console.log(emoji);
  }
}
