import { Button, Card, CardBody, CardFooter, CardHeader } from '@trussworks/react-uswds'
import React from 'react'
import { PostProps } from '../../utils/Types'
import dayjs from 'dayjs'

function Post({postData}: PostProps) {
    return (
        <Card
            headerFirst
            gridLayout={{tablet:{col:12}}}
        >
            <CardHeader>
                <h3 className='usa-card__heading'>{postData?._id}</h3>
                <h4 className='usa-card__heading'>{postData?.email}</h4>
            </CardHeader>
            <CardBody>
                <p>{postData?.content}</p>
            </CardBody>
            <CardFooter>
                <p>Likes: {postData?.likes}</p>
                <p>{dayjs(postData?.timestamp).format('YYYY-MM-DD HH:mm:ss')}</p>
                <Button type='button'>Reply</Button>
            </CardFooter>
        </Card>
        
    )
}

export default Post