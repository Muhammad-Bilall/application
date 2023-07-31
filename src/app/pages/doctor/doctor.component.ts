import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DocService } from 'src/app/service/doc.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent  implements OnInit{

 
  ngOnInit(): void {
    this.getPatientList();
  };
  
  
  displayedColumns: string[] = [
    'id',
   'FirstName', 
   'LastName',
    'date',
    'Gender',
    'phone',
    'Payment',
  ];
 
  
  val= new FormControl('');
  doctors: string[] = [
    'Neurology', 'Cardiology', 'Radiology','Surgeon','Psychatrist',

  ];
 
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  
  constructor(private _docService:DocService){}
getPatientList(){
  this._docService.getPatientList().subscribe({
    next:(res)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator=this.paginator;
    },
    error:console.log,
  });
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
handleClick(val:any) {
 
  const filterValue = val.value[0];
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
  
}

}