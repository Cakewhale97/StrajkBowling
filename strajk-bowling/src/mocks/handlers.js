import { http } from 'msw';

export const handlers = [
    http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', (req, res, ctx) => {
        return res(ctx.json({ bookingNumber: 'ABC123', totalCost: 580 }));
    })
];