import React from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap'

const CardExample=({item})=> {

  const width = window.innerWidth
  const height =  window.innerHeight

    return (
        <Card
  style={{
    width: width/4,
  }}
>
  <img
    alt=''
    src={item.image}
    height={'50%'}
    width={'100%'}
  />
  <CardBody>
    <CardTitle tag="h5">
      {item.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {item.team}
    </CardSubtitle>
    <CardText>
      {item.country}
    </CardText>
  </CardBody>
</Card>
    )
}

export default CardExample
