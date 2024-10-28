import React from 'react'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { activeJson } from '../api';
import ErrorPage from '../Error';
import ListItem, { IListItem } from '../components/ListItem';

const Active = () => {

    const { data, error, isFetching } = useQuery({
        queryKey: ['active-posts'], queryFn: () => activeJson()
    })


    if (isFetching) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (error) {
        return <ErrorPage />
    }


    return (
        <div>
             {
                data && data?.data.map((each: IListItem, index: any) => <div key={index}><ListItem  {...each}></ListItem> </div>)
            }
        </div>
    )
}

export default Active
