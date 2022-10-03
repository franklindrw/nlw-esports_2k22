import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: "1.0.0",
    title: 'NLW E-Sports 2k22',
    description: 'Api em Node desenvolvida no evento nlw, api REST em arquitetura MVC',
  },
  host: 'localhost:3000',
  basePath: "/",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      "name": "Games",
      "description": "Endpoints de games"
    },
    {
      "name": "Anúncios",
      "description": "Endpoints de Anúncios"
    }
  ],
  definitions: {
    addAds: {
      name: "nick name example",
      yearsPlaying: 1,
      discord: "discord#id",
      weekDays: "0, 2, 5, 6",
      hourStart: "17:00",
      hourEnd: "23:59",
      useVoiceChannel: true
    }
  }
};

const outputFile = './src/swagger/swagger-output.json';
const endpointsFiles = ['./src/routes/index.ts'];

const swagger = swaggerAutogen(outputFile, endpointsFiles, doc);

export default swagger;