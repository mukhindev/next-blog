import Link from 'next/link';

function Tags(props) {
  const { tags = {} } = props;
  const tagArray = Object.entries(tags);

  if (tagArray.length > 0) {
    return (
      <ul className="tag-list">
        {tagArray.map(([tag, slug]) => (
          <li
            className="tag-list__item"
            key={slug}
          >
            <Link href={`/tags/${slug}`}>
              <a className="tag-list__link">{tag}</a>
            </Link>
          </li>
        ))}
        <style jsx>
          {`
            .tag-list {
              display: flex;
              flex-wrap: wrap;
              margin: 0;
              padding: 0;
              list-style: none;
            }

            .tag-list__item {
              margin: 4px 8px 4px 0;
            }

            .tag-list__link {
              padding: 3px 6px;
              font-size: 12px;
              border: 1px solid var(--color-text-a);
              border-radius: 4px;
              color: var(--color-text-a);
              text-decoration: none;
              transition: 0.15s
            }

            .tag-list__link:hover {
              background-color: var(--color-text-a);
              color: var(--color-background);
            }

            @media screen and (min-width: 678px) {
              .tag-list__link {
                font-size: inherit;
              }
            }
          `}
        </style>
      </ul>
    );
  }
  return null;
}

export default Tags;
