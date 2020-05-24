// Fake users data
const posts = [
  { id: 1, content: 'Post 1' },
  { id: 2, content: 'Post 2' },
  { id: 3, content: 'Post 3' }
]

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(posts)
}
