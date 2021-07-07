import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />

            <Content>
                <p>I have recently earned a Certificate in Full Stack Web Development from Southern Methodist University. High work ethic and very passionate about making a positive contribution, my motivation is earning a vital role that will assist a company's long and short-term goals by applying technical skills in MySQL, MongoDB, Express, React, Node, JavaScript, among other tools to a future technical position.</p>

                <p>In my free time I love to cook, always looking for new recipe ideas. I also really enjoy jogging, going to the trails is one of my favorite activites.</p>

                <p> You can find my Github <a href="https://github.com/Kar3n33" target="_blank" rel="noopener noreferrer">here </a></p>
                <p> We can connect via LinkedIn <a href="https://www.linkedin.com/in/karen-acosta13/" target="_blank" rel="noopener noreferrer">here </a></p>
                <p> You can find my Resume <a href="https://drive.google.com/file/d/1R9YIi2TBBOfs6fbI6A2r1K-PagDAyVPK/view?usp=sharing" target="_blank" rel="noopener noreferrer">here </a></p>

            </Content>
        </div>
    );

}

export default AboutPage;