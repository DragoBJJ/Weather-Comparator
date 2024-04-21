import { http } from 'msw';
export const weatherHandlers = [http.post('YOUR_API', ({ request }) => {})];
