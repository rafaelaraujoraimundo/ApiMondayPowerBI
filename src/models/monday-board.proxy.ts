import { MondayColumnProxy } from './monday-column.proxy';
import { MondayColumnValueProxy } from './monday-column-value.proxy';
import { MondayItemProxy, MondayItempagesProxy } from './monday-item.proxy';

export interface MondayBoardProxy {
  id: string;
  columns: MondayColumnProxy[];
  items: MondayItemProxy[];
  items_page : any;
}
