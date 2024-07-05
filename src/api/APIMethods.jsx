import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTodos = () => 
    useQuery({
        queryKey: ['todos'],
        queryFn: () =>
          axios.get("http://localhost:8080/find-all").then((res) => {
              return res.data;
          }),
    })

export const addTodos = () => 
    useQuery({
        queryKey: ['todos'],
        queryFn: () =>
            axios.post("http://localhost:8080/add-todos").then((res) => {
                return useTodos().data;
            }),
    })