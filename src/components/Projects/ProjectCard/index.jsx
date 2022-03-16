import Image from 'next/image';

import { projects } from '../projects';
import {
  ProjectContainer,
  ProjectImage,
  Details,
  Techs,
  Text,
  NameAndLink,
  LinkAndRepository
} from '../../../styles/projectCard';

export default function ProjectCard() {
  return (
    <>
      {projects.map(item => (
        <>
          <ProjectContainer id={item.section}>
            <ProjectImage>
              <Image 
                src={item.image}
                alt={item.alt}
                width={1124}
                height={431}
              />
            </ProjectImage>

            <Details>
              <Techs>
                {item.techs.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </Techs>

              <Text><p>{item.description}</p></Text>
            </Details>

            <NameAndLink>
              <div><h3>{item.name}</h3></div>

              <LinkAndRepository>
                <a 
                  href={item.link} 
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Deploy
                </a>

                <a 
                  href={item.github} 
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                    Repositório
                </a>
              </LinkAndRepository>

            </NameAndLink>
          </ProjectContainer>
        </>
      ))}
    </>
  );
};