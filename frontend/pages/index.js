import Head from 'next/head'
import Fade from 'react-reveal/Fade';
import styles from '../styles/Home.module.css'
import { Canvas} from '@react-three/fiber'
import CanvasContent from '../components/CanvasContent';
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import {AiFillGithub, AiOutlineMail} from 'react-icons/ai';
import {
    SiAngular,
    SiCplusplus,
    SiDart, 
    SiDjango, 
    SiExpress, 
    SiFirebase, 
    SiFlask, 
    SiFlutter, 
    SiGatsby, 
    SiGo, 
    SiInstagram, 
    SiMysql, 
    SiNextdotjs, 
    SiPostgresql, 
    SiPython, 
    SiReact, 
    SiReddit, 
    SiSqlite, 
    SiSvelte, 
    SiTwitter, 
    SiTypescript} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';

import Link from "next/link";

import {Link as ChakraLink} from "@chakra-ui/react";

import Image from 'next/image'
import BeerBuddyScreenShot from '../public/screenshots/beerbuddygame.jpg'
import HashixScreenShot from '../public/screenshots/hashix.jpg'
import AsthamScreenShot from '../public/screenshots/asthma.jpg'


import TechBox from '../components/TechBox';

const Home = () => {
   return (
      <main className={styles.main}>
      <Head>
        <title>Divine Paul</title>
        <meta name="description" content="Divine Paul. Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.hero_section}>
            <div className={styles.hero_text_container}>
            <Fade >
                <h1>Divine Paul</h1>
                <p>
                    Developer/Designer
                    <br/>
                    I design and implement modern websites and applications.

                </p>
            </Fade>
            </div>
           <Canvas className={styles.canvas}>
             <ambientLight intensity={1.08}/>
             <pointLight position={[5,5,5]} />
             <CanvasContent />
           </Canvas>
        </div>
        <div className={styles.projects_container}>
            <Fade bottom>
            <h1>Works</h1>
            </Fade>
        </div>
        <div className={styles.project_display_container}>
            <div className={styles.project_display_left}>
                <Fade bottom>
                <h1> beerbuddygame.com</h1>
                <p> A Card Game Made for the app Beer Buddy built using Angular and Firebase </p>
                <ChakraLink href="https://beerbuddygame.com" isExternal>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
                        Visit Site 
                      </Button>
                </ChakraLink>
                </Fade>
            </div>
            <div className={styles.project_display_right}>
                <Fade bottom>
                <Image
                className={styles.project_display_right_img}
                src={BeerBuddyScreenShot}
                alt="screenshots of beerbuddygame.com"
              />
              </Fade>
            </div>
        </div>

        <div className={styles.project_display_container}>
            <div className={styles.project_display_left}>
                <Fade bottom>
                <h1> Hashix </h1>
                <p> A Desktop Application Using electron.js and node.js to encrypt files and folders </p>
                <ChakraLink href="https://github.com/divinepaul/hashix" isExternal>
                    <Button rightIcon={<AiFillGithub/>} colorScheme='teal' variant='outline'>
                        View Source Code 
                      </Button>
                </ChakraLink>
                </Fade>
            </div>
            <div className={styles.project_display_right}>
                <Fade bottom>
                <Image
                className={styles.project_display_right_img}
                src={HashixScreenShot}
                alt="screenshots of hashix"
              />
              </Fade>
            </div>
        </div>

        <div className={styles.project_display_container}>
            <div className={styles.project_display_left}>
                <Fade bottom>
                <h1> Asthma </h1>
                <p> A Flutter App for tracking asthma conditions. </p>
                <ChakraLink href="https://github.com/divinepaul/asthma" isExternal>
                    <Button rightIcon={<AiFillGithub/>} colorScheme='teal' variant='outline'>
                        View Source Code 
                      </Button>
                </ChakraLink>
                </Fade>
            </div>
            <div className={styles.project_display_right}>
                <Fade bottom>
                <Image
                className={styles.project_display_right_img}
                src={AsthamScreenShot}
                alt="screenshots of asthma"
              />
              </Fade>
            </div>
        </div>




        <div className={styles.projects_container}>
            <Fade bottom>
            <h1 className={styles.projects_container_margin}>Technologies I&apos;ve Worked With</h1>
            </Fade>
        </div>
        <div className={styles.tech_list_container}>
            <Fade bottom>
            <h1> Programming Languages </h1>
            </Fade>
            <div className={styles.tech_list_horizontal}>
                <Fade>
                <TechBox icon={<SiTypescript/>} name={"TypeScript"}/>
                <TechBox icon={<SiJavascript/>} name={"JavaScript"}/>
                <TechBox icon={<SiGo/>} name={"GoLang"}/>
                <TechBox icon={<SiCplusplus/>} name={"C++"}/>
                <TechBox icon={<SiPython/>} name={"Python"}/>
                <TechBox icon={<SiDart/>} name={"Dart"}/>
                </Fade>
            </div>
        </div>

        <div className={styles.tech_list_container}>
            <Fade bottom>
            <h1> Frontend Libraries/FrameWorks </h1>
            </Fade>
            <div className={styles.tech_list_horizontal}>
                <Fade>
                <TechBox icon={<SiReact/>} name={"React"}/>
                <TechBox icon={<SiSvelte/>} name={"Svelte"}/>
                <TechBox icon={<SiAngular/>} name={"Angular"}/>
                <TechBox icon={<SiNextdotjs/>} name={"Next.js"}/>
                <TechBox icon={<SiGatsby/>} name={"Gatsby.js"}/>
                <TechBox icon={<SiFlutter/>} name={"Flutter"}/>
                </Fade>
            </div>
        </div>

        <div className={styles.tech_list_container}>
            <Fade bottom>
            <h1> Backend Libraries/FrameWorks </h1>
            </Fade>
            <div className={styles.tech_list_horizontal}>
                <Fade>
                <TechBox icon={<SiDjango/>} name={"Django"}/>
                <TechBox icon={<SiFlask/>} name={"Flask"}/>
                <TechBox icon={<SiExpress/>} name={"Express.js"}/>
                </Fade>
            </div>
        </div>

        <div className={styles.tech_list_container}>
            <Fade bottom>
            <h1> Databases </h1>
            </Fade>
            <div className={styles.tech_list_horizontal}>
                <Fade>
                <TechBox icon={<SiPostgresql/>} name={"PostgreSQL"}/>
                <TechBox icon={<SiMysql/>} name={"MySQL"}/>
                <TechBox icon={<SiSqlite/>} name={"SQlite"}/>
                <TechBox icon={<SiFirebase/>} name={"Firestore"}/>
                </Fade>
            </div>
        </div>

        <div className={styles.projects_container}>
            <Fade bottom>
            <h1>Contact</h1>
            </Fade>
        </div>

       <div className={styles.contact_section}>
        <a href="mailto:divineflu@gmail.com" target="_blank" rel="noreferrer">
            <div className={styles.contact_link}>
               <AiOutlineMail/> <p>divineflu@gmail.com</p>
           </div>
        </a>
        <a href="https://github.com/divinepaul" target="_blank" rel="noreferrer">
            <div className={styles.contact_link}>
               <AiFillGithub/> <p>@divinepaul</p>
           </div>
        </a>
        <a href="https://twitter.com/divineflu" target="_blank" rel="noreferrer">
            <div className={styles.contact_link}>
               <SiTwitter/> <p>@divineflu</p>
           </div>
        </a>
        <a href="https://reddit.com/u/divineflu" target="_blank" rel="noreferrer">
            <div className={styles.contact_link}>
               <SiReddit/> <p>@divineflu</p>
           </div>
        </a>
        <a href="https://instagram.com/divineflu" target="_blank" rel="noreferrer">
            <div className={styles.contact_link}>
               <SiInstagram/> <p>@divineflu</p>
           </div>
        </a>
       </div>
      </main>

    )
}

export default Home;
