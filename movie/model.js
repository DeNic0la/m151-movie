import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./movie.db",
});
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

}
export function get(id) {
    TODO;
}
export function remove(id) {
    TODO;
}
export function save(movie) {
    TODO;
}