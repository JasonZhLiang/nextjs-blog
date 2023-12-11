import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        // note that matterResult.content is the markdown content of the post, 
        // matterResult.data is the metadata of the post
        // { title: 'Two Forms of Pre-rendering', date: '2020-01-01' }
        // console.log(matterResult.data);
        // console.log(matterResult); //will be like this
        // {
        //     content: '\n' +
        //       'Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.\n' +
        //       '\n' +
        //       '- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.\n' +
        //       '- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.\n' +
        //       '\n' +
        //       'Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.',
        //     data: { title: 'Two Forms of Pre-rendering', date: '2020-01-01' },
        //     isEmpty: false,
        //     excerpt: ''
        //   }


        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date in descending order
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });


    // // Instead of the file system,
    // // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // return res.json();

    // // Instead of the file system,
    // // fetch post data from a database
    // return databaseClient.query('SELECT posts...')
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });

    // // Instead of the file system,
    // // fetch post data from an external API endpoint
    // const res = await fetch('..');
    // const posts = await res.json();
    // return posts.map((post) => {
    //     return {
    //         params: {
    //             id: post.id,
    //         },
    //     };
    // });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}