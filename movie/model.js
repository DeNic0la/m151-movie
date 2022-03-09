import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "sml12345",
    database: "movie-db",
    port: 8008
});
await connection.connect();
export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.query(query);
    return data;
}
async function insert(movie) {
    console.log(movie);
}
async function update(movie) {}
export async function get(id) {}
export async function remove(id) {}
export function save(movie) {
    insert(movie).then();
}