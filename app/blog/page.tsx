import Link from "next/link";
export default function Blog() {
    return (
      <main>
            <h1 style={{ textAlign: 'center' }}>Blog</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <h2><Link href='/blog/post-1'>Blog 1</Link></h2>
              <h2><Link href='/blog/post-2w'>Blog 2</Link></h2>
            </div>
      </main>
    );
}