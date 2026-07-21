import api from "./api";

export async function getCollection<T>(collection: string): Promise<T> {

    const response = await api.get<T>(`/${collection}`);
    return response.data;

}