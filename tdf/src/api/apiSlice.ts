import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getCollection } from "@/services/apiService";

interface ApiState { collections: Record<string, unknown[]>; }

const initialState: ApiState = {

    collections: {}

};

export const fetchCollection = createAsyncThunk(

    "api/fetchCollection",

    async (collection: string) => {

        const data = await getCollection(collection);

        return {

            collection,
            data

        };

    }

);

const apiSlice = createSlice({

    name: "api",

    initialState,

    reducers: {},

    extraReducers: builder => {

        builder.addCase(
            fetchCollection.fulfilled,
            (state, action) => {

                const {
                    collection,
                    data
                } = action.payload;


                let items = data[collection] ?? [];


                const uniqueByName = [
                    "villages",
                    "clans"
                ];


                const uniqueById = [
                    "characters",
                    "akatsuki",
                    "tailed-beasts"
                ];


                if (uniqueByName.includes(collection)) {

                    items = items.filter(
                        (item:any, index:number, self:any[]) =>

                            index === self.findIndex(
                                element =>
                                    element.name === item.name
                            )
                    );

                }


                if (uniqueById.includes(collection)) {

                    items = items.filter(
                        (item:any, index:number, self:any[]) =>

                            index === self.findIndex(
                                element =>
                                    element.id === item.id
                            )
                    );

                }

                state.collections[collection] = items;

            }
        );

    }

});

export default apiSlice.reducer;