import { css } from "lit";
export default css`
  :host {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .container {
    text-align: center;
  }
  get-data {
    display: none;
  }
  .card {
    background: #fff;
    border-radius: 10px;
    display: inline-block;
    width: 300px;
    min-height: 300px;
    margin: 1rem;
    position: relative;
    text-align: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    overflow: hidden;
  }
  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .card img {
    width: 80%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`
