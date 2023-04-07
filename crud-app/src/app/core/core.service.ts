import { Injectable } from '@angular/core';
import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string , action: string = 'ok') {
    this._snackBar.open(message, action,{
      duration: 1000,
      verticalPosition: "top"
    });
  }
}
