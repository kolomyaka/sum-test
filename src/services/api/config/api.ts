import axios from "axios";

// Настраиваем конфиг для axios
export const $api = axios.create({
    baseURL: __API__,
});