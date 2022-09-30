import React, { Component } from 'react'
import { Feed } from './Feed'

export class InstaMain extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        data: [
            {
              userName: "Sadhna",
              id: 0,
              msg: "Welcome to Dubai",
              imgUrl:
                "https://media.istockphoto.com/photos/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-picture-id1266923176?k=20&m=1266923176&s=612x612&w=0&h=8JPKK6tQW6X8e7v6MBbJI2MMeOmnRQi5N0yDn-WhyOg=",
            },
            {
              userName: "Mahi",
              id: 1,
              msg: "Welcome to India",
              imgUrl:
                "https://thumbs.dreamstime.com/z/welcome-to-india-sing-wood-background-76229039.jpg",
            },
            {
              userName: "Sadhna",
              id: 0,
              msg: "Welcome to Dubai",
              imgUrl:
                "https://media.istockphoto.com/photos/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-picture-id1266923176?k=20&m=1266923176&s=612x612&w=0&h=8JPKK6tQW6X8e7v6MBbJI2MMeOmnRQi5N0yDn-WhyOg=",
            },
            {
              userName: "Mahi",
              id: 1,
              msg: "Welcome to India",
              imgUrl:
                "https://thumbs.dreamstime.com/z/welcome-to-india-sing-wood-background-76229039.jpg",
            },
            {
              userName: "Sadhna",
              id: 0,
              msg: "Welcome to Dubai",
              imgUrl:
                "https://media.istockphoto.com/photos/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-picture-id1266923176?k=20&m=1266923176&s=612x612&w=0&h=8JPKK6tQW6X8e7v6MBbJI2MMeOmnRQi5N0yDn-WhyOg=",
            },
            {
              userName: "Mahi",
              id: 1,
              msg: "Welcome to India",
              imgUrl:
                "https://thumbs.dreamstime.com/z/welcome-to-india-sing-wood-background-76229039.jpg",
            },
          ],
      }
    }
  render() {
    return(
      <div className='container'>
        {this.state.data.map((feed) => <Feed feed = {feed} />)}
      </div>
    ) 
  }
}
