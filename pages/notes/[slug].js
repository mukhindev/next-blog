import matter from 'gray-matter';
import Markdown from '../../components/Markdown'
import { getContent } from '../../store/content'
import Layout from '../../components/Layout'

function NoteTemplate(props) {
  const { slug, meta, content } = props;

  return (
    <Layout>
      <article className="note">
        /notes/{slug}
        <h1>{meta.title}</h1>
        <time>{meta.date}</time>
        <Markdown>{content}</Markdown>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { files } = getContent()
  const paths = files.map((file) => {
    return { params: { slug: file.replace('.md', '') }}
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // Забираем идентификатор из строки адреса
  const { slug } = context.params;
  // Импортируем соответствующий документ (raw-loader)
  const md = await import(`../../content/${slug}.md`);
  // 'gray-matter' распознает метаданные в .md и отделит их от контента
  const { data, content } = JSON.parse(JSON.stringify(matter(md.default)));
  return {
    props: { meta: data, content, slug }
  }
}

export default NoteTemplate;
