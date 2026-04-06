import { ActionReducerMap } from '@ngrx/store';
import * as bananaStore from "./banana/state";

export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState
}

export const reducer: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer
}

export const getMyBanana = (s: AppState) => s.banana;

// here we bring banana slices app to the app level, we create the AppState interface that has a banana property of type State (which we imported from our banana.state file). We also set up the initialState for the entire app, which includes the initial state of the banana. Finally, we create a reducer map that tells NgRx how to handle actions related to the banana state. The getMyBanana selector is a simple function that allows us to easily access the banana state from our components. 



//This is a huge milestone! You have just moved from a "Feature State" (the Banana) to the Global App State.
//In NgRx, your application is like a giant tree. The AppState is the trunk, and the banana is one of the branches.

// Here is the breakdown of why this file is crucial:

// 1. The Global Map (ActionReducerMap)

// export const reducer: ActionReducerMap<AppState> = {
//   banana: bananaStore.reducer
// }
// This is the most important part of the file. The ActionReducerMap is a literal map that tells NgRx: "Whenever an action happens, if it's related to the 'banana' slice of the pie, send it to the bananaStore.reducer."

// If you added an "Apple" feature later, you would simply add it here:

// export const reducer: ActionReducerMap<AppState> = {
//   banana: bananaStore.reducer,
//   apple: appleStore.reducer // New branch on the tree!
// }




// 2. The Root State Interface

// export interface AppState {
//   banana: bananaStore.State;
// }
// This ensures Type Safety for the entire app. It tells TypeScript that the global store is an object that contains a banana key, and that key follows the rules defined in your banana.state.ts. This prevents you from accidentally trying to access state.orange when it doesn't exist.


// 3. The Selector (The "Magnifying Glass")

// export const getMyBanana = (s: AppState) => s.banana;
// This is a Selector. Think of the Store as a massive warehouse. A Selector is like a magnifying glass that focuses on one specific shelf.

// Instead of your components grabbing the whole warehouse and searching through it, they use getMyBanana to get exactly what they need instantly.


// Where does this sit in the Big Picture?
// Until now, you were building the Reducer and Actions (the moving parts). Now, with app.state.ts, you are building the Store container itself.

// What's next?
// The next logical step in your video will likely be registering this reducer in your app.module.ts (or app.config.ts if using Standalone). You'll probably see something like this:

// StoreModule.forRoot(reducer)       // Registration