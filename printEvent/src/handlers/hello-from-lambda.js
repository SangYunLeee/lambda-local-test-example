exports.helloFromLambdaHandler = async (event) => {
    console.log(`event : ${event}`);
    return event;
}
