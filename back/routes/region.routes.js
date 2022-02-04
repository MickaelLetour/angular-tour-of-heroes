const server = require("../config/db");
module.exports = app => {

    /**
     * GET a region from id param
     */
    app.get('/region/:id', async (req, res) => {
        let id = req.params.id
        try {
            const result = await server.pool.query("select * from region where id = ?", id);
            res.send(result[0]);
            console.log("region.routes.js => app.get a region from id");
        } catch (err) {
            throw err;
        }
    });

}