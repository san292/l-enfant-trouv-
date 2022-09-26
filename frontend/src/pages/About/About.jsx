import React from 'react';
import meeting from '../../UI/images/meeting.jpg';
import photo from '../../UI/images/child1.jpg';
import alawa from '../../UI/images/alawa.jpg';
import styled from 'styled-components';
import { Flex } from '../../UI/styles/Flex';
import { Team } from './Team';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const About = () => {
  return (
    <ContainerAbout>
      <AboutUs>
        <h2>Le debut</h2>
        <Flex>
          {/* <Img src={photo} alt="img" /> */}
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            animi saepe suscipit iusto quis assumenda quaerat ipsam laudantium
            obcaecati. Temporibus reiciendis est esse iusto ipsa optio
            repellendus, recusandae velit provident fugit consectetur ullam
            error cupiditate corrupti animi vitae dolore repudiandae voluptate
            incidunt inventore rerum voluptatem. Aut vel voluptate quas modi
            illo, aperiam tenetur porro vero nihil nobis animi commodi. Iure
            totam nobis incidunt blanditiis animi maxime officia dolorem iusto
            quis, hic quod atque dolorum ratione nostrum reiciendis, quidem
            doloremque? Magnam minima vel illum aliquid impedit dolore
            cupiditate ratione officiis voluptatum possimus eveniet laudantium
            facere corrupti molestias fugiat et iste, laborum dicta porro optio
            nemo veniam vero debitis veritatis! Aperiam neque consequatur at
            corporis odit aut. Rerum ea hic nobis tenetur deserunt qui
            accusantium praesentium ipsam tempore? At tempore eos eum numquam
            amet et explicabo illo aperiam ullam aut minima nulla possimus,
            incidunt voluptate a laboriosam suscipit ab, fugiat fugit
            voluptatum. Non illo eos laudantium neque perspiciatis accusantium
            quisquam cupiditate autem eveniet suscipit perferendis placeat
            officiis adipisci fugit corrupti in officia dignissimos explicabo
            nostrum impedit eum, est, veniam molestias fugiat. Soluta laborum
            quia sit dolorum perspiciatis iusto, ut repudiandae amet mollitia
            eius inventore, quo doloribus, incidunt natus reprehenderit
            excepturi quidem praesentium.
          </Paragraph>
        </Flex>
        <h2>Conseil d'administartion</h2>
        <Flex>
          <Img src={meeting} alt="img" />
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            animi saepe suscipit iusto quis assumenda quaerat ipsam laudantium
            obcaecati. Temporibus reiciendis est esse iusto ipsa optio
            repellendus, recusandae velit provident fugit consectetur ullam
            error cupiditate corrupti animi vitae dolore repudiandae voluptate
            incidunt inventore rerum voluptatem. Aut vel voluptate quas modi
            illo, aperiam tenetur porro vero nihil nobis animi commodi. Iure
            totam nobis incidunt blanditiis animi maxime officia dolorem iusto
            quis, hic quod atque dolorum ratione nostrum reiciendis, quidem
            doloremque? Magnam minima vel illum aliquid impedit dolore
            cupiditate ratione officiis voluptatum possimus eveniet laudantium
            facere corrupti molestias fugiat et iste, laborum dicta porro optio
            nemo veniam vero debitis veritatis! Aperiam neque consequatur at
            corporis odit aut. Rerum ea hic nobis tenetur deserunt qui
            accusantium praesentium ipsam tempore? At tempore eos eum numquam
            amet et explicabo illo aperiam ullam aut minima nulla possimus,
            incidunt voluptate a laboriosam suscipit ab, fugiat fugit
            voluptatum. Non illo eos laudantium neque perspiciatis accusantium
            quisquam cupiditate autem eveniet suscipit perferendis placeat
            officiis adipisci fugit corrupti in officia dignissimos explicabo
            nostrum impedit eum, est, veniam molestias fugiat. Soluta laborum
            quia sit dolorum perspiciatis iusto, ut repudiandae amet mollitia
            eius inventore, quo doloribus, incidunt natus reprehenderit
            excepturi quidem praesentium.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolore animi saepe suscipit iusto quis assumenda
            quaerat ipsam laudantium obcaecati. Temporibus reiciendis est esse
            iusto ipsa optio repellendus, recusandae velit provident fugit
            consectetur ullam error cupiditate corrupti animi vitae dolore
            repudiandae voluptate incidunt inventore rerum voluptatem. Aut vel
            voluptate quas modi illo, aperiam tenetur porro vero nihil nobis
            animi commodi. Iure totam nobis incidunt blanditiis animi maxime
            officia dolorem iusto quis, hic quod atque dolorum ratione nostrum
            reiciendis, quidem doloremque? Magnam minima vel illum aliquid
            impedit dolore cupiditate ratione officiis voluptatum possimus
            eveniet laudantium facere corrupti molestias fugiat et iste, laborum
            dicta porro optio nemo veniam vero debitis veritatis! Aperiam neque
            consequatur at corporis odit aut. Rerum ea hic nobis tenetur
            deserunt qui accusantium praesentium ipsam tempore? At tempore eos
            eum numquam amet et explicabo illo aperiam ullam aut minima nulla
            possimus, incidunt voluptate a laboriosam suscipit ab, fugiat fugit
            voluptatum. Non illo eos laudantium neque perspiciatis accusantium
            quisquam cupiditate autem eveniet suscipit perferendis placeat
            officiis adipisci fugit corrupti in officia dignissimos explicabo
            nostrum impedit eum, est, veniam molestias fugiat. Soluta laborum
            quia sit dolorum perspiciatis iusto, ut repudiandae amet mollitia
            eius inventore, quo doloribus, incidunt natus reprehenderit
            excepturi quidem praesentium.
          </Paragraph>
        </Flex>
      </AboutUs>
      <h2>Nos meilleurs souvenirs durant ses dernieres années : </h2>
      <Flex>
        <Img src={photo} alt="img"></Img>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae non
          quibusdam iure. Tenetur beatae harum neque iure repellendus. Officiis
          nostrum dolor harum iure error, reprehenderit voluptatibus qui nihil
          vero consectetur suscipit, veritatis laudantium aliquam. Itaque saepe
          tempora neque vero. Atque odit, saepe culpa iusto incidunt odio quia
          perferendis delectus, voluptas illo cum recusandae dolor optio dolorum
          laborum nisi, amet veniam vel tenetur esse quisquam asperiores
          distinctio. Consequuntur ab nam voluptas incidunt! Tenetur aperiam
          eius rem distinctio unde quaerat blanditiis nemo quam autem totam
          facere vitae corrupti aut voluptatum necessitatibus est neque itaque
          deserunt iste corporis vero, consequuntur non amet? Eum labore tempora
          nesciunt ullam aperiam, minus similique? Incidunt natus labore
          expedita in dolores, vitae aliquam. Odio eligendi cum aliquam beatae
          pariatur quidem nesciunt iste consequuntur, doloremque labore eius
          debitis saepe qui aliquid iure fugiat libero delectus quae obcaecati
          placeat nulla? Perferendis voluptatem unde assumenda eos atque, minima
          ipsa architecto. Harum sapiente placeat ad quo dignissimos tempora
          error labore aspernatur accusamus. Magnam nobis sapiente quibusdam
          laborum repellendus inventore a non odio officia nesciunt neque
          eveniet voluptatem velit rem mollitia autem sit consectetur, veritatis
          quaerat explicabo expedita ipsum ullam. Animi recusandae odit modi
          mollitia beatae quis neque, officia ratione tenetur cumque adipisci
          minus consequuntur eaque consectetur eos ut incidunt deserunt tempora!
          Aspernatur ex dignissimos iusto fuga consequatur omnis eius
          consectetur amet, ducimus odio non magnam accusamus. Nemo voluptatem
          ipsam atque tempore, repudiandae ratione quisquam optio quod expedita,
          alias, modi quaerat reiciendis ex odio rerum et cum. Libero nisi vel
          velit, maiores, aliquam nam laborum quidem asperiores, odio optio
          dolorum vero sed consequatur. Possimus quas doloribus animi hic error
          harum quo eveniet quibusdam culpa molestiae voluptatum ea, corporis,
          amet consequatur atque sapiente quos asperiores vel, omnis modi
          voluptatibus. Nisi consequatur, quidem veniam placeat cumque neque vel
          obcaecati saepe totam! Eum fugit, exercitationem voluptates
          consequuntur deserunt delectus error. Id, porro magnam. Corrupti
          tempora sunt consequatur rem officiis sit necessitatibus nobis id
          omnis repellendus minima, ab, hic qui consectetur repellat magnam
          atque aliquam tenetur et! Reprehenderit, accusantium soluta ut, beatae
          eum quas eius autem et quibusdam a deleniti? Error omnis dolore, cum
          corporis provident mollitia aliquam modi, unde nam sint enim iure
          sapiente voluptatum repellendus itaque minima. Unde sunt reprehenderit
          aliquid, molestiae modi in optio. Ad animi deserunt error, dolore
          dolor illo excepturi? Voluptate, a sed fugit natus ex mollitia iure in
          accusantium eveniet commodi? Blanditiis, molestias id veniam tenetur
          aspernatur necessitatibus porro esse ab?
        </Paragraph>
      </Flex>
      <h2>L'équipe </h2>

      <ContainerCarousel>
        <Carousel
          autoPlay
          axis="vertical"
          verticalSwipe="natural"
          showThumbs={false}
          infiniteLoop={true}
          width="90%"
        >
          {Team.map((team) => (
            <DiveContainerTeam key={team.name}>
              <Img src={team.image} alt="img" />
              <h3>{team.name}</h3>
              <span>{team.role}</span>

              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quo, sit veniam laudantium officiis ad rerum totam hic officia
                corporis ea sunt! Odio, cumque, distinctio voluptatibus nesciunt
                itaque facilis nam, eveniet aut id iusto laudantium est
                repellendus. Magni quaerat, asperiores, officia dignissimos
                recusandae tenetur voluptatem expedita ut enim natus
                consectetur! Nostrum mollitia corrupti atque, voluptatem vel
                praesentium dolores magni dolor est aspernatur doloribus. Modi
                cumque, animi provident accusamus officia iusto eos ullam porro
                laudantium nesciunt, aperiam sapiente deleniti veritatis sint
                dolorum, cupiditate non exercitationem fugit quidem placeat
                veniam eligendi. Laborum aperiam provident mollitia architecto
                quas iure, fugit explicabo quod voluptate culpa ipsum illum
                impedit voluptatem vero aspernatur facilis laboriosam.
                Repellendus dignissimos cupiditate eos pariatur praesentium quas
                veritatis ad cum tempore illum quis, sit laboriosam ab ratione
                minus quam nulla placeat debitis, quod veniam quaerat,
                voluptates eaque! Veniam voluptatibus natus earum enim. Eaque
                quo quidem veniam. Eos tenetur, vitae deleniti odit porro labore
                aut, expedita deserunt quae totam repellat, laboriosam quo
                voluptate nisi earum perferendis nesciunt corporis! Fugit
                deserunt placeat, praesentium similique culpa doloremque. Et,
                neque deleniti velit ipsam illo fuga vel! Mollitia nobis
                blanditiis voluptatem esse natus reiciendis. Numquam facilis
                optio omnis at perspiciatis architecto obcaecati repudiandae
                unde distinctio ipsa.
              </Paragraph>
            </DiveContainerTeam>
          ))}
        </Carousel>
      </ContainerCarousel>
    </ContainerAbout>
  );
};
const ContainerAbout = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Img = styled.img`
  border-radius: 0.8rem;
  width: 20rem;
  height: 16rem;
`;

const Paragraph = styled.p`
  height: 15rem;
  overflow-x: hidden;

  overflow: clip;
`;
const DiveContainerTeam = styled.div`
  height: 30rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const ContainerCarousel = styled.div`
  width: auto;
  margin: 0 auto;
  @media screen and (min-width: 786px) {
    width: 60rem;
  }
`;

export default About;
