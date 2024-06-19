import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
           <TrainingSC>
           <img alt ="pic" src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZVvJtYITAhPOZ5NZQSAMOL8ShoPkGHpNfXq2Zwydrz-9lo~hEKJySw4jDsQsKrCw7I~EW2yYENOzkYqjo~z-Uvt1QGaEIfPRTZ7EFyWrIzI-NItgr~RiMh~15vscQyd3pFovSMqObRVKVNORi8mAeCzoE--kGRQ4DnD41QR4sz7qX00dLhhGIMYx2Ic8FIutfJ8q6LNxqVWPj5ci8SgWKLbEO4vRvbAithkNESsExffIhRW9DOQon67HXlkrLexSjLOeYz4C4vC8BHEgvsX5L~hNp3oFSUr6oZT6DHDgA~rzQjDcfWhL2EpQcR1LzCDEHhCEQRNwDRPBzQMw1-NIfA__"></img>
          <Headline>Headline</Headline>
          <Paragraf>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraf>
          <Button backgroundColor='RGB(78, 113, 254)' color='RGB(255, 255, 255)' borderColor='RGB(255, 255, 255)'>See more</Button>
          <Button backgroundColor='RGB(255, 255, 255)' color='RGB(78, 113, 254)' borderColor='RGB(78, 113, 254)'>Save</Button>
           
           </TrainingSC>
        </div>
    );
}

export default App;


const TrainingSC = styled.div`
  width: 300px;
  height: 300px;
  background-color: #FFFFFF;
  border-radius: 15px;
  img {
    width: 280px;
    height: 170px;
    margin: 10px;
    border-radius: 15px;
  }
`
const Headline = styled.h1`
font-family: "Inter";
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
margin: 2px 20px;
`
const Paragraf = styled.p`
  width: 260px;
height: 40px;
font-family: "Inter";
font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #ABB3BA;
margin: 2px 20px;
;
`
type ButtonPropsPype = {
  backgroundColor: string,
  color: string,
  borderColor: string
}
const Button = styled.button<ButtonPropsPype>`
width: 86px;
height: 30px;
border-radius: 5px;
margin: 5px;
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
border: 2px solid ${props => props.borderColor}
`