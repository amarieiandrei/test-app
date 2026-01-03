import { Component } from '@angular/core';

import { HlmButton } from '../../../../libs/ui/button/src/lib/hlm-button'


@Component({
  selector: 'app-home',
  imports: [
    // directives
    HlmButton
  ],
  templateUrl: './home.html',
})
export class HomeComponent {}