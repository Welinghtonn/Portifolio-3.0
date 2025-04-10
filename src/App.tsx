
import { FaCode, FaGithub, FaHome, FaInstagram, FaPhone, FaRegUser } from "react-icons/fa";

import Parallax from "./components/scroll-triged"
import { useEffect } from "react";

function App() {

    useEffect(() => {
        const bolas = document.querySelectorAll(".bola_nav")

        window.addEventListener("scroll", () => {
            bolas.forEach(index => {
                if (window.scrollY > 600) {
                    index.classList.add("bolaVerde");
                } else {
                    index.classList.remove("bolaVerde")
                }
            });
        })
    }, [])


    return (
        <>
            <section id="home">
                <nav>
                    <a className="bola_nav" href="#home"><FaHome /></a>
                    <a className="bola_nav" href="#sobreMin"><FaRegUser /></a>
                    <a className="bola_nav" href="#projetos"><FaCode /></a>
                    <a className="bola_nav" href="#contato"><FaPhone /></a>
                </nav>
                <div className="text_initial">
                    <h1 className="welinghton">Me chamo Welinghton</h1>
                    <p className="text_eu">Tenho 18 anos e atualmente estou estudando programação e fazendo faculdade em analise e desenvolvimento de sitema</p>
                </div>
            </section>

            <main>
                <section id="sobreMin" className="sectionSobreMim">
                    <div className="container_eu">
                        <p className="sobreMim">Sobre <span className="colorGreen">Mim</span></p>
                        <p className="conheca_me">
                            Conheça-me <br />
                            Meu nome é Welinghton, tenho 18 anos. Atualmete tenho alguns simples projetinhos, <br />
                            estou fazendo faculdade de Analise e Desenvolvimento de Sistemas aonde estou <br />
                            aprendendo muito sobre a área.
                        </p>
                    </div>
                    <div className="conatiner_abilits">
                        <p className="habilits"><span className="colorGreen">Habilidades</span></p>
                        <div className="container_tags">
                            <div className="tags">
                                <p>HTML</p>
                            </div>
                            <div className="tags">
                                <p>CSS</p>
                            </div>
                            <div className="tags">
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="tags">
                                <p>REACT</p>
                            </div>
                            <div className="tags">
                                <p>STILED-COMPONENTS</p>
                            </div>
                            <div className="tags">
                                <p>TYPESCRIPT</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projetos" className="sectionSobreProjetos">
                    <div className="containerProjetos">
                        <p className="meusProjetos">Meus projetos <span className="colorGreen">Front-End</span></p>
                        <p className="projetos">
                            Confira alguns dos meus projetos que já estão no ar. Cada um deles <br />
                            foi uma oportunidade de colocar em prática o que aprendi, <br />
                            e desenvolvimento para criar soluções simples e funcionais.</p>
                    </div>
                </section>
                <section>
                    <div className="sectionImagensProjetos">
                        <Parallax />
                    </div>
                </section>
                <section id="contato" className="sectionContato">
                    <div className="titleContato">
                        <p>Con<span>tato</span></p>
                    </div>
                    <div className="containerContato">
                        <div className="containerInputs">
                            <input className="inputsContato" placeholder="Digite seu nome..." type="text" />
                            <input className="inputsContato" placeholder="Digite seu email" type="text" />
                            <textarea className="inputsContato" placeholder="Digite sua mensagem" name="" id=""></textarea>
                        </div>
                        <div className="containerText">
                            <p>Sinta-se à vontade <br />
                                para entrar em contato comigo <br />
                                enviando o formulário.<br />
                                Retornarei o mais breve possível.</p>
                            <button className="buttonEnviar">Enviar</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="containerFooter">
                    <div className="containerFooterText">
                        <p className="nameFooter">Welinghton Santos</p>
                        <p className="textFooter">Um desenvolver front-end focado em desenvolvimento de sites</p>
                    </div>
                    <div className="containerSocialIcons">
                        <p className="social">Social</p>
                        <div className="containerIcons">
                            <a href="https://github.com/Welinghtonn"><FaGithub className="icons" /></a>
                            <a href=""><FaInstagram className="icons" /></a>
                        </div>
                    </div>
                </div>
                    <p>© Copyright 2025. Made by Welinghton Santos</p>
            </footer>
        </>

    )
}

export default App
