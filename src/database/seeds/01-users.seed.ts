exports.seed = async (knex) => {
  const tableName = 'users';
  // remove all existing data from table
  await knex(tableName).del();
  // insert new data into table
  await knex(tableName).insert([
    {
      id: 1,
      name: 'Leanne Graham',
      user_name: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      user_name: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      user_name: 'Samantha',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      user_name: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
      website: 'kale.biz',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      user_name: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      website: 'demarco.info',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      user_name: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      user_name: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
      website: 'elvis.io',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      user_name: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      user_name: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      user_name: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
      website: 'ambrose.net',
    },
  ]);
};
