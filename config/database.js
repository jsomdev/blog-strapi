module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3001),
        database: env('DATABASE_NAME', 'blog-strapi'),
        username: env('DATABASE_USERNAME', 'jansom'),
        password: env('DATABASE_PASSWORD', 'jansom'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
