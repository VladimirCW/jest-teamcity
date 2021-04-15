describe('Root Suite', () => {
  it('Root IT', () => {
    console.log('root IT stdout');

    //console.log("##teamcity[inspectionType id='123' name='InspectionType' description='InspectionDescribe' category='inspectionCategory']");

    console.log("##teamcity[testSuiteStarted name='suiteName' flowId='MainFlow']");

    console.log("##teamcity[flowStarted flowId='SubFlow1' parent='MainFlow']");
    console.log("##teamcity[testSuiteStarted name='nestedSuiteName' flowId='MainFlow']");
        console.log("##teamcity[flowStarted flowId='SubFlow1-b' parent='MainFlow']");
        // test start package_or_namespace.ClassName.TestName
        console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName-b' flowId='SubFlow1-b']");

          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-b' name='setUp time' type='number' value='434.5' flowId='SubFlow1-b']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-b' name='some key' value='a text' flowId='SubFlow1-b']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-b' name='JetBrainsLink' type='link' value='https://jetbrains.com' flowId='SubFlow1-b']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-b' type='artifact' value='images/castle.gif' flowId='SubFlow1-b']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-b' type='image' value='images/castle.gif' flowId='SubFlow1-b']");
    
          console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName-b' type='comparisonFailure' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...' expected='expected value' actual='actual value' flowId='SubFlow1-b']");
        console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName-b' flowId='SubFlow1-b']");
        //test finish package_or_namespace.ClassName.TestName
        console.log("##teamcity[flowFinished flowId='SubFlow1-b']");

        console.log("##teamcity[flowStarted flowId='SubFlow1-a' parent='MainFlow']");
        // teststart package_or_namespace.ClassName.TestName-a
        console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName-a' flowId='SubFlow1-a']");

          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='setUp time' type='number' value='434.5' flowId='SubFlow1-a']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='some key' value='a text' flowId='SubFlow1-a']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='JetBrainsLink' type='link' value='https://jetbrains.com' flowId='SubFlow1-a']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' type='artifact' value='images/castle.gif' flowId='SubFlow1-a']");

          console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName-a' type='comparisonFailure' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...' expected='expected value' actual='actual value' flowId='SubFlow1-a']");
        console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName-a' flowId='SubFlow1-a']");
        // test finish package_or_namespace.ClassName.TestName-a
        console.log("##teamcity[flowFinished flowId='SubFlow1-a']");

      console.log("##teamcity[testSuiteFinished name='nestedSuiteName' flowId='MainFlow']");
    console.log("##teamcity[flowFinished flowId='SubFlow1']");


    console.log("##teamcity[testSuiteStarted name='nestedSuiteName2' flowId='MainFlow']");
      console.log("##teamcity[flowStarted flowId='SubFlow1-c' parent='MainFlow']");
      // test start package_or_namespace.ClassName.TestName
      console.log("##teamcity[testStarted name='package_or_namespace2.ClassName2.TestName-c' flowId='SubFlow1-c']");

        console.log("##teamcity[testMetadata testName='package_or_namespace2.ClassName2.TestName-c' name='setUp time' type='number' value='434.5' flowId='SubFlow1-c']");
        console.log("##teamcity[testMetadata testName='package_or_namespace2.ClassName2.TestName-c' name='some key' value='a text' flowId='SubFlow1-c']");
        console.log("##teamcity[testMetadata testName='package_or_namespace2.ClassName2.TestName-c' name='JetBrainsLink' type='link' value='https://jetbrains.com' flowId='SubFlow1-c']");
        console.log("##teamcity[testMetadata testName='package_or_namespace2.ClassName2.TestName-c' type='artifact' value='images/castle.gif' flowId='SubFlow1-c']");

        console.log("##teamcity[testFailed name='package_or_namespace2.ClassName2.TestName-c' type='comparisonFailure' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...' expected='expected value' actual='actual value' flowId='SubFlow1-c']");
      console.log("##teamcity[testFinished name='package_or_namespace2.ClassName2.TestName-c' flowId='SubFlow1-c']");
      //test finish package_or_namespace.ClassName.TestName
      console.log("##teamcity[flowFinished flowId='SubFlow1-c']");

      // console.log("##teamcity[flowStarted flowId='SubFlow1-a' parent='MainFlow']");
      // // teststart package_or_namespace.ClassName.TestName-a
      // console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName-a' flowId='SubFlow1-a']");
      //
      // console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='setUp time' type='number' value='434.5' flowId='SubFlow1-a']");
      // console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='some key' value='a text' flowId='SubFlow1-a']");
      // console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' name='JetBrainsLink' type='link' value='https://jetbrains.com' flowId='SubFlow1-a']");
      // console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName-a' type='artifact' value='images/castle.gif' flowId='SubFlow1-a']");
      //
      // console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName-a' type='comparisonFailure' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...' expected='expected value' actual='actual value' flowId='SubFlow1-a']");
      // console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName-a' flowId='SubFlow1-a']");
      // // test finish package_or_namespace.ClassName.TestName-a
      // console.log("##teamcity[flowFinished flowId='SubFlow1-a']");

      console.log("##teamcity[testSuiteFinished name='nestedSuiteName' flowId='MainFlow']");
    console.log("##teamcity[flowFinished flowId='SubFlow1']");


      /*console.log("##teamcity[testSuiteStarted name='nestedSuiteName2' flowStarted flowId='SubFlow2' parent='MainFlow']");
        console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName' captureStandardOutput='true' flowId='SubFlow2']");
          console.log("Captured STDOUT");

          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='setUp time' type='number' value='434.5' flowId='SubFlow2']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='some key' value='a text' flowId='SubFlow2']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName.TestName' name='JetBrains' type='link' value='https://jetbrains.com' flowId='SubFlow2']");

          console.log("##teamcity[testFailed name='package_or_namespace.ClassName.TestName' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...' flowId='SubFlow2']");
        console.log("##teamcity[testFinished name='package_or_namespace.ClassName.TestName' flowFinished flowId='SubFlow2' flowId='SubFlow2']");
      console.log("##teamcity[testSuiteFinished name='nestedSuiteName2' flowFinished flowId='SubFlow2']");

      console.log("##teamcity[testSuiteStarted name='nestedSuiteName3']");
        console.log("##teamcity[testStarted name='package_or_namespace.ClassName.TestName' flowStarted flowId='SubFlow3' parent='MainFlow']");

          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='setUp time' type='number' value='434.5']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='some key' value='a text']");
          console.log("##teamcity[testMetadata testName='package_or_namespace.ClassName3.TestName' name='JetBrains' type='link' value='https://jetbrains.com']");

          console.log("##teamcity[testFailed name='package_or_namespace.ClassName3.TestName' message='The number must be 20000' details='junit.framework.AssertionFailedError: expected:<20000> but was:<10000>|n|r    at junit.framework.Assert.fail(Assert.java:47)|n|r    at junit.framework.Assert.failNotEquals(Assert.java:280)|n|r...']");
        console.log("##teamcity[testFinished name='package_or_namespace.ClassName3.TestName' flowFinished flowId='SubFlow3']");
      console.log("##teamcity[testSuiteFinished name='nestedSuiteName3']");*/

    console.log("##teamcity[testSuiteFinished name='suiteName' flowId='MainFlow']");
    expect(true).toEqual(false);
  });
})
