export interface TodoListView {
    id: number;
    description: string;
    entries: Entry[];
}

export interface Entry {
    id: number;
    dueDate: string;
    entryStatus: EntryStatus;
    description: string;
    priority: number;
}

export enum EntryStatus {
    ACTIVE = "ACTIVE",
    DONE = "DONE",
    PENDING = "PENDING"
}

export const dummyTodoLists: TodoListView[] = [
    {
     id: 1,
     description: "first list",
     entries: [
         {
             id: 1,
             description: "first sub item",
             dueDate: "2021-12-23T09:48:55.588Z",
             entryStatus: EntryStatus.ACTIVE,
             priority: 1
         },
         {
             id: 2,
             description: "second sub item",
             dueDate: "2021-12-24T09:48:55.588Z",
             entryStatus: EntryStatus.PENDING,
             priority: 3
         }
     ]
    },
    {
        id: 2,
        description: "empty list",
        entries: []
    }
]
