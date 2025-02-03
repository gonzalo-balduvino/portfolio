import Link from 'next/link'

export default function Page() {
  return <div className="flex justify-center items-center flex-col">
    <b>Gonzalo Balduvino</b>
    <Link href={`/contact`}>This is a link to contact page</Link>
  </div>
}
