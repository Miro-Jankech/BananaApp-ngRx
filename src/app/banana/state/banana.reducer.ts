import { GET_NEW_BANANA } from "./banana.actions";
import * as programActions from './banana.actions';

export function reducer(state: any, action: programActions.BananaAction): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow'
      };
    }
    default: {
      return {
        ...state
      };
   }
  }
}



// This code is the "brain" of your state management. While it looks simple, there are four critical "milestones" or concepts happening here that are fundamental to how NgRx works.

// 1. The Function Signature (Input vs. Output)

// export function reducer(state: any, action: programActions.BananaAction): any
// A reducer is a Pure Function. To understand this milestone, think of it as a factory:

// Input: It takes the Current State (what the banana looks like now) and an Action (what just happened).

// Output: It must return a New State.

// Rule: It never reaches out to the internet or changes variables outside of itself. It only calculates the next state based on the two inputs it received.


// 2. The Traffic Controller (The Switch)

// switch (action.type) {
//   case GET_NEW_BANANA: { ... }
// }
// Because NgRx sends every action to every reducer, the switch statement acts as a filter.

// If the action type matches GET_NEW_BANANA, the code inside the curly braces runs.

// If it doesn't match, it ignores the code and skips to the default case.


// 3. The "New Object" Rule (Immutability)
// This is the most important milestone. Look at what happens inside the case:


// return {
//   isPeeled: false,
//   bitesRemaining: 9,
//   color: 'yellow'
// };
// Notice you aren't saying state.isPeeled = false. Instead, you are returning a brand new object.

// In NgRx, we never mutate (change) the existing state.

// We always replace it with a fresh version. This is what allows the Redux DevTools to track every single change in history without getting confused.


// 4. The Safety Net (The Default Case)

// default: {
//   return {
//     ...state
//   };
// }
// If an action occurs that this reducer doesn't care about (e.g., LOGOUT_USER), it hits the default case.

// The ...state (spread operator) creates a shallow copy of the current state and returns it.

// Crucial Note: In many modern setups, you would just return state; without the curly braces or dots. By returning { ...state }, you are creating a new reference to the same data, which ensures the UI knows it might need to check for changes.




//  "MODERN WAY" (The on function)
// In modern NgRx (v8 and later), the team introduced a more "functional" way to write reducers using a function called createReducer. It replaces the switch statement with on() blocks:

// TypeScript
// export const bananaReducer = createReducer(
//   initialState,
//   on(getNewBanana, (state, { payload }) => ({ ...state, color: payload }))
// );
// Which should you use?
// Stick with the switch for now: Since your tutorial uses it, follow along. It helps you understand exactly how the logic branches.

// The logic is the same: Whether you use a switch or the modern on() syntax, the rule is always: Take the old state + the action = Return a brand new state object.




// MODERN WAY CODE:


// To rewrite this in the modern way, we use the createReducer and on functions. This approach is much cleaner because it removes the need for the switch statement and the manual type boilerplate.

// Here is how your banana.reducer.ts would look in modern NgRx:

// TypeScript
// import { createReducer, on } from '@ngrx/store';
// import { getNewBanana } from './banana.actions'; // Assuming you updated actions to createAction

// // 1. Define the shape of your state
// export interface BananaState {
//   isPeeled: boolean;
//   bitesRemaining: number;
//   color: string;
// }

// // 2. Set the initial state
// export const initialState: BananaState = {
//   isPeeled: false,
//   bitesRemaining: 0,
//   color: 'unknown'
// };

// // 3. Create the reducer
// export const bananaReducer = createReducer(
//   initialState,
  
//   // This replaces the 'case GET_NEW_BANANA:'
//   on(getNewBanana, (state) => {
//     console.log('REDUCER: Getting new banana');
//     return {
//       ...state,          // Keep existing state
//       isPeeled: false,   // Update properties
//       bitesRemaining: 9,
//       color: 'yellow'
//     };
//   })
// );
// Key Improvements in the Modern Way:
// Type Safety: By defining an interface BananaState, TypeScript will yell at you if you try to return a property that doesn't exist (like peelColor instead of color).

// No "Default" Case needed: createReducer automatically handles the default case. If an action doesn't match any on() blocks, it simply returns the current state for you.

// Readability: You don't have to manage the Action class or the string constants manually; the on() function links directly to the action creator.

// Important: Update your Actions too!
// For this modern reducer to work perfectly, your actions should also be updated to the modern createAction syntax:

// TypeScript
// // banana.actions.ts
// import { createAction, props } from '@ngrx/store';

// export const getNewBanana = createAction(
//   '[Banana] Get New Banana',
//   props<{ payload: any }>() // Only if you actually need to pass data
// );
// Why the ...state is still there
// Even in the modern way, we still use the Spread Operator (...state). This ensures we are following the rule of Immutability. We create a new object, copy the old state into it, and then apply our changes.

// Would you like to see how to register this new reducer in your app.config.ts so the application can actually use it?