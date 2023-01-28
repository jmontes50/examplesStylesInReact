import {
  CardWithStyle,
  ImgCardWithStyle,
  CardBody,
  CardTitle,
  CardText,
  CardButton,
} from "./styles";

export default function CardStyled() {
  return (
    <CardWithStyle>
      <ImgCardWithStyle
        alt=""
        src="https://images.unsplash.com/photo-1609845768806-767fcfc317b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
      />
      <CardBody>
        <CardTitle>Código!</CardTitle>
        <CardText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          facilis, aut commodi molestias odit porro. Consequuntur, obcaecati
          excepturi? Commodi, amet! Accusantium odit perspiciatis suscipit optio
          doloribus ipsa culpa nam exercitationem adipisci ut, aspernatur ullam
          modi dolorum cumque temporibus minus assumenda quas laudantium magnam
          excepturi asperiores.
        </CardText>
        <CardButton className="btn-card">Click!</CardButton>
      </CardBody>
    </CardWithStyle>
  );
}
