import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HandleProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HandleProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" title="logo dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
