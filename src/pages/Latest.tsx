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
        <div>
            <Helmet>
                <title>Latest News</title>
            </Helmet>

            {
                data && data?.data.map((each: IListItem, index: any) => <ListItem  {...each} key={index}></ListItem>)
            }
        </div>
    )
}

export default Latest
