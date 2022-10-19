import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'nkj7f7at', // get from cli cmd 'sanity manage'
    dataset: 'production', // get from 'sanity manage'-> dataset folder 
    apiVersion: '2022-10-15', // Date of developing project
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);