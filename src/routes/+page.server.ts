import type { PageServerLoad } from './$types';

export const load = (async () => {
  const message = 'hello debugger';
  return { message };
}) satisfies PageServerLoad;
