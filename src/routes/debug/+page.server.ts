import type { PageServerLoad } from './$types';

export const load = (async () => {
  const message = 'hello debugger';
  // eslint-disable-next-line no-debugger
  debugger;
  return { message };
}) satisfies PageServerLoad;
