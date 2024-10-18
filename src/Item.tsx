import Carousel from 'react-bootstrap/Carousel';

type ItemProps = {
  name: string,
  description: string,
  image: string
}

type bannerProps = {
  item:ItemProps 
}

export const Item = (props: bannerProps) => {
  return (

    <Carousel.Item>
      <img  src={props.item.image} style={{width:"100%", height:"100vh"}}/>
      <Carousel.Caption>
        <h3>{props.item.name}</h3>
        <p>{props.item.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

 
