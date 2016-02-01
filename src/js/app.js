import RenderList from './modules/RenderList';



export default class App {
  constructor() {
    const renderList = new RenderList('data-list');
    renderList.render();
  }
  initEvent() {
  }
}
