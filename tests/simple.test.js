describe('Root Suite', () => {
  it('Root IT', () => {
    console.log('root IT stdout');
    console.log("##teamcity[testSuiteStarted name='suiteName']");
    console.log("##teamcity[testSuiteStarted name='nestedSuiteName']");
    console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName']");

    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='setUp time' type='number' value='434.5']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='some key' value='a text']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='JetBrains' type='link' value='https://jetbrains.com']");

    console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName']");
    console.log("##teamcity[testSuiteFinished name='nestedSuiteName']");
    console.log("##teamcity[testSuiteFinished name='suiteName']");
    expect(true).toEqual(false);
  });
})