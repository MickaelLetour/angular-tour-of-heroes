const server = require("../config/db");
module.exports = app => {

    /**
     * GET a role from id param
     */
    app.get('/role/:id', async (req, res) => {
        let id = req.params.id
        try {
            const result = await server.pool.query("select * from role where id = ?", id);
            res.send(result[0]);
            console.log("role.routes.js => app.get a role from id");
        } catch (err) {
            throw err;
        }
    });

}