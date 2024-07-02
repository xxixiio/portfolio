import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://drive.google.com/file/d/1w3WZZYxIKSlDw90xxMhLUEwvVm7xf5IB/view', 307);
}