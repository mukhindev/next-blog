import matter from 'gray-matter';
import Markdown from '../../components/Markdown'
import LayoutNote from '../../layouts/note'

function NoteTemplate(props) {
  const { slug, meta, content, tags } = props;

  return (
    <LayoutNote tags={tags}>
      <article className="note">
        /notes/{slug}
        <h1>{meta.title}</h1>
        <time>{meta.date}</time>
        <Markdown>{content}</Markdown>
      </article>
    </LayoutNote>
  );
}

export async function getStaticPaths() {
  const { files } = await import(`../../data/context.json`);
  const paths = files.map((file) => {
    return { params: { slug: file.replace('.md', '') }}
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const md = await import(`../../content/${slug}.md`);
  const { data, content } = JSON.parse(JSON.stringify(matter(md.default)));
  if ('tags' in data) {
    data.tags = data.tags.map((tag) => tag.toLowerCase())
  }
  return {
    props: { meta: data, content, slug }
  }
}

export default NoteTemplate;
