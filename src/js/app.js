import RenderList from './modules/RenderList';
import RenderTimeLine from './modules/RenderTimeLine';



export default class App {
  constructor() {
    const renderList = new RenderList('data-list');
    renderList.render();

    const renderTimeLine = new RenderTimeLine('data-timeline', 'line');
    const renderTimeBars = new RenderTimeLine('data-timebars', 'bar');
  }
  initEvent() {
  }
}
