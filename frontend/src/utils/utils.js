export function sortPostsByVoteScore(posts, order) {
  if (order === 'asc')
    return posts.sort((a,b) => (a.voteScore - b.voteScore))
  else
    return  posts.sort((a,b) => (b.voteScore - a.voteScore))
}

export function sortPostsByTimestamp(posts, order) {
  if (order === 'asc')
    return posts.sort((a,b) => (a.timestamp - b.timestamp))
  else
    return  posts.sort((a,b) => (b.timestamp - a.timestamp))
}