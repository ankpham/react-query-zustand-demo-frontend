import React, {useEffect} from 'react';
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useTodos } from '../api/APIMethods';
import { useQueryClient } from '@tanstack/react-query';
import { useTodosStore } from '../stores/useTodoStore.tsx';

export const HomePage = () => {

    const { data } = useTodos();
    const setTodos = useTodosStore((state) => state.setTodos);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data, setTodos]);

    const todos = useTodosStore((state) => state.todos);

    return (
        <>
        <div className='home'>
            <table className='todo-list'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completed?</th>
                </tr>
                {todos?.map((todo) => (
                    <tr className='todo'>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td style={{cursor: 'pointer'}} className='isComplete'>{todo.isComplete ? <FaCheck style={{color: "green"}} /> : <FaXmark style={{color: "red"}}/>}</td>
                    </tr>
                ))}
            </table>
            <DuplicateTodoList/>
        </div>
        </>
    )

}

const DuplicateTodoList = () => {

    //pulls from cache
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(["todos"])
    
    return (
        <>
        <table className='todo-list'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completed?</th>
                </tr>
                {data?.map((todo) => (
                    <tr className='todo'>
                        <td>{todo.id}</td>
                        <td>{todo.name}</td>
                        <td>{todo.description}</td>
                        <td style={{cursor: 'pointer'}} className='isComplete'>{todo.isComplete ? <FaCheck style={{color: "green"}} /> : <FaXmark style={{color: "red"}}/>}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}