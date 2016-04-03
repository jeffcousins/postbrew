export function showThread (post) {
  console.log('SHOW_THREAD action fired', post);
  return {
    type: 'SHOW_THREAD',
    post
  };
}
