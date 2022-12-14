import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import CarouselCard from "./CarouselCard";
import CarouselModal from "./CarouselModal";
import Comparison from "./Comparison";
import Badge from 'react-bootstrap/Badge';

function Benchmark() {
  return (
    <div>
      <h1 style={{paddingTop: "5rem"}}>
        Previous Consumption
      </h1>
      {/*  Carousel from Jan - March*/}
      {/* Styled to center the page */}
      {/* Contents of CarouselCard include Title, Desc, Image and label to highlight season*/}
    <Carousel variant="dark" style={{padding: "3rem" , paddingBottom: "5rem"}} >
      <Carousel.Item>
        <div style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
          <CarouselCard 
                  title="January"
                  description="Energy Usage" 
                  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Polynomial_of_degree_three.svg/240px-Polynomial_of_degree_three.svg.png" 
                  winterBadge="Winter">
          </CarouselCard>
          <CarouselCard 
            title="February" 
            description="Energy Usage" 
            imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" 
            winterBadge="Winter"/>
          <CarouselCard 
          title="March" 
          description="Energy Usage" 
          imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          springBadge="Spring" />
        </div>
  
      </Carousel.Item>

      {/*  Carousel from April - June*/}
      <Carousel.Item>
      <div style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
          <CarouselCard title="April" description="Energy Usage" springBadge="Spring" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard title="May" description="Energy Usage" springBadge="Spring" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard title="June" description="Energy Usage"  summerBadge="Summer"  imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
        </div>
      </Carousel.Item>
      {/*  Carousel from July - Sept*/}
      <Carousel.Item>
      <div style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
          <CarouselCard title="July" description="Energy Usage" summerBadge="Summer" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard title="August" description="Energy Usage" summerBadge="Summer" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard title="September" description="Energy Usage" autumnBadge="Autumn" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
        </div>
      </Carousel.Item>
      {/*  Carousel from Oct - Dec*/}
      <Carousel.Item>
      <div style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>
          <CarouselCard title="October" description="Energy Usage" autumnBadge="Autumn" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard title="November" description="Energy Usage" autumnBadge="Autumn" imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" />
          <CarouselCard
            title="December" 
            description="Energy Usage" 
            imgSrc="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            winterBadge="Winter" />
        </div>
      </Carousel.Item>
    </Carousel>

    <Comparison style={{ display: "flex", gap: "3rem", justifyContent: "center" }}>

    </Comparison>
    </div>
  );
}

export default Benchmark;