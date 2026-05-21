import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'TW Core API',
      version: '1.0.0',
      description: 'API documentation for TW Core API',
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL ?? 'http://localhost:3000',
      },
    ],
    tags: [
      {
        name: 'Health',
        description: 'Health check endpoints',
      },
    ],
  },
  apis: [
    path.join(process.cwd(), 'src/**/*.ts'),
    path.join(process.cwd(), 'dist/**/*.js'),
  ],
});