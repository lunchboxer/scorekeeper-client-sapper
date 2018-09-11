# scorekeeper-client

Built with the default [Sapper](https://github.com/sveltejs/sapper) template. So look there and to the [Sapper docs](https://sapper.svelte.technology/guide) to understand the structure and function. To get it running:

```bash
npm install # or yarn!
cp -r node_modules/typeface-roboto assets # we're serving it locally
npm run dev
```

To do anything interesting the app needs a feathersjs scorekeeper server running.

In addition, because Sapper uses server-side rendering, this app uses cookies for storing the authentication token instead of local storage.
