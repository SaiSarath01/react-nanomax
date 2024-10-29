import React from 'react'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { activeJson } from '../api';
import ErrorPage from '../Error';
import ListItem, { IListItem } from '../components/ListItem';
import {Helmet} from "react-helmet";

const Active = () => {

    const { data, error, isFetching } = useQuery({
        queryKey: ['active-posts'], queryFn: () => activeJson()
    })


    if (isFetching) {
        return (
            <div id='spinner'>
            </div>
        )
    }

    if (error) {
        return <ErrorPage />
    }


    return (
        <div className='item'>
            <Helmet>
                <title>Active News</title>
            </Helmet>
             {
                data && data?.data.map((each: IListItem, index: any) => <ListItem  {...each} key={index}></ListItem>)
            }
        </div>
    )
}

export default Active
