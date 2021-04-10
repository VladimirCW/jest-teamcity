describe('Root Suite', () => {
  it('Root IT', () => {
    console.log('root IT stdout');
    console.log("##teamcity[testSuiteStarted name='suiteName']");

    console.log("##teamcity[testSuiteStarted name='nestedSuiteName']");
    console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName']");

    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='setUp time' type='number' value='434.5']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='some key' value='a text']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='JetBrains' type='link' value='https://jetbrains.com']");

    console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...']");
    console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName']");
    console.log("##teamcity[testSuiteFinished name='nestedSuiteName']");


    console.log("##teamcity[testSuiteStarted name='nestedSuiteName2']");
    console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName' captureStandardOutput='true']");
    console.log("Captured STDOUT");

    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='setUp time' type='number' value='434.5']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='some key' value='a text']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='JetBrains' type='link' value='https://jetbrains.com']");

    console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...']");
    console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName']");
    console.log("##teamcity[testSuiteFinished name='nestedSuiteName2']");

    console.log("##teamcity[testSuiteStarted name='nestedSuiteName3']");
    console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName']");

    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='setUp time' type='number' value='434.5']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='some key' value='a text']");
    console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='JetBrains' type='link' value='https://jetbrains.com']");

    console.log("##teamcity[testFailed name='package_or_namespace.ClassName3.TestName' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...']");
    console.log("##teamcity[testFinished name='package_or_namespace.ClassName3.TestName']");
    console.log("##teamcity[testSuiteFinished name='nestedSuiteName3']");

    console.log("##teamcity[testSuiteFinished name='suiteName']");
    expect(true).toEqual(false);
  });
})