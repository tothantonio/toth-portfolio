import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="animate-fade-in">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-slide-up">
        Toth Antonio
      </h1>
      <h3 className="mb-8 text-2xl font-semibold tracking-tighter animate-slide-up animate-delay-100">
        Software engineer. Growing ideas, building futures🌱✨
      </h3>
      <div className="mb-4 animate-slide-up animate-delay-200">
        <p>
          {`I'm a passionate engineering student, committed to continuous learning, upgrading technical and soft skills, and exploring new technologies.
          I thrive on solving complex problems and creating innovative solutions. Currently studying Computer Science at TUCN.  
          Let's build something amazing together!😊🚀
          `}
        </p>
      </div>
      <div className="mb-4 animate-slide-up animate-delay-300">
        If you want to know me better, check out{' '}
        <a href="https://toth-portfolio-afxb.vercel.app/work" className="underline dark:text-neutral-100 transition-all hover:opacity-70">
          my work
        </a>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}