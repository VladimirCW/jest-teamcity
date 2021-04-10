describe('Root Suite', () => {
  it('Root IT', () => {
    console.log('root IT stdout');
    console.log("##teamcity[testMetadata testName='package.Test.testName' name='setUp time' type='number' value='434.5']");
    console.log("##teamcity[testMetadata testName='package.Test.testName' name='some key' value='a text']");
    console.log("##teamcity[testMetadata testName='test.name' name='JetBrains' type='link' value='https://jetbrains.com']");
    expect(true).toEqual(false);
  });
})