import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{my:10, textAlign:'center', 
        '& h3':{fontWeight:'bold', my:10}, 
        '& p':{margin:' 0 30px', textAlign:'justify'}}}>
          <Typography variant='h3'>Welcome to Course Online</Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quasi dolorum optio minima autem. Omnis perferendis a magni! Iure minus odio earum saepe magni vero quos ea eveniet pariatur delectus nam possimus autem ipsum recusandae tenetur, assumenda laudantium quasi officiis culpa. Unde accusamus nostrum aut vitae aliquam quas magni iusto ipsum dolore reprehenderit asperiores inventore aliquid, numquam earum alias facere ratione, omnis autem eaque itaque cum consectetur totam blanditiis. Deserunt, nobis voluptates sapiente omnis eos qui tempora quam pariatur impedit.
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione libero nulla, incidunt commodi similique ullam reiciendis? Maxime facilis, illum sit nulla suscipit, cupiditate ipsum nobis delectus, possimus saepe laboriosam. Et quia, fugiat magni enim, soluta ea quasi harum incidunt non minima rem sunt deleniti in! Voluptatibus ipsa sunt earum est nemo, optio quos facilis inventore quibusdam culpa dignissimos? Inventore dicta quis minima. Quae ducimus voluptatibus optio enim incidunt doloremque odio quis quibusdam nesciunt, sequi sed! Placeat optio labore nemo repellendus similique vel architecto odio iste error eos, fuga quis nostrum eius aliquam recusandae porro. Necessitatibus aliquam vel quaerat iusto distinctio.</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio omnis vitae, deserunt sapiente veritatis facere, iusto architecto perferendis illo laborum. Nemo voluptate dignissimos, iusto eveniet officia illum iure? A distinctio quia velit ea doloribus odio modi ex dolor nesciunt est saepe officia in, quibusdam commodi at quod nemo ducimus illum ipsum fuga. Pariatur, reprehenderit dolor vero saepe voluptates similique.</p>
        </Box>
    </Layout>
  )
}

export default About