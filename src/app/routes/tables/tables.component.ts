import { Component } from '@angular/core';
import { PoTableColumn, PoTableColumnSort } from '@po-ui/ng-components';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  
onSort($event: PoTableColumnSort) {
throw new Error('Method not implemented.');
}

  columns: Array<PoTableColumn> = [
    { property: 'name', label: 'Name' },
    { property: 'age', label: 'Age' },
    { property: 'email', label: 'Email' }
  ]
    items = [
      { name: 'John', age: 30, email: 'john@example.com' },
      { name: 'Alice', age: 25, email: 'alice@example.com' },
      { name: 'Bob', age: 35, email: 'bob@example.com' }
    ];
}
