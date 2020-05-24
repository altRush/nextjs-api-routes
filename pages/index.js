import useSwr from 'swr'
import Link from 'next/link'
import axios from 'axios'

const fetcher = url => axios(url).then(res => res.data)

export default function Index() {
  const { data, error } = useSwr('/api/posts', fetcher)

  if (error) return <div>Failed to load posts</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>
          <Link href="/user/[id]" as={`/user/${post.id}`}>
            <a>{`Post ${post.id} : ${post.content}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
