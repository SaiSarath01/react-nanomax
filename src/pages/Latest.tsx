import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { latestJson } from '../api';
import ListItem, { IListItem } from '../components/ListItem';
import ErrorPage from '../Error';
import { Helmet } from 'react-helmet';

export interface Resp {
    data: Array<IListItem>
}

const Latest = () => {


    const { data, error, isFetching } = useQuery({
        queryKey: ['latest-posts'], queryFn: (): any => latestJson()
    })



    if (error) {
        return <ErrorPage />
    }



    return (

        <>
            <Helmet>
                <title>Latest News</title>
            </Helmet>
            <ol className='stories list'>

                {
                    data && data?.data.map((each: any, index: any) => <ListItem  {...each} key={index}></ListItem>)
                }
            </ol>
        </>
    )
}

export default Latest
