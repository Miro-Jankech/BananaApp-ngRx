import { Component, inject, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getMyBanana } from './app.state';
import { GetNewBanana } from './banana/state';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Use inject() - it's the modern way to get the Store
  private store = inject(Store);

  // Use your selector to grab the banana slice of state
  banana$: Observable<any> = this.store.select(getMyBanana);

  loadBanana() {
    // Dispatch the action class you created earlier
    this.store.dispatch(new GetNewBanana({ color: 'yellow' }));
  }
}


// In a standalone component, you don't have a module to handle your dependencies. You must import the tools you need directly into the @Component decorator.

// TypeScript
// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Required for the async pipe
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { getMyBanana, GetNewBanana } from './app.state';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule], // Add CommonModule here!
//   template: `
//     <h1>Banana Manager</h1>
//     <div *ngIf="banana$ | async as banana">
//       <p>Color: {{ banana.color }}</p>
//       <button (click)="loadBanana()">Get New Banana</button>
//     </div>
//   `
// })
// export class AppComponent {
//   // Use inject() - it's the modern way to get the Store
//   private store = inject(Store);

//   // Use your selector to grab the banana slice of state
//   banana$: Observable<any> = this.store.select(getMyBanana);

//   loadBanana() {
//     // Dispatch the action class you created earlier
//     this.store.dispatch(new GetNewBanana({ color: 'yellow' }));
//   }
// }


// Why this is better for you
// No AppModule clutter: You only import what that specific component needs.

// Tree Shaking: If you never use a certain NgRx feature, Angular can remove it from the final bundle, making your app faster.

// Modern