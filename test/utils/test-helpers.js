export const sinon = require('sinon');
const chai = require('chai');
export const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);

export function stubFor() {
  // Returns an object like {arg0: sinon.stub(), ...argN: sinon.stub()} for the given args
  return Array.from(arguments).reduce((result, arg) => {
    result[arg] = sinon.stub();
    return result;
  }, {});
}

export function resolvedPromise(promiseResult) {
  const responseStub = sinon.stub();
  return responseStub.returnsPromise().resolves(promiseResult);
}

export function resolvedStub(methodName, promiseResult) {
  // Returns the methodName method stubbed to return a synchronous resolved promise with value promiseResult
  const result = stubFor(methodName);
  result[methodName].returnsPromise().resolves(promiseResult);
  return result;
}

export function rejectedStub(methodName, promiseResult) {
  // Returns the methodName method stubbed to return a synchronous rejected promise with value promiseResult
  const result = stubFor(methodName);
  result[methodName].returnsPromise().rejects(promiseResult);
  return result;
}
