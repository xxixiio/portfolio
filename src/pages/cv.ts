import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://drive.google.com/file/d/16KYeciPzyNFK_a8nb1QTswqGtmu_SfdE/view', 307);
}