export {reducer } from './banana.reducer';
export * from './banana.actions';
export type {State, initialState} from './banana.state';



// This index.ts file is what developers call a "Barrel File." Its primary purpose isn't to add new logic, but to act as a central reception desk for your feature. Instead of other parts of your app having to hunt through three or four different files to find what they need, they can just talk to this one file.Here is the breakdown of why this is a best practice:
// 1. Clean Imports (The "Single Entry Point")
// Without this index.ts, when you wanted to use the banana logic in a component, your imports would look like a mess:

// import { GetNewBanana } from './state/banana/banana.actions';
// import { BananaState } from './state/banana/banana.state';
// ...and so on

// With the index.ts, you can grab everything in one clean line:
// import { GetNewBanana, BananaState, reducer } from './state/banana';

// 2. Encapsulation (Hiding the "Plumbing")
// By using a barrel file, you are telling the rest of the application: "These are the only things you need to care about." If you later decide to split your banana.actions.ts into two files because it got too big, you only have to update the index.ts. Any component using those actions won't even notice the change because they are still importing from the same "reception desk."

// 3. Wiring up the Store
// When you eventually register your state in your AppModule or AppConfig, NgRx needs a map of your reducers. Having them exported cleanly here makes that registration much easier.

//Understanding the Syntax
// 
//Line                                       What it does  

// export  {reducer } from ...              Takes the specific reducer function and passes it through.
//export * from ...                         Grabs everything from the actions file (all classes, constants, etc.) and exposes them.
//export type { ... }                       Specifically exports the TypeScript interfaces. This is a performance optimization that tells the compiler these are only for                                         type-checking and don't contain actual running code.