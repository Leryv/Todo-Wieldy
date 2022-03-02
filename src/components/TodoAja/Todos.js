import { createSlice } from "@reduxjs/toolkit";
// import { TodosData } from "./FakeData"; // mengambil data "mainan" dari "todo/src/FakeData.js"

const todoSlice = createSlice({
    // function untuk di ekspor ke "todo/src/components/TableComponents"
    name: "todos",
  initialState: {
    value:[]
  }, // lupa buat apaan
    reducers: {
        // membuat function { addTodo } untuk di eksport ke "todo/src/components/CreateModal.js/"
        addTodo: (state, action) => {
            // menambahkan data todo
            state.value.push(action.payload); // aksi dimana data akan di tambahkan
        },

        // membuat function { deleteTodo } untuk di eksport ke "todo/src/components/TableComponent.js/" untuk menghapus data
        deleteTodo: (state, action) => {
            // aksi dimana data akan di filter
            state.value = state.value.filter(
                (todo) => todo.id !== action.payload.id // dan menyesuaikan jika *id tidak samadengan (id yang akan di delete)* todo tidak akan di hapus (mungkin?)
            );
        },

        // membuat function { deleteTodo } untuk di eksport ke "todo/src/components/TableComponent.js/" untuk menghapus data
        updateTodo: (state, action) => {
            // ngeloop data
            state.value.map((todo) => {
                if (todo.id === action.payload.id) { // jika todo id dari FakeData.js sama dengan todo id yang dikirim dari TableComponent maka:
                    todo.todo = action.payload.todo; // todo = input todo yang di input sebelumnya
                }
            });
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
