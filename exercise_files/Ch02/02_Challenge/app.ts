interface TodoItem {
    id: number,
    title: string,
    status: TodoStatus,
    completedOn?: Date
}

enum TodoStatus {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

//var item1: TodoItem = { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") }

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: TodoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo },
]

function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: TodoStatus.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T1 extends { id: number }>(items: T1[]): number {
    return items.reduce((max, x) => x.id > max ? max: x.id , 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
