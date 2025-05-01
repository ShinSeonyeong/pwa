import axios from "axios";

export const todosReq = {
    async delete(id) {
        const res = await axios
            .delete(`https://6809e0631f1a52874cde2b73.mockapi.io/todos/${id}`);
        return res.status;
    }
}