/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.jpg';
import Veritru from '../../assets/recentprojects/veritru.jpg';
import Lofo from '../../assets/recentprojects/lofo.jpg';
import Startup from '../../assets/recentprojects/startup.jpg';
import Lacalle from '../../assets/recentprojects/lacalle.jpg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'F-NFT Portfolio', 
      description: `NFTs, also known as immutable tokens, are based on Blockchain technology. With this technology, all visual, written, and audio works can be stored in digital format`,
      alter: 'F-NFT Portfolio',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'F-NFT Project', 
      description: `Non-fungible Tokens (NFTs) are a method of proving digital ownership. Here are the top three things we think you should know about them as an artist or art collector so you can use them safely and easily`,
      alter: 'F-NFT Project',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'F-NFT Project', 
      description: `IDEAS FOR A 3D FASHION BRAND CREATED WITH OBJECTIVES TO BRING A REAL VALUE TO THE NFT COMMUNITY`,
      alter: 'F-NFT Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Startup Project', 
      description: `F-NFT Project`,
      alter: 'Startup Project',
      image: `${Startup}`,
    },
    { 
      id: 5,
      title: 'F-NFT Collection', 
      description: ``,
      alter: 'F-NFT Collection',
      image: `${Lacalle}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
