import RenderList from './modules/RenderList';
import RenderTimeLine from './modules/RenderTimeLine';
import RenderDirection from './modules/RenderDirection';
import RenderHeatmap from './modules/RenderHeatmap';

import Line from './modules/renderEngines/Line';
import Bar from './modules/renderEngines/Bar';
import Dot from './modules/renderEngines/Dot';


export default class App {
  constructor() {
    const renderList = new RenderList('widget-list');
    renderList.render();

    const renderTimeLine = new RenderTimeLine('widget-timeline', Line);
    const renderTimeBars = new RenderTimeLine('widget-timebars', Bar);
    const renderTimeDots = new RenderTimeLine('widget-timedots', Dot);

    const renderDirection = new RenderDirection('widget-direction');

    const renderHeatMapSquare = new RenderHeatmap('widget-sphere-map', 'sphere');
    const renderHeatMapSphere = new RenderHeatmap('widget-square-map', 'square');

    renderDirection.render();
  }
  initEvent() {
  }
}
