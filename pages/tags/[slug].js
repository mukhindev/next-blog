import LayoutNote from '../../layouts/note';

function TagTemplate(props) {
  const { slug } = props;

  return (
    <LayoutNote>
      <article className="note">
        /notes/{slug}
      </article>
    </LayoutNote>
  );
}

export async function getStaticPaths() {
  const { tags } = await import(`../../data/context.json`);
  const paths = Object.entries(tags).map(([tag, slug]) => {
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  return {
    props: { slug },
  };
}

export default TagTemplate;
