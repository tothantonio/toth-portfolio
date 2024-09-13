import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Toth Antonio
      </h1>
      <h3 className="mb-8 text-2xl font-semibold tracking-tighter">
        Software engineer. Growing ideas, building futures🌱✨
      </h3>
      <p className="mb-4">
        {`I'm a passionate engineering student with a keen interest in web and mobile development. 
      I thrive on solving complex problems and creating innovative solutions. Check out `}
        <a href="https://www.atoth.me/work" className="text-neutral-800 underline">my work</a>
        {` if you want to know me better. Currently studying 
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
