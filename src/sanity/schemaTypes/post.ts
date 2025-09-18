import { title } from "process";
import { validation } from "sanity";

export const Products = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(1).max(30)
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
                alt: 'Product Image',
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: any) => Rule.required().min(10).max(100),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(1).max(10000),
        },
        {
            name: 'rating',
            title   : 'Rating',
            type: 'number',
            validation: (Rule: any) => Rule.min(1).max(5),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Electronics', value: 'electronics'},
                    {title: 'Audio', value: 'audio'},
                    {title: 'Home & Living', value: 'home & living'},
                    {title: 'Fashion', value: 'fashion'},
                    {title: 'Sports && Fitness', value: 'sports && Fitness'},
                    {title: 'Travel', value: 'travel'},

                ]
            }
        }
    ]
}