export interface State {
  isPeeled: boolean;
  bitesRemaining: number;
  color: 'yellow' | 'brown';
}

export const initialState : State = {} as State

// as State is a type assertion that tells TypeScript to treat the empty object {} as if it were of type State. This is often used when you want to initialize a variable with an empty object but still want to satisfy the type requirements of the State interface.

// type assertion - A type assertion is a way to tell the TypeScript compiler to treat a value as a specific type. It does not perform any runtime checks or conversions; it simply tells the compiler to assume that the value is of the specified type. In this case, initialState is being asserted as State, which means that TypeScript will treat it as if it were of type State, even though it is initialized with an empty object.

// {} as State

// It means:
// “Trust me, TypeScript — I know this object will behave like State.”
// You're basically forcing TypeScript to treat {} as a State, even though it’s incomplete. This can be useful in certain scenarios, such as when you plan to populate the object later or when you want to bypass strict type checking temporarily