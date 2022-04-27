import {Component, OnInit} from '@angular/core';


@Component({
             selector: 'dtt-dialog-actions',
             templateUrl: './dialog-actions.component.html',
             styleUrls: ['./dialog-actions.component.scss']
           })
export class DialogActionsComponent implements OnInit
{

  public viewTextDetails = false;

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

}
