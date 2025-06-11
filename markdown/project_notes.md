# Project Notes

## Overview
- Blog containing a few of my software projects
- Learn webdevelopement, icluding javascript and interactive components (webgames)

## Requirements
- Flask, Markdown

## Architecture

/my_blog_project
├── /static
│   ├── /css
│   │   └── style.css             # Stylesheets for the blog
│   └── /js
│       ├── game.js               # Global game logic (e.g., Tic-Tac-Toe)
│       ├── main.js               # Other JavaScript functionality
│       └── post1-game.js         # Specific script for a post (optional)
├── /templates
│   ├── base.html                # Base template (common layout for all pages)
│   └── post.html                # Template for individual posts
├── /posts
│   └── post1.md                 # Markdown file for Post 1 content
├── app.py                       # Python backend (Flask or similar)
└── config.py                    # Configuration for your app (if needed)


## Development Setup
- Run by running `app.py`

## Testing
- Testing strategy
- Learn how to write tests in python, the run these.
- The rest will not be tested

## Deployment
- Code and fix

## References
- Links to relevant documentation
- Additional resources