import { Component } from '@angular/core';

import { HlmButton } from '../../../../libs/ui/button/src/lib/hlm-button';
import { HlmInput } from '../../../../libs/ui/input/src/lib/hlm-input';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-home',
  imports: [
    // directives
    HlmButton,
    HlmInput
  ],
  templateUrl: './home.html',
})
export class HomeComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}