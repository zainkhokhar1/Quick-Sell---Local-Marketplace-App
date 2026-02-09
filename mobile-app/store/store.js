import { create } from "zustand";

export const useTodoStore = create((set) => ({
    todos: [
        {
            id : Date.now(),
            text: 'Create home Page'
        }
    ],

    addTodo: (todo) => {
        set((state) => {
            todos: [...state.todos, { id: Date.now(), text: todo }]
        })
    }

}
));
