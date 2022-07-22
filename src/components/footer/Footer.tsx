import { FooterStyled } from "../../styles/footer/FooterStyled"

export const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <h3 className="footerTitle">The Pokémon Company</h3>
      </div>
      <div>
        <p className="created">Created by <a className="link" href="https://daniel-espanadero.com/" target='_BLANK'>Daniel Españadero</a> © {new Date().getFullYear()}</p>
      </div>
    </FooterStyled>
  )
}
