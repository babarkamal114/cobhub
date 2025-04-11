'use client';

import { TD } from './TD';
import { TH } from './TH';
import { TR } from './TR';
import { TableComp } from './Table';
import { Tbody } from './Tbody';
import { Thead } from './Thead';

export class Table {
  static Root = TableComp;
  static TD = TD;
  static TH = TH;
  static Tbody = Tbody;
  static Thead = Thead;
  static TR = TR;
}
