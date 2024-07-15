import { WorkPosts } from 'app/work/components/post'

export const metadata = {
    title: 'Work',
    description: 'Watch my work.',
  }

  export default function Page() {
    return (
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My work</h1>
        <WorkPosts />
      </section>
    )
  }