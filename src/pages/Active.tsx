import React from 'react'
import {
    useQuery,
    useQueryClient,
} from '@tanstack/react-query'
import { activeJson } from '../api';
import ErrorPage from '../Error';
import ListItem, { IListItem } from '../components/ListItem';
import { Helmet } from "react-helmet";

const Active = () => {

    const { data, error, isFetching } = useQuery({
        queryKey: ['active-posts'], queryFn: () => activeJson()
    })

    if (error) {
        return <ErrorPage />
    }


    return (
        <>
            <Helmet>
                <title>Active News</title>
            </Helmet>
            <ol className='stories list'>

                {
                    data && data?.data.map((each: any, index: any) => <ListItem  {...each} key={index}></ListItem>)
                }
            </ol>
        </>
    )
}

export default Active
