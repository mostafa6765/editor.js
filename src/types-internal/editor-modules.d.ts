import UI from '../components/modules/ui';
import BlockEvents from '../components/modules/blockEvents';
import Listeners from '../components/modules/listeners';
import Toolbar from '../components/modules/toolbar/index';
import InlineToolbar from '../components/modules/toolbar/inline';
import Toolbox from '../components/modules/toolbar/toolbox';
import BlockSettings from '../components/modules/toolbar/blockSettings';
import Events from '../components/modules/events';
import Shortcuts from '../components/modules/shortcuts';
import Paste from '../components/modules/paste';
import Notifier from '../components/modules/notifier';
import DragNDrop from '../components/modules/dragNDrop';
import ModificationsObserver from '../components/modules/modificationsObserver';
import Renderer from '../components/modules/renderer';
import Sanitizer from '../components/modules/sanitizer';
import Tools from '../components/modules/tools';
import API from '../components/modules/api/index';
import Caret from '../components/modules/caret';
import BlockManager from '../components/modules/blockManager';
import BlocksAPI from '../components/modules/api/blocks';
import CaretAPI from '../components/modules/api/caret';
import EventsAPI from '../components/modules/api/events';
import ListenersAPI from '../components/modules/api/listeners';
import SanitizerAPI from '../components/modules/api/sanitizer';
import ToolbarAPI from '../components/modules/api/toolbar';
import StylesAPI from '../components/modules/api/styles';
import SelectionAPI from '../components/modules/api/selection';
import NotifierAPI from '../components/modules/api/notifier';
import SaverAPI from '../components/modules/api/saver';
import Saver from '../components/modules/saver';
import BlockSelection from '../components/modules/blockSelection';
import RectangleSelection from '../components/modules/RectangleSelection';
import InlineToolbarAPI from '../components/modules/api/inlineToolbar';

export interface EditorModules {
  UI: UI;
  BlockEvents: BlockEvents;
  BlockSelection: BlockSelection;
  RectangleSelection: RectangleSelection;
  Listeners: Listeners;
  Toolbar: Toolbar;
  InlineToolbar: InlineToolbar;
  Toolbox: Toolbox;
  BlockSettings: BlockSettings;
  Events: Events;
  Shortcuts: Shortcuts;
  Paste: Paste;
  DragNDrop: DragNDrop;
  ModificationsObserver: ModificationsObserver;
  Renderer: Renderer;
  Sanitizer: Sanitizer;
  Tools: Tools;
  API: API;
  Caret: Caret;
  Saver: Saver;
  Notifier: Notifier;
  BlockManager: BlockManager;
  BlocksAPI: BlocksAPI;
  CaretAPI: CaretAPI;
  EventsAPI: EventsAPI;
  ListenersAPI: ListenersAPI;
  SanitizerAPI: SanitizerAPI;
  SaverAPI: SaverAPI;
  SelectionAPI: SelectionAPI;
  StylesAPI: StylesAPI;
  ToolbarAPI: ToolbarAPI;
  InlineToolbarAPI: InlineToolbarAPI;
  NotifierAPI: NotifierAPI;
}
