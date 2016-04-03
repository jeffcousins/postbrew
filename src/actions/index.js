export function showThread (activePost) {
  console.log('SHOW_THREAD action fired', activePost);
  return {
    type: 'SHOW_THREAD',
    activePost
  };
}
