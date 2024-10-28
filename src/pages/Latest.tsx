import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { latestJson } from '../api';
import ListItem, { IListItem } from '../components/ListItem';
import ErrorPage from '../Error';

export interface Resp {
    data: Array<IListItem>
}

const Latest = () => {


    const { data, error, isFetching } = useQuery({
        queryKey: ['latest-posts'], queryFn: (): any => latestJson()
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

export default Latest
