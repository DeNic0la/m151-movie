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
    const query = "INSERT INTO Movies (title,year) values('" + movie.title + "','"+ movie.year + "')";
    connection.query(query);
}
async function update(movie) {
    const sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    connection.query(sql);
}
export async function get(id) {
    const sql = "SELECT * FROM Movies where id ="+id;
    connection.query(sql,function (err,result,fields) {
        return fields
    })
}
export async function remove(id) {
    const sql = "DELETE FROM Movies WHERE id = "+id;
    connection.query(sql);
}
export function save(movie) {
    if (movie.id === null){
        insert(movie);
    }
    else {
        update(movie);
    }
}