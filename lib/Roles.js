class Roles {
    getRoles() {
        const sql = `SELECT * FROM roles`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
            } else {
                console.table(rows);
            }
        });
    }
}

module.exports = Roles;