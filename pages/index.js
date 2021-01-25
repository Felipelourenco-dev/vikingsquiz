import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const CampoNome = styled.input`

    width: 15vw;
    height: 5vh;
    margin-top: 25px;
    background: black;
    color: darkred;
    border: 1px solid darkred;
    border-radius: 10px;
    font-size: 14px;

    padding: 10px;

`

export const Botao = styled.button`

    width: 15vw;
    height: 5vh;
    margin-top: 25px;

    background: darkred;
    color: white;

    border: 1px solid darkred;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;

    padding: 10px;

`

export const CampoLinks = styled.div `

    width: 15vw;
    height: 4vh;
    margin-top: 25px;

    background: black;
    color: white;

    border: 1px solid darkred;
    border-radius: 10px;
    font-size: 14px;

    padding: 10px;

`


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <CampoNome placeholder='Diga seu nome meu caro Viking'/>
            <Botao>
              Jogar
            </Botao>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesses quizes tops que o pessoal da Imersão Next.js fez</p>

            <CampoLinks>
            <a>dev-bjorn.com</a>
            </CampoLinks>

            <CampoLinks>
             <a>dev-ragnar.com</a>
            </CampoLinks>

            <CampoLinks>
            <a>dev-ivar.com</a>
            </CampoLinks>
            
         
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/felipelourenco-dev" />
    </QuizBackground>
  );
}