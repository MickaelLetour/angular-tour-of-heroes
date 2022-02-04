const server = require("../config/db");
module.exports = app => {

    /**
     * GET all heroes
     */
    app.get('/heroes', async (req, res) => {
        try {
            const result = await server.pool.query(
                "select h.id, h.name, h.age, h.date, re.name as regionName, ro.name as roleName from heroes as h join region as re on h.id_region = re.id join role as ro on h.id_role = ro.id ");
            res.send(result);
            console.log("heroes.routes.js => app.get all heroes");
        } catch (err) {
            throw err;
        }
    });

    /**
     * GET a hero
     * @param id
     */
    app.get('/heroes/:id', async (req, res) => {
        let id = req.params.id
        try {
            const result = await server.pool.query("select h.id, h.name, h.age, h.date, re.name as regionName, ro.name as roleName from heroes as h join region as re on h.id_region = re.id join role as ro on h.id_role = ro.id  where h.id = ?", id);
            res.send(result[0]);
            console.log("heroes.routes.js => app.get a hero from id : " + id);
        } catch (err) {
            throw err;
        }
    });

    /**
     * post hero
     * @param hero
     */
    app.post('/heroes', async (req, res) => {
        let hero = req.body;
        try {
            const result = await server.pool.query("insert into heroes (name) values (?)", [hero.name]);
            res.send(result);
            console.log("heroes.routes.js => app.post a hero");
        } catch (err) {
            throw err;
        }
    });

    /**
     * update hero
     * @param hero
     */
    app.put('/heroes', async (req, res) => {
        let hero = req.body;
        try {
            const result = await server.pool.query("update heroes set name = ? where id = ?", [hero.description, hero.id]);
            res.send(result);
            console.log("heroes.routes.js => app.update a hero");
        } catch (err) {
            throw err;
        }
    });

    /**
     * delete hero
     * @param id
     */
    app.delete('/heroes/:id', async (req, res) => {
        let id = req.params.id
        try {
            const result = await server.pool.query("delete from heroes where id = ?", [id]);
            res.send(result);
            console.log("heroes.routes.js => app.delete a hero from id : " + id);
        } catch (err) {
            throw err;
        }
    });

}