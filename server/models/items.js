const db = require('../db');

module.exports = {
  verifyByNumber: (number,cb) => {
    db.query(`SELECT * FROM items WHERE item_number = '${number}'`)
    .then(res => {
      cb(res.rows[0]);
    })
  },
  verifyByName: (name,cb) => {
    db.query(`SELECT * FROM items WHERE item_name = '${name}'`)
    .then(res => {
      cb(res.rows[0]);
    })
  },
  createAItem: (number, name, part, type, material, grade, level, line1, line2, condition1, condition2, manastone, enchant, setId, creator, created_at, abyss, total, korean) => {
    const text = 'INSERT INTO items (item_number, item_name, part, type, grade, material, level, line_one, line_two, manastones, condition_one, condition_two, max_enchant, set_id, creator, created_at, abyss, total_stats, korean_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)';
    const values = [number, name, part, type, grade, material, level, line1, line2, manastone, condition1, condition2, enchant, setId, creator, created_at, abyss, total, korean];
    db.query(text, values)
  },
  getItems: (part, type, grades, input, filter, material, cb) => {
    const andConditions = [
      { column: 'part', value: part },
      { column: 'type', value: type },
    ];
    const orConditions = [];
    grades.forEach(grade => {
      orConditions.push({ column: 'grade', value: grade});
    })
    const substringColumn = 'item_name';
    const substringValue = input;
    let query;
    if (material === undefined) {
      query = {
        text: `
          SELECT *
          FROM items
          WHERE ${
            andConditions
              .map((condition, index) => `(${condition.column} = $${index + 1})`)
              .join(' AND ')
          }
          AND (${
            orConditions
              .map((condition, index) => `(${condition.column} = $${andConditions.length + index + 1})`)
              .join(' OR ')
          })
          AND item_name LIKE '%' || $${andConditions.length + orConditions.length + 1} || '%'
          ORDER BY (total_stats ->> $${andConditions.length + orConditions.length + 2})::float DESC
        `,
        values: [
          ...andConditions.map(condition => condition.value),
          ...orConditions.map(condition => condition.value),
          substringValue, filter
        ],
      };
    } else {
      query = {
        text: `
          SELECT *
          FROM items
          WHERE ${
            andConditions
              .map((condition, index) => `(${condition.column} = $${index + 1})`)
              .join(' AND ')
          }
          AND (${
            orConditions
              .map((condition, index) => `(${condition.column} = $${andConditions.length + index + 1})`)
              .join(' OR ')
          })
          AND material = $${andConditions.length + orConditions.length + 3}
          AND item_name LIKE '%' || $${andConditions.length + orConditions.length + 1} || '%'
          ORDER BY (total_stats ->> $${andConditions.length + orConditions.length + 2})::float DESC
        `,
        values: [
          ...andConditions.map(condition => condition.value),
          ...orConditions.map(condition => condition.value),
          substringValue, filter, material
        ],
      };
    }

    db.query(query)
    .then(res => cb(res.rows))
  }
}