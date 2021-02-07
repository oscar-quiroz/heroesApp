import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-comfirmar',
  templateUrl: './comfirmar.component.html',
  styleUrls: ['./comfirmar.component.css']
})
export class ComfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ComfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
    
  }


  borrar() {
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }



}
