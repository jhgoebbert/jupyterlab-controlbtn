import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  IRouter
} from '@jupyterlab/application';

import { Widget } from '@lumino/widgets';

import { ITopBar } from 'jupyterlab-topbar';

import '@jupyterlab/application/style/buttons.css';

import '../style/index.css';

const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-controlbtn:plugin',
  autoStart: true,
  requires: [IRouter, ITopBar],
  activate: async (app: JupyterFrontEnd, router: IRouter, topBar: ITopBar) => {
    const controlbtn = document.createElement('a');
    controlbtn.id = 'control';
    controlbtn.innerHTML = 'Control Panel';
    controlbtn.addEventListener('click', function () {
      window.open('/home', '_blank');
    });

    const widget = new Widget({ node: controlbtn });
    widget.addClass('jp-Button-flat');
    topBar.addItem('controlbtn-button', widget);
  }
};

export default extension;
