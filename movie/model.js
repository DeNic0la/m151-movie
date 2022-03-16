import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
    "movie-db",
    "root",
    "sml12345",
    {
            dialect: "mysql",
            database: "movie-db",
            host: "127.0.0.1",
            port: 8008,
    },
);

const Movies = sequelize.define(
    "Movies",
    {
        title: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER,
        },
    },
    { timestamps: false }
);
export function getAll() {
    return Movies.findAll()
}
export function get(id) {
    return Movies.findByPk(id)
}
export function remove(id) {
    Movies.findByPk(id).then(value => {value.destroy()});
}
export function save(movie) {
    Movies.upsert(movie)
}