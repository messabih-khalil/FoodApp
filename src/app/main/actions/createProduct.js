'use server';
import { client } from '@/utils/db.connection';
import { revalidatePath } from 'next/cache';
export const addProduct = async (data) => {
    try {
        await client.connect();
        const database = client.db('foodapp-db');
        const collection = database.collection('products');
        await collection.insertOne({ ...data });
        revalidatePath('/main');
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
