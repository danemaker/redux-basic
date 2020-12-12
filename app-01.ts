import { Reducer, Action } from './ngrx-fake/ngrx';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState(){
    return this.state;
  }

  dispach(action: Action){
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 10);

console.log(store.getState());

store.dispach(incrementadorAction);

console.log(store.getState());

/* console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, resetAction)); */
