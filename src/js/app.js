import RenderList from './modules/RenderList';
import RenderTimeLine from './modules/RenderTimeLine';

import Line from './modules/renderEngines/Line';
import Bar from './modules/renderEngines/Bar';
import Dot from './modules/renderEngines/Dot';


export default class App {
  constructor() {
    const renderList = new RenderList('data-list');
    renderList.render();

    const renderTimeLine = new RenderTimeLine('data-timeline', Line);
    const renderTimeBars = new RenderTimeLine('data-timebars', Bar);
    const renderTimeDots = new RenderTimeLine('data-timedots', Dot);
  }
  initEvent() {
  }
}
