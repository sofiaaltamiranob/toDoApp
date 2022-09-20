import { Action, createReducer, on } from "@ngrx/store";
import { crear, toggle } from "./todo.actions";
import { Todo } from './models/todo.model';



export const initialState: Todo[] = [
  new Todo('Salvar al Mundo'),
  new Todo('Salivar al Mundo'),
  new Todo('Salar al Mundo')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  })
);


export function todoReducer(state: Todo[] = initialState, action: Action) {
  return _todoReducer(state, action);
}
