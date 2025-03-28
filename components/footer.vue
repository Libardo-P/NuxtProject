<template>
    <footer>
      <!-- Footer para desktop -->
      <div class="container desktop-footer">
        <div class="row">
          <div class="col-md-3 footer-section">
            <h5>Contactos</h5>
            <p>Reitoria: (+351) 291 209 400</p>
            <p>Campus: (+351) 291 705 000</p>
            <p><a href="#">Contactos Adicionais</a></p>
          </div>
          <div class="col-md-3 footer-section">
            <h5>Legal</h5>
            <p><a href="#">Documentação Legal</a></p>
            <p><a href="#">Regulamentos</a></p>
            <p><a href="#">Política de Dados</a></p>
          </div>
          <div class="col-md-3 footer-section">
            <h5>Ligações</h5>
            <p><a href="#">Notícias e Destaques</a></p>
            <p><a href="#">Calendários e Horários</a></p>
            <p><a href="#">Diretório de Pessoas</a></p>
          </div>
          <div class="col-md-3 footer-section">
            <h5>Ensino</h5>
            <p><a href="#">Oferta Formativa</a></p>
            <p><a href="#">Licenciaturas</a></p>
            <p><a href="#">Mestrados</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright © 2025 UNIVERSIDADE da MADEIRA</p>
        </div>
      </div>
  
      <!-- Footer para mobile (accordion) -->
      <div class="container mobile-footer">
        <div class="accordion" id="footerAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Contactos
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#footerAccordion">
              <div class="accordion-body">
                <p>Reitoria: (+351) 291 209 400</p>
                <p>Campus: (+351) 291 705 000</p>
                <p><a href="#">Contactos Adicionais</a></p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Legal
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#footerAccordion">
              <div class="accordion-body">
                <p><a href="#">Documentação Legal</a></p>
                <p><a href="#">Regulamentos</a></p>
                <p><a href="#">Política de Dados</a></p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Ligações
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#footerAccordion">
              <div class="accordion-body">
                <p><a href="#">Notícias e Destaques</a></p>
                <p><a href="#">Calendários e Horários</a></p>
                <p><a href="#">Diretório de Pessoas</a></p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                Ensino
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#footerAccordion">
              <div class="accordion-body">
                <p><a href="#">Oferta Formativa</a></p>
                <p><a href="#">Licenciaturas</a></p>
                <p><a href="#">Mestrados</a></p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="footer-bottom mt-3">
          <p>Copyright © 2025 UNIVERSIDADE da MADEIRA</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  footer {
    background: #333;
    color: #fff;
    padding: 40px 20px;
    font-size: 0.9rem;
    text-align: center;
  }
  footer a {
    color: #fff;
    text-decoration: none;
  }
  footer a:hover {
    text-decoration: underline;
  }
  .footer-section {
    margin-bottom: 20px;
  }
  .footer-section h5 {
    margin-bottom: 15px;
    font-weight: bold;
  }
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid #444;
    padding-top: 20px;
  }
  .accordion-button {
    background-color: #333;
    color: #fff;
  }
  .accordion-button:not(.collapsed) {
    background-color: #444;
  }
  .accordion-body {
    background-color: #222;
    color: #fff;
  }
  .desktop-footer {
    display: none;
  }
  .mobile-footer {
    display: block;
  }
  @media (min-width: 768px) {
    .desktop-footer {
      display: block;
    }
    .mobile-footer {
      display: none;
    }
  }
  </style>
  