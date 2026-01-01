import { supabase } from '../lib/supabase';

export default function Home({ posts }: { posts: any[] }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bharat Bios</h1>
      <p>Published biographies and news posts:</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <span>{post.summary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fetch data from Supabase at request time
export async function getServerSideProps() {
  const { data } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published');

  return { props: { posts: data ?? [] } };
}
