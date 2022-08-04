const db = require('../db/connection');

class Employees {
    async getEmployees() {
        const sql = `SELECT * FROM employees`;
        // console.log(sql);
        await db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
            } else {
                // console.table(rows);
                return rows;
            }
        });
    }
}

module.exports = Employees;