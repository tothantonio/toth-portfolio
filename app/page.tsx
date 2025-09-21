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
      <div className="mb-4">
        <p>
          {`I'm a passionate engineering student, committed to continuous learning, upgrading technical and soft skills, and exploring new technologies.
          I thrive on solving complex problems and creating innovative solutions. Currently studying Computer Science at TUCN.  
          Let's build something amazing together!😊🚀
          `}
        </p>
      </div>
      <div className="mb-4">
        If you want to know me better, check out{' '}
        <a href="https://toth-portfolio-afxb.vercel.app/work" className="underline dark:text-neutral-100">
          my work
        </a>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}