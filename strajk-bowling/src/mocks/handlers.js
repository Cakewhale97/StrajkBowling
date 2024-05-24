import { http, HttpResponse } from "msw";

export const handlers = [
  http.post(
    "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
    (req, res) => {
      return res(
        HttpResponse.json({
          active: true,
          when: "2024-06-12T18:00",
          lanes: 1,
          people: 4,
          id: "ABC123",
          price: 580,
        })
      );
    }),
];
