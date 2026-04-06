import {Action} from '@ngrx/store';

export const GET_NEW_BANANA = 'Get New Banana';

export class GetNewBanana implements Action {
  readonly type: string = GET_NEW_BANANA;

  constructor (public payload:any) {
    console.log('ACTION' + GET_NEW_BANANA);
  }
}

export type BananaAction = GetNewBanana;



// 1. The Constant: The Action "Label"

// export const GET_NEW_BANANA = 'Get New Banan';
// Think of this as a unique ID. The Reducer (the part of NgRx that updates data) needs to know exactly which action just happened. By storing the string in a constant, you avoid typos later when you try to reference it in other files.

// 2. The Class: The Action "Envelope"

// export class GetNewBanana implements Action {
//   readonly type: string = GET_NEW_BANANA;

//   constructor (public payload: any) { ... }
// }
// In this older style, an Action is a class. It must follow a specific "contract" (the Action interface), which requires it to have a type property.

// readonly type: This tells NgRx what kind of event this is.

// payload: This is the data you are carrying. If you are getting a new banana, the payload might be the banana's color, size, or ID.

// constructor: When you write new GetNewBanana({ color: 'yellow' }) in your component, this class builds the object that gets sent through the system.


// 3. The Action Type: The "Gatekeeper"

// export type BananaAction = GetNewBanana;
// This is a TypeScript Union Type. Right now, you only have one action. But eventually, you might have EatBanana, PeelBanana, etc. You would add them here:
// export type BananaAction = GetNewBanana | EatBanana | PeelBanana;

// This acts as a "Gatekeeper" for your Reducer, ensuring that the Reducer only processes actions that belong to the "Banana" category.

// How the Data Flows
// When this code runs, it follows this loop:

// Component calls store.dispatch(new GetNewBanana(someData)).

// The Action (the class you just wrote) is sent to the Store.

// The Reducer sees the type ('Get New Banan'), looks at the payload, and updates the state.



// MODERN NOTE
// In modern Angular (v16+), we usually write this more concisely using createAction:


// export const getNewBanana = createAction(
//   '[Banana] Get New',
//   props<{ payload: any }>()
// );
// Since you are following a video, stick with the class-based version for now so the tutorial makes sense, but keep in mind that the "Class" way is just a more manual way of building that action object!
