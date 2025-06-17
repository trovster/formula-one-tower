import { defineCollection, z } from 'astro:content';

import drivers from './data/drivers.json';
import compounds from './data/compounds.json';

const slug = (text: string) => text
  .toLowerCase()
  .replace(/^\s+|\s+$/g, '') // trim
  .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by -
  .replace(/-+/g, '-') // collapse dashes;

const driverCollection = defineCollection({
  loader: async () => {
    return drivers.map((item) => ({
      id: item.full_name,
      slug: slug(item.full_name),
      ...item,
    }));
  },
  schema: z.object({
    slug: z.string(),
    driver_number: z.number(),
    broadcast_name: z.string(),
    full_name: z.string(),
    name_acronym: z.string(),
    team_name: z.string(),
    team_colour: z.string(),
  })
});

const manufacturerCollection = defineCollection({
  loader: async () => {
    const manufacturers = drivers.map((item) => ({
      id: item.team_name,
      slug: slug(item.team_name),
      name: item.team_name,
    }));

    return [...new Map(manufacturers.map(item => [item['slug'], item])).values()];
  },
  schema: z.object({
    name: z.string(),
    slug: z.string(),
  })
});

const compoundCollection = defineCollection({
  loader: async () => {
    return compounds.map((item) => ({
      id: item.name,
      slug: slug(item.name),
      letter: item.name.substring(0, 1),
      ...item,
    }));
  },
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    letter: z.string(),
  })
});

export const collections = {
  drivers: driverCollection,
  manufacturers: manufacturerCollection,
  compounds: compoundCollection,
};
