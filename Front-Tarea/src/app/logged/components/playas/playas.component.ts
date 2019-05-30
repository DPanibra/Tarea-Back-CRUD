import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayaService } from '../../services/playa.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.component.html',
  styleUrls: ['./playas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PlayasComponent implements OnInit {

  usus;

  constructor(private _sPlaya: PlayaService,
    private _router: Router) { }

  ngOnInit() {
    this.setPlayasList();
  }

  setPlayasList() {
    this._sPlaya.getPlayas().subscribe((playas: any) => {

      this.usus = playas;
    });
  }
  delete(id) {
    this._sPlaya.delete(id).subscribe((rest: any) => {
      console.log(rest);
    });
    this._router.navigateByUrl('/logged/playas');
  }
  getById(id) {
    this._sPlaya.getById(id).subscribe((rest: any) => {
      console.log(rest);
    });
    this._router.navigateByUrl('/logged/usu/' + id);

  }



}