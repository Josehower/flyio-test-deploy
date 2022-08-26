exports.up = async (client) => {
  await client`create table users (
		id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
		username varchar(40) NOT NULL,
		color varchar(40) NOT NULL
	)`;
};

exports.down = async (client) => {
  await client`
    DROP TABLE animals
  `;
};
