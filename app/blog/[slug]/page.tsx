type props = {
  slug: string,
}

export default function BlogPost({params}: {params: props}) {
    return (
      <main>
             <h1 style={{ textAlign: 'center' }}>Blog {params.slug}</h1>
      </main>
    );
}