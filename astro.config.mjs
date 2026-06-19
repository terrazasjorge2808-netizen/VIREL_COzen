import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/static';

export default defineConfig({
  site: 'https://terrazasjorge2808-internauta.github.io/VIREL_COzen',
  base: '/VIREL_COzen',
  adapter: staticAdapter(),
});
