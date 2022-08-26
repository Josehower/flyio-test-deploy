const users = [
  { username: 'Peter', color: 'red' },
  { username: 'Rita', color: 'red' },
  { username: 'Severus', color: 'blue' },
  { username: 'Polly', color: 'red' },
  { username: 'Rebecca', color: 'pink' },
  { username: 'Harry', color: 'red' },
];

exports.up = async (sql) => {
  await sql`
    INSERT INTO users ${sql(users, 'username', 'color')}
  `;
};

exports.down = async (sql) => {
  for (const animal of users) {
    await sql`
      DELETE FROM
        users
      WHERE
        username = ${animal.username} AND
        color = ${animal.color}
    `;
  }
};
