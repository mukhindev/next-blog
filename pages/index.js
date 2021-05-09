import Link from 'next/link';
import NoteTemplate from '../layouts/note';
import Tags from '../components/Tags';

function filterObjectByList(obj, arr) {
  const result = arr.reduce((acc, item) => {
    acc[item] = obj[item];
    return acc;
  }, {});
  return result;
}

function Index(props) {
  const {
    blogTitle,
    tags,
    notes,
  } = props;

  return (
    <NoteTemplate>
      <h1>
        Добро пожаловать на главную страницу! {blogTitle}
      </h1>
      <section>
        <h2>Теги</h2>
        <Tags tags={tags} />
      </section>
      <section>
        <h2>Документы</h2>
        <ul>
          {notes.map(({ title, path, tags: noteTags }) => (
            <li key={path}>
              <Link href={path}>
                <a>{title}</a>
              </Link>
              <Tags tags={filterObjectByList(tags, noteTags)} />
            </li>
          ))}
        </ul>
      </section>
    </NoteTemplate>
  );
}

export async function getStaticProps() {
  const { tags, pages } = await import('../data/context.json');
  return {
    props: {
      blogTitle: 'Mukhin\'s notes',
      tags,
      notes: pages.notes,
    },
  };
}

export default Index;
