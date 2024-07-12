import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Toth Antonio
      </h1>
      <p className="mb-4">
        {`I'm a passionate engineering student with a keen interest in web and mobile development. 
I thrive on solving complex problems and creating innovative solutions. Currently studying 
Computer Science at TUCN.  
Let's build something amazing together!😊🚀
`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
