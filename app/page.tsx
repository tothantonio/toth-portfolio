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
        {`I'm a passionate engineering student, committed to continuous learning, upgrading technical and soft skills, and exploring new technologies.
      I thrive on solving complex problems and creating innovative solutions. Currently studying 
      Computer Science at TUCN.  
      Let's build something amazing together!😊🚀
      `}
      </p>
      <span className="mb-4">
          {'If you want to know me better, check out '}
          <a href="https://www.atoth.me/work" className="mb-4 underline dark:text-neutral-100 underline">my work</a>
      </span>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
