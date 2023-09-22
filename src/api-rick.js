import { LitElement, html, css } from "lit";
import "./components/getData";
import "./components/ApiTemplate"
import style  from './components/styles/ApiRickStyle'

class ApiRick extends LitElement {
  static styles = [ style ];

  static get properties() {
    return {
      wiki: { type: Array },
    };
  }
  constructor() {
    super();
    this.wiki = [];
    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  _dataFormat(data) {
    let characters = [];
    data["results"].map((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.wiki = characters;
  }

  render() {
    return html`
      <get-data
        uri="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>
      <api-template></api-template>
      ${this.datetemplate}
    `;
  }
  get datetemplate() {
    return html`
      ${this.wiki.map(
        (character) => html`
          <div class="card">
            <div class="card-content">
              <h2>${character.name}</h2>
              <img src="${character.img}" alt="" />
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>
        `
      )}
    `;
  }
}

customElements.define("api-rick", ApiRick);
