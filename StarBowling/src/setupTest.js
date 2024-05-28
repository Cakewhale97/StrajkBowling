// src/setupTest.js
import { Response, Request, Headers, fetch } from 'node-fetch';
import '@testing-library/jest-dom';

global.Response = Response;
global.Request = Request;
global.Headers = Headers;
global.fetch = fetch;