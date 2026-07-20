import { API_URL, CLIENT_ID } from "./api";

export async function getCollection(collection: string) {
    const response = await fetch(`${API_URL}/${collection}`, {
        headers: {
            "x-client-id": CLIENT_ID
        }
    });

    if (!response.ok) {
        throw new Error("Error al consultar la API");
    }

    return response.json();
}
