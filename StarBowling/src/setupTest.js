// src/setupTest.js
import { Response, Request, Headers } from 'node-fetch';
import fetch from "node-fetch";
import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from 'expect';
console.log('expect', expect); 

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;

expect.extend(matchers);

afterEach(() => {
  cleanup();
});