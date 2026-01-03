import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})
export class ThemeService {
  private isDark = false;

  constructor() {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  isDarkMode() {
    return this.isDark;
  }
}