import { getData } from '../../lib/data';
export function GET() {
  return new Response(JSON.stringify(getData().claims, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
