import React, { PureComponent } from 'react';

class TeamSection extends PureComponent {
  render() {
    return (
      <div>
        <section id="team" className="text-center space--xs">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2 className="">Team</h2>
              </div>
            </div>
            <div className="row">
              <div className="masonry">
                <div className="masonry__container masonry--active">
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/matthew.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Matthew van Niekerk</h4>
                        <span className="type--fade">Co-Founder &amp; CEO</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/mattvanniekerk/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a href="https://twitter.com/matt_vn" target="_blank">
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Matthew van Niekerk
                            </h4>
                            <span className="type--fade">
                              Co-Founder &amp; CEO
                            </span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Founded and exited two companies in Japan, then
                              got his MBA in Belgium, after which he joined a
                              large financial institution, performing a variety
                              of roles ranging from COO of the consumer finance
                              business line to head of platform innovation for
                              the brokerage and crowdfunding platform. In 2016,
                              he left the bank and co-founded SettleMint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/roderik.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Roderik van der Veer</h4>
                        <span className="type--fade">Co-Founder &amp; CTO</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/roderik/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a href="https://twitter.com/r0derik" target="_blank">
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Roderik van der Veer
                            </h4>
                            <span className="type--fade">
                              Co-Founder &amp; CTO
                            </span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              After Roderik built one of the largest ecommerce
                              computer store sites in Belgium in 1999, he worked
                              in the IT development sector and as CTO grew a
                              traditional marcom agency into a digital
                              powerhouse. He exited this business to focus on
                              blockchain technologies when he co-founded
                              SettleMint in 2016.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/frank.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">
                          Frank Van Geertruyden
                        </h4>
                        <span className="type--fade">MarCom Director</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/frankvangeertuyden/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Frank Van Geertruyden
                            </h4>
                            <span className="type--fade">MarCom Director</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              As a marketing and communication professional with
                              almost 20 years experience in advertising,
                              publishing, sales, automotive and ICT, Frank
                              worked on both agency and advertising site before
                              getting on-board at SettleMint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/els.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Els Meyvaert</h4>
                        <span className="type--fade">Project Manager</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/elsmeyvaert"
                            target="_blank"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            href="https://twitter.com/els_meyvaert"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Els Meyvaert</h4>
                            <span className="type--fade">Project Manager</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Els worked as account manager in various financial
                              institutions until she moved back to her first
                              love, communication. As account director, she
                              handled communication for the largest FMCG group
                              in Belgium before joining SettleMint.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/cassandre.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Cassandre Vandeputte</h4>
                        <span className="type--fade">Solution Analyst</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/cassandrevandeputte/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a href="https://twitter.com/cassvdp" target="_blank">
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Cassandre Vandeputte
                            </h4>
                            <span className="type--fade">Solution Analyst</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Cassandre has earned her stripes in the blockchain
                              innovation labs at Accenture before joining
                              SettleMint this year.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/tom.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Tom De Block</h4>
                        <span className="type--fade">Blockchain Architect</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/navigio/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Tom De Block</h4>
                            <span className="type--fade">
                              Blockchain Architect
                            </span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              A serial entrepreneur with active companies in
                              Belgium, Spain and eastern Europe and a strong
                              background in quality assurance in large financial
                              institutions across Europe.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/silke.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Silke Van den Broeck</h4>
                        <span className="type--fade">Blockchain Developer</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/silkevdb/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Silke Van den Broeck
                            </h4>
                            <span className="type--fade">
                              Blockchain Developer
                            </span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              After working with cutting edge web and mobile
                              technologies in multiple Belgian startups, Silke
                              decided to use her experience as a full-stack
                              developer to help lift the SettleMint tech to a
                              higher level.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/Veronica.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Veronica Murguia</h4>
                        <span className="type--fade">Investment Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/veronicamurguia/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Veronica Murguia</h4>
                            <span className="type--fade">
                              Investment Advisor
                            </span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Experienced Venture Development Consultant with a
                              demonstrated history and track record of working
                              in the early stage investment services and
                              entrepreneurship industry. Veronica is an active
                              connector, skilled business developer, known for
                              strong people skills, resilience, energy, drive to
                              pursue growth opportunities for blockchain and
                              positively contribute to the MENA entrepreneurship
                              ecosystem.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/Mago.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Magomet Tsanajev</h4>
                        <span className="type--fade">Content Creator</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/magomet-tsanajev-b8a0a2a5/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Magomet Tsanajev</h4>
                            <span className="type--fade">Content Creator</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Marketing and multimedia specialist, including
                              videography, photography and animation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/Ricardo.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Ricardo Pires</h4>
                        <span className="type--fade">Content Creator</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/ricardo-pires-3b062659/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Ricardo Pires</h4>
                            <span className="type--fade">Content Creator</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Ricardo Pires has more than 15 years media and
                              communication experience, first working as a
                              journalist in Brazil, then in India, and finally
                              for 10 years with the United Nations as a
                              Communication Specialist in humanitarian efforts,
                              crisis communication, and development. His work
                              included stints in South Sudan, Peru, Ghana,
                              Nigeria, Zambia, Central African Republic,
                              Switzerland, Italy and Kenya.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2 className="">Advisors</h2>
              </div>
            </div>
            <div className="row">
              <div className="masonry">
                <div className="masonry__container masonry--active">
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/jonathan_johnson.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Jonathan Johnson</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/jonathanjohnson3/"
                            target="_blank"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            href="https://twitter.com/jjohnsonnow/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Jonathan Johnson</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>President, Medici Ventures, Inc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/richard_kastelein.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Richard Kastelein</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/expathos/"
                            target="_blank"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            href="https://twitter.com/expathos"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Richard Kastelein
                            </h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Blockchain News Publisher Partner Cryptoassets
                              Design Group
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/patrick_byrne.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Patrick Byrne</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://twitter.com/OverstockCEO"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Patrick Byrne</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>CEO, Overstock.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Image"
                          src="./img/julien_marlair.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Julien Marlair</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            href="https://www.linkedin.com/in/julienmarlair/"
                            target="_blank"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            href="https://twitter.com/jmarlair/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Julien Marlair</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Business Development and Innovation manager at
                              Proximus
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2 className="">Partners</h2>
              </div>
            </div>

            <div className="row align-center" style={{ marginTop: '50px' }}>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.settlemint.com"
                >
                  <img src="./img/Logos partners/logo-settlemint.png" />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazix.com"
                >
                  <img src="./img/Logos partners/logo-amazix.png" />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://entethalliance.org/"
                >
                  <img src="./img/Logos partners/eea-logo.png" />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sigfox.com"
                >
                  <img src="./img/Logos partners/Sigfox_Logo.png" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TeamSection;