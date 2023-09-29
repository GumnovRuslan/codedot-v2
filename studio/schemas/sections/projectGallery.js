export default {
  name: 'ProjectGallery',
  type: 'document',
  title: 'ProjectGallery',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'projectImages',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'projectImage',
          type: 'image',
          title: 'Image',
        },
      ],
    },
  ],
}
