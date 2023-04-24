import User from "@/component/user"

export default function UserList({ user }){
  return (
    <div>
      <h1>list of user</h1>
      <ul>
        {user.map((each) => {
          return <User key={each.id} user={each} />
        })}
      </ul>
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return { props: {user: data} }
}