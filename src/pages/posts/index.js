import Link from "next/link"

export default function PostList({posts}){
  return (
    <div>
      <h1>Lists of Posts</h1>
      {
        posts.map((each) => {
          return <div key={each.id}>
                  <Link href={`posts/${each.id}`} passHref>
                    <h2>{each.id}: {each.title}</h2>
                  </Link>
                  
                </div>
        })
      }
    </div>
  )
}



export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      posts: data.slice(0, 3)
    }
  }
}  