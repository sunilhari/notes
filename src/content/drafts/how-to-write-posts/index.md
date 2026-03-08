---
title: How to Write Posts on This Blog
description: A quick reference for creating new notes — frontmatter fields, file structure, and tagging.
date: 2026-03-08
tags:
  - Meta
  - Reference
---

This post is a reference for creating new notes. Keep it or delete it once you're comfortable.

## File structure

Each post lives in its own folder inside `src/content/blog/` or `src/content/drafts/`:

```
src/content/
  blog/
    my-post/
      index.md          → /blog/my-post/
      diagram.png       ← assets live alongside the post
    another-post/
      index.md          → /blog/another-post/

  drafts/
    work-in-progress/
      index.md          → visible only in dev (npm run dev)
      notes.md          ← scratch notes, not loaded by Astro
```

- **`blog/`** — published posts, visible in production
- **`drafts/`** — work in progress, visible only when running locally (`npm run dev`)

## Frontmatter

Every post starts with a YAML frontmatter block:

```yaml
---
title: Your Post Title
description: A short summary shown in listings and search results.
date: 2026-03-08
tags:
  - JavaScript
  - Learning
---
```

| Field         | Required | Notes                                             |
| ------------- | -------- | ------------------------------------------------- |
| `title`       | Yes      | Displayed as the H1 heading                       |
| `description` | Yes      | Shown in listings and meta tags                   |
| `date`        | Yes      | Format: `YYYY-MM-DD`                              |
| `tags`        | No       | Any strings — tag pages are created automatically |
| `lastUpdated` | No       | Date this was last revised                        |

## Tags

Tags are completely free-form. Any string you put in `tags:` automatically:

1. Creates a tag page at `/tags/your-tag/`
2. Links the post from that page
3. Appears on the [Tags index](/tags/)

**Grouping by topic:** use consistent tag names. For example:

- `Python`, `JavaScript`, `Rust` for languages
- `Algorithms`, `Machine Learning` for subjects
- `Book Notes`, `Course Notes` for sources

## Writing markdown

All standard Markdown works:

```markdown
# H1 heading

## H2 heading

**bold**, _italic_, `inline code`

- list item
- another item

> blockquote

[link text](https://example.com)

![alt text](image.png)
```

Code blocks with syntax highlighting:

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```
