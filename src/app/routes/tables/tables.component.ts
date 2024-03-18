import { Component, OnInit } from '@angular/core';
import { PoTableColumn, PoTableColumnSort } from '@po-ui/ng-components';
import { GetListaService } from '../../service/get-lista.service';
import { Animal } from '../../Animals';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  animals: Animal[] = []

  columns: Array<PoTableColumn> = [
    { property: 'id', label: 'id' },
    { property: 'name', label: 'name' },
    { property: 'type', label: 'type' },
    { property: 'age', label: 'age' },
  ];

  items = [
    { name: 'John', age: 30, email: 'john@example.com' },
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 35, email: 'bob@example.com' }
  ];

  constructor(private tablesService: GetListaService) {
    this.getAnimals()
  }

  ngOnInit(): void {
    // Inicialização de dados ou lógica aqui
  }

  onSort(event: PoTableColumnSort): void {
    // Lógica para ordenação das colunas aqui
  }
  getAnimals():void {
    this.tablesService.getAll().subscribe((animals) => (this.animals))
  }

}
