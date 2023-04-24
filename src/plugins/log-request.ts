export default {
  async requestDidStart(requestContext) {
    console.log(requestContext.request);
    return;
  },
};
