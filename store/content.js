import fs from 'fs';
import matter from 'gray-matter';
import slug from 'slug';

const markdownRegex = /.md$/;

const files = fs.readdirSync('./content')
  .filter((file) => markdownRegex.test(file));

const contentMeta = files.reduce((acc, file) => {
  const raw = fs.readFileSync(`./content/${file}`, 'utf8');
  const { data } = matter(raw);
  const name = file.replace('.md', '');
  data.name = name;
  data.path = `/${data.category}/${name}`;
  acc.push(data);
  return acc;
}, []);

const ctxTemplate = {
  pages: {},
  tags: {},
  files,
};

const ctx = contentMeta.reduce((acc, meta) => {
  if ('tags' in meta) {
    meta.tags.forEach((tag) => {
      acc.tags[tag.toLowerCase()] = slug(tag);
    });
  }
  if ('category' in meta) {
    if (meta.category in acc.pages) {
      acc.pages[meta.category].push(meta);
    } else {
      acc.pages[meta.category] = [];
      acc.pages[meta.category].push(meta);
    }
  }
  return acc;
}, ctxTemplate);

export function getContent() {
  return ctx;
}
