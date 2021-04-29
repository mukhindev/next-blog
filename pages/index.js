function Main(props) {
  const { blogTitle } = props;
  return (
    <h1>
      Добро пожаловать на главную страницу! {blogTitle}
    </h1>
  );
}

export async function getStaticProps() {
  return {
    props: { blogTitle: 'Mukhin\'s notes' },
  };
}

export default Main;
