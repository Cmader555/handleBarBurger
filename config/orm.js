const connection = require("./connection");



function printQuestionMarks(num) {
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

///USED FOR TESTING ORM FUNCTIONING

// let tableInput = "burgers"; 
// let table = "burgers"; 
// let cols = ["burger_name", "devoured"]
// let vals = ['burger-test', false]
// let objColVals = {devoured: true}; 
// let condition = "id = 1"


let orm = {


    selectAll: function (tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            //console.log("all/show orm: " + JSON.stringify(result)); 
            cb(result);

        });
    },
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
            //console.log("create orm: " + result)
        });
    },
    update: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
            // console.log("update orm" + result); 
        });
    },

    delete: function (cb) {
        let queryString1 = `DELETE FROM burgers WHERE id > 3;`;

        let queryString2 = `UPDATE burgers SET devoured = 0 WHERE id >= 1;`; 

        console.log(queryString1);
        connection.query(queryString1, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);

        })

        console.log(queryString2);
        connection.query(queryString2, function (err, result) {

            if (err) {
                throw err;
            }

            cb(result);

        })


    }

};



module.exports = orm;

// USED FOR TESTING ORM FUNCTIONS

// orm.SelectAll(tableInput); 

// orm.create(table, cols, vals); 
// orm.update(table, objColVals, condition); 







