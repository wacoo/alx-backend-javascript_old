/// <reference path="./crud.d.ts"/>
import * as crd from './crud';
import {RowID, RowElement} from './interface';

 const row: RowElement = {
  firstName: 'Guillame',
  lastName: 'Salva',
 };
 const newRowID: RowID = crd.insertRow(row);
 const updateRow: RowElement= {...row, age: 23};
 crd.updateRow(newRowID, updateRow);
 crd.deleteRow(newRowID);

