import { LitElement, html } from 'lit';
import style from './styles/ApiTemplateStyles.js'
export class ApiTemplate extends LitElement {
    static get styles(){
        return [style]
    }
    
    render(){
        return html`
        <div>
            <h1>The <strong class="title">
            Rick and Morty
            </strong> Api</h1>
            <p class="title">LitElement</p>
        </div>
        `
    }
}
customElements.define('api-template', ApiTemplate);
