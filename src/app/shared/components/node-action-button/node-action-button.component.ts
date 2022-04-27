import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
             selector: 'dtt-icon-button',
             templateUrl: './node-action-button.component.html',
             styleUrls: ['./node-action-button.component.scss']
           })
export class NodeActionButtonComponent implements OnInit
{
  @Input() public disabled: boolean = false;
  @Input() public tooltip: string | undefined;
  @Input() public tooltipDisabled: boolean | undefined;

  @Output() public clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor()
  {
  }

  ngOnInit(): void
  {
  }

  public onClick(mouseEvent: MouseEvent): void
  {
    if ( this.disabled ) return;
    this.clicked.next(mouseEvent);
  }
}
