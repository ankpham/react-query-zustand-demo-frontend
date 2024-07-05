import { create } from 'zustand'
import { useTodos } from '../api/APIMethods';
import { useQueryClient } from '@tanstack/react-query';

type Todo = {
    id: number;
    name: string;
    description: string;
    isComplete: false;
};

type TodoState = {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
}

export const useTodosStore = create<TodoState>((set) => ({
    todos: [],
    setTodos: (todos) => set({ todos }),
}));