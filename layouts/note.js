import Header from '../components/Header';

function LayoutNote(props) {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
    </>
  );
}

export default LayoutNote;
