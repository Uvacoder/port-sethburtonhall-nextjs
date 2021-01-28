export default function MadeWith() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="mb-2 md:mb-0 md:mr-1">
        <a
          href="https://github.com/sethburtonhall/home-v2"
          target="_blank"
          className="pt-1 mr-1 social-svg"
        >
          v2.0
        </a>
        made with
      </div>
      <div>
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="px-2 pt-1 pb-1 bg-black rounded"
        >
          Next.js
        </a>{' '}
        &
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="px-2 pt-1 pb-1 ml-1 rounded bg-cyan-600"
        >
          TailwindCSS
        </a>
      </div>
    </div>
  )
}
