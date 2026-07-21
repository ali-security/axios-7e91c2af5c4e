
describe('FormData', function() {
  // Seal: excluded — depends on the external third-party service httpbin.org,
  // which is unreachable from CI (browser XHR raises "Network Error"). Not
  // related to the packaged artifact.
  xit('should allow FormData posting', function () {
    return axios.postForm('http://httpbin.org/post', {
      a: 'foo',
      b: 'bar'
    }).then(({data}) => {
      expect(data.form).toEqual({
        a: 'foo',
        b: 'bar'
      });
    });
  });
})
