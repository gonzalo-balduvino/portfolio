import Link from 'next/link'

export default function Page() {
  return <div>
    <b>This is the home page</b>
    <Link href={`/contact`}>This is a link to contact page</Link>
  </div>
}
