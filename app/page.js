"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <header>
                <a href="#" className="logo-holder">
                    <div className="logo">A</div>
                    <div className="logo-text">Portfolio</div>
                </a>
                <nav>
                    <ul id="menu" className={menuOpen ? "menu active" : "menu"}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="mailto:syedaamirs2208@gmail.com" className="Button">Contact Me</a>
                        </li>
                    </ul>
                    <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10" />
                        </svg>
                    </a>
                </nav>
            </header>
            <main>
                <section className="hero container">
                    <div className="hero-blue">
                        <div>
                            <h1><small>It's me</small>
                                Aamir Sohail.
                            </h1>
                            <p>
                                A Design and Developer based out of Hyderabad building responsive, user-centered websites with modern tech stack like React.js, JavaScript, HTML, tailwind CSS. <span> Innovative developer crafting scalable, impactful solutions for the digital world.</span>
                            </p>
                            <div className="call-to-action">
                                <a href="/Imgs/Aamir's Profile (2).pdf" className="button black">
                                    View Resume
                                </a>
                                <a href="mailto:syedaamirs2208@gmail.com" className="button white">
                                    Contact Me
                                </a>
                            </div>
                            <div className="social-links">
                                <ul class="wrapper">
                                    <li class="icon github">
                                        <a href="https://github.com/Aamir-Devp" class="Github-Link" target="_blank" rel="noopener noreferrer">
                                            <span class="tooltip">Github</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="icon linkedin">
                                        <a href="https://www.linkedin.com/in/syed-aamirsohail-a651b9275/" class="LinkedIn-Link" target="_blank" rel="noopener noreferrer">
                                            <span class="tooltip">Linkedin</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                                        </a>
                                    </li>
                                    <li class="icon instagram">
                                        <a href="https://www.instagram.com/aamir_sohail_20/" class="Instagram-Link" target="_blank" rel="noopener noreferrer">
                                            <span class="tooltip">Instagram</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1.2em"
                                                fill="currentColor"
                                                class="bi bi-instagram"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="icon x">
                                        <a href="https://x.com/AamirSo8686" class="x-Link" target="_blank" rel="noopener noreferrer">
                                            <span class="tooltip">X</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hero-yellow">
                        <img src="/Imgs/Subject.png" alt="Aamir Sohail" width="100%" />
                    </div>
                </section>
                <section className="logos container">
                    <div className="marquee">
                        <div className="track">
                            <img src="/Imgs/html-5.png" alt="HTML" width="128" />
                            <img src="/Imgs/css-3.png" alt="CSS" width="128" />
                            <img src="/Imgs/js.png" alt="JS" width="128" />
                            <img src="/Imgs/React.png" alt="React" width="128" />
                            <img src="/Imgs/VsCode.png" alt="VsCode" width="128" />
                            <img src="/Imgs/tailwind-css.png" alt="Tailwind" width="128" />
                            <img src="/Imgs/node.js.png" alt="Node.js" width="128" />
                            <img src="/Imgs/html-5.png" alt="HTML" width="128" />
                            <img src="/Imgs/css-3.png" alt="CSS" width="128" />
                            <img src="/Imgs/js.png" alt="JS" width="128" />
                            <img src="/Imgs/React.png" alt="React" width="128" />
                            <img src="/Imgs/VsCode.png" alt="VsCode" width="128" />
                            <img src="/Imgs/tailwind-css.png" alt="Tailwind" width="128" />
                            <img src="/Imgs/node.js.png" alt="Node.js" width="128" />
                        </div>
                    </div>
                </section>
                <section id="skills" className="skills container">
                    <h2>
                        <small>About Me</small>
                        Skills
                    </h2>
                    <div className="holder-blue">
                        <div className="left-column">
                            <h3>Frontend</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Tailwind</li>
                            </ul>
                            <h3>Backend</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <h3>A bit about me</h3>
                            <p>
                                A result driven software engineer proficient in building scalable web applications and implementing security protocols.</p>
                            <p>I'm proficient in crafting responsive website using cross browser features and has 2 years of work experience working in web development technologies.</p>
                        </div>
                    </div>
                </section>
                <section className="work-experience container">
                    <h2>
                        <small>Recent</small>
                        Work Experience
                    </h2>
                    <div className="jobs">
                        <article>
                            <figure>
                                <div>
                                    <img src="/Imgs/workplace - 1.png" alt="workplace - 1" width="100%" />
                                    <figcaption>
                                        Workplace - 1
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Project Engineer</h3>
                            <div>2022 - 2023</div>
                            <p>Engaged in cross-functional teams to identify risks, mitigate risks by implementing policies, ensure
                                compliance integrity in client policy.</p>
                            <div className="tech-stack">Tech-Stack used
                                <ul>
                                    <li>
                                        Node.JS
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        React.JS
                                    </li>
                                    <li>
                                        Tailwind CSS
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article>
                            <figure>
                                <div>
                                    <img src="/Imgs/workplace - 2.png" alt="workplace - 2" width="100%" />
                                    <figcaption>
                                        Workplace - 2
                                    </figcaption>
                                </div>
                            </figure>
                            <h3>Associate Software Engineer</h3>
                            <div>2023 - 2024</div>
                            <p>Developed scalable full-stack web applications using the MERN stack, improving client performance by 20%.
                                Built dynamic, responsive user interfaces with React.js, enhancing user experience and engagement by
                                15%.</p>
                            <div className="tech-stack">Tech-Stack used
                                <ul>
                                    <li>
                                        Node.JS
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        React.JS
                                    </li>
                                    <li>
                                        Express.JS
                                    </li>
                                    <li>
                                        Mongo DB
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>
                {/* <section id="projects" className="bento container">
                    <h2>
                        <small>
                            Previous
                        </small>
                        Completed Projects
                    </h2>
                    <div className="bento-grid">
                        <div className="bento-item">
                            <a href="https://prime-store.netlify.app" target="_blank" rel="noopener noreferrer" className="project-link">
                                <img src="./Imgs/Display.jpg" alt="Project Thumbnail" className="project-thumbnail" />
                                <h3>Prime Mobile Store</h3>
                                <div className="project-details">
                                    <h3>Prime Mobile Store</h3>
                                    <p>E-commerce gadgets store built with React.js, JavaScript, and Bootstrap</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section> */}
                <section id="projects" className="projectsSection">
                <h2>
                        <small>
                            Previous
                        </small>
                        Completed Projects
                    </h2>
                    <div className="bentoContainer">
                        <div className="bentoGrid">
                            <div className="bentoItem">
                                <a href="https://prime-store.netlify.app" target="_blank" rel="noopener noreferrer">
                                    <img src="/Imgs/Display.jpg" alt="Project Thumbnail" className="projectThumbnail" />
                                    <h3>Prime Mobile Store</h3>
                                </a>
                            </div>
                        </div>

                        {/* Description beside the grid */}
                        <div className="description">
                            {/* <h2>About This Project</h2> */}
                            <p>
                                Prime Mobile Store is an e-commerce application integrated with mi.com and built with React.js, JavaScript, and Bootstrap.
                                It features a fully responsive design and user-friendly interface for purchasing the latest gadgets.
                            </p>
                            <a href="https://github.com/Aamir-Devp/website" target="_blank" rel="noopener noreferrer" className="githubLink">
                                View Source Code on GitHub
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
