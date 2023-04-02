import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontSize:"2rem",
          },
          "& p":{
            textAlign:"justify"
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:"1.5rem",
            }
          }
        }}>
          <Typography variant="h4">
            Welcome To My Restaurent
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas voluptas vel. Eligendi harum itaque magni temporibus illo nobis, repellendus mollitia minima vitae illum at asperiores ut enim eveniet quibusdam excepturi! Eaque itaque consequuntur, sunt nostrum dicta velit quibusdam non incidunt facere quo tenetur facilis laudantium quos ut commodi molestias ipsum consequatur et aperiam magni eius ipsa dignissimos! Tempore temporibus, sed enim amet velit quae corrupti reiciendis, alias voluptate aspernatur cupiditate placeat ipsam, consectetur modi voluptatibus. Ab, inventore! Quasi, quam incidunt. Magni praesentium, minima hic corrupti, suscipit quas voluptatem ipsa blanditiis officia ab obcaecati beatae? Ullam sint illum maiores placeat.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum, dicta ab, eaque praesentium tempore pariatur, quidem doloribus atque temporibus placeat in suscipit laboriosam optio qui quisquam? Quaerat tempora reiciendis vel, magnam sint adipisci eum, magni eos excepturi pariatur saepe quod architecto provident impedit odio et nostrum. Laudantium illo est nihil quas voluptatum enim sint nostrum quo vero officia, hic sed excepturi omnis quibusdam doloremque et sunt unde natus ratione dicta quis fugiat reprehenderit ab. Ad, officia tenetur. Doloribus incidunt totam exercitationem odit sed provident facere iure sequi quos unde eius numquam neque, maxime eaque, fugit reprehenderit laudantium nesciunt cumque?</p>
        </Box>
    </Layout>
  )
}

export default About