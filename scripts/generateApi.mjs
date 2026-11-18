import { fileURLToPath } from 'node:url';
import { generateApi } from 'swagger-typescript-api';

const swaggerUrl = process.env.SWAGGER_URL?.trim();

if (!swaggerUrl) {
  throw new Error('.env에 SWAGGER_URL을 설정해 주세요.');
}

await generateApi({
  url: swaggerUrl,
  output: fileURLToPath(
    new URL('../src/shared/apis/generated/', import.meta.url),
  ),
  fileName: 'dataContracts.ts',
  generateClient: false,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  enumStyle: 'union',
});
