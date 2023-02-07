import fs from 'fs';
import path from 'path';

test('individually compiled', () => {
  const testArtifactPath = path.resolve(__dirname, '../.test-artifacts/individually/dist/esbuild');

  const hello1indexContents = fs.readFileSync(path.join(testArtifactPath, 'hello1.js')).toString();
  const hello2indexContents = fs.readFileSync(path.join(testArtifactPath, 'hello2.js')).toString();

  expect(hello1indexContents).toMatchSnapshot();

  expect(hello2indexContents).toMatchSnapshot();
});
